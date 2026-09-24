const fs = require('fs');
const path = require('path');

const docxModulePath = 'C:/4-Programacion/4geekAcademy/AIEngineering/airbnb/node_modules/docx';
const { Document, Packer, Paragraph, TextRun, HeadingLevel, ImageRun } = require(docxModulePath);

function parseMarkdownToDocxChildren(mdContent, baseDir) {
  const lines = mdContent.split(/\r?\n/);
  const children = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (!line) {
      children.push(new Paragraph({ spacing: { after: 120 } }));
      continue;
    }

    // Detección de imágenes Markdown: ![alt](path)
    const imgMatch = line.match(/^!\[(.*?)\]\((.*?)\)$/);
    if (imgMatch) {
      const imgRelativePath = imgMatch[2];
      const fullImgPath = path.isAbsolute(imgRelativePath)
        ? imgRelativePath
        : path.resolve(baseDir, imgRelativePath);

      if (fs.existsSync(fullImgPath)) {
        try {
          children.push(
            new Paragraph({
              children: [
                new ImageRun({
                  data: fs.readFileSync(fullImgPath),
                  transformation: { width: 560, height: 315 }
                })
              ],
              spacing: { before: 180, after: 200 }
            })
          );
          continue;
        } catch (e) {
          console.error("Error al incrustar imagen en Word:", fullImgPath, e.message);
        }
      }
    }

    if (line.startsWith('# ')) {
      children.push(
        new Paragraph({
          text: line.substring(2).trim(),
          heading: HeadingLevel.TITLE,
          spacing: { before: 240, after: 180 }
        })
      );
    } else if (line.startsWith('## ')) {
      children.push(
        new Paragraph({
          text: line.substring(3).trim(),
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 200, after: 140 }
        })
      );
    } else if (line.startsWith('### ')) {
      children.push(
        new Paragraph({
          text: line.substring(4).trim(),
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 160, after: 100 }
        })
      );
    } else if (line.startsWith('---')) {
      children.push(
        new Paragraph({
          text: "____________________________________________________________",
          spacing: { before: 120, after: 120 }
        })
      );
    } else if (line.startsWith('* ') || line.startsWith('- ')) {
      const bulletText = line.substring(2).replace(/\*\*/g, '').trim();
      children.push(
        new Paragraph({
          text: "• " + bulletText,
          spacing: { after: 80 }
        })
      );
    } else {
      const cleanText = line.replace(/\*\*/g, '').replace(/`/g, '');
      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: cleanText,
              size: 22
            })
          ],
          spacing: { after: 120 }
        })
      );
    }
  }

  return children;
}

async function convertFile(mdPath, docxOutputPath) {
  if (!fs.existsSync(mdPath)) return;
  const content = fs.readFileSync(mdPath, 'utf8');
  const baseDir = path.dirname(mdPath);
  const children = parseMarkdownToDocxChildren(content, baseDir);

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: children
      }
    ]
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(docxOutputPath, buffer);
  console.log(`Generado exitosamente: ${docxOutputPath}`);
}

async function main() {
  const rootRepo = path.resolve(__dirname, '..');
  const parentFolder = path.resolve(rootRepo, '..');

  const files = [
    { md: 'bitacora_de_accion.md', docx: 'bitacora_de_accion.docx' },
    { md: 'README.md', docx: 'README.docx' },
    { md: 'AGENTS.md', docx: 'AGENTS.docx' }
  ];

  for (const f of files) {
    const repoMd = path.join(rootRepo, f.md);
    const repoDocx = path.join(rootRepo, f.docx);
    const parentDocx = path.join(parentFolder, f.docx);

    if (fs.existsSync(repoMd)) {
      await convertFile(repoMd, repoDocx);
      await convertFile(repoMd, parentDocx);
    }
  }
}

main().catch((err) => {
  console.error("Error al compilar docx:", err);
  process.exit(1);
});
