const fs = require('fs');
const path = require('path');
const sharp = require('C:/4-Programacion/4geekAcademy/AIEngineering/airbnb/node_modules/sharp');

const rootDir = path.resolve(__dirname, '..');
const parentDir = path.resolve(rootDir, '..');
const publicDir = path.join(rootDir, 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// ============================================================================
// DIAGRAMA 1: FLUJO DE NAVEGACIÓN Y RUTAS (Wonderlust Explorer)
// ============================================================================
const svgNav = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 950" width="1600" height="950" style="background:#090d16; font-family:'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;">
  <defs>
    <linearGradient id="navHeaderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#059669" />
      <stop offset="50%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#2563eb" />
    </linearGradient>
    <filter id="cardShadow" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.5" />
    </filter>
  </defs>

  <!-- Banner Superior -->
  <rect x="50" y="30" width="1500" height="85" rx="20" fill="url(#navHeaderGrad)" filter="url(#cardShadow)"/>
  <text x="80" y="75" fill="#ffffff" font-size="26" font-weight="bold">WONDERLUST EXPLORER — DIAGRAMA DE FLUJO DE NAVEGACIÓN</text>
  <text x="80" y="100" fill="#a7f3d0" font-size="14" font-weight="500">Next.js 16 App Router · Rutas Públicas, Dinámicas y Persistencia de Favoritos</text>
  <text x="1350" y="80" fill="#ffffff" font-size="14" font-weight="bold" opacity="0.9">Estilo Dribbble Travel Cards</text>

  <!-- NODO 1: NAVBAR GLOBAL -->
  <g filter="url(#cardShadow)">
    <rect x="50" y="145" width="1500" height="95" rx="16" fill="#1e293b" stroke="#334155" stroke-width="2"/>
    <text x="80" y="180" fill="#34d399" font-size="16" font-weight="bold">NAVBAR PERSISTENTE (Navbar.tsx)</text>
    <text x="80" y="202" fill="#94a3b8" font-size="12">Acceso global omnicanal a todas las rutas principales con contador dinámico reactivo</text>
    
    <rect x="580" y="165" width="180" height="42" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
    <text x="610" y="191" fill="#ffffff" font-size="13" font-weight="bold">🏠 Inicio (/)</text>

    <rect x="780" y="165" width="220" height="42" rx="10" fill="#0f172a" stroke="#0ea5e9" stroke-width="1.5"/>
    <text x="805" y="191" fill="#ffffff" font-size="13" font-weight="bold">🧭 Explorar (/experiences)</text>

    <rect x="1020" y="165" width="230" height="42" rx="10" fill="#0f172a" stroke="#f43f5e" stroke-width="1.5"/>
    <text x="1045" y="191" fill="#ffffff" font-size="13" font-weight="bold">❤️ Favoritos (/favorites) [N]</text>

    <rect x="1270" y="165" width="180" height="42" rx="10" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5"/>
    <text x="1305" y="191" fill="#ffffff" font-size="13" font-weight="bold">👤 Perfil (/profile)</text>
  </g>

  <!-- LÍNEAS DE FLUJO -->
  <path d="M 280 240 L 280 300" stroke="#10b981" stroke-width="3" fill="none" stroke-dasharray="6,4" marker-end="url(#arrow)"/>
  <path d="M 750 240 L 750 300" stroke="#0ea5e9" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
  <path d="M 1150 240 L 1150 300" stroke="#f43f5e" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
  <path d="M 1400 240 L 1400 300" stroke="#8b5cf6" stroke-width="3" fill="none" stroke-dasharray="6,4"/>

  <!-- RUTA 1: HOME (/) -->
  <g filter="url(#cardShadow)">
    <rect x="50" y="300" width="340" height="390" rx="18" fill="#131c2e" stroke="#10b981" stroke-width="2"/>
    <rect x="50" y="300" width="340" height="40" rx="18" fill="#065f46"/>
    <text x="75" y="326" fill="#ffffff" font-size="14" font-weight="bold">1. HOME (src/app/page.tsx)</text>
    
    <rect x="70" y="355" width="300" height="65" rx="10" fill="#1e293b"/>
    <text x="85" y="380" fill="#34d399" font-size="13" font-weight="bold">Sección Hero Inmersiva</text>
    <text x="85" y="400" fill="#94a3b8" font-size="11">Titular inspirador + Badges + Estadísticas</text>

    <rect x="70" y="430" width="300" height="65" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
    <text x="85" y="455" fill="#ffffff" font-size="12" font-weight="bold">Botón CTA Principal</text>
    <text x="85" y="475" fill="#6ee7b7" font-size="11">→ Navega a /experiences</text>

    <rect x="70" y="505" width="300" height="65" rx="10" fill="#1e293b"/>
    <text x="85" y="530" fill="#fbbf24" font-size="13" font-weight="bold">Explorador de Categorías</text>
    <text x="85" y="550" fill="#94a3b8" font-size="11">Adventure, Culture, Food, Wellness, Nature</text>

    <rect x="70" y="580" width="300" height="85" rx="10" fill="#1e293b"/>
    <text x="85" y="605" fill="#f59e0b" font-size="13" font-weight="bold">Top Rated 5.0★</text>
    <text x="85" y="625" fill="#94a3b8" font-size="11">Tarjetas destacadas con enlace directo</text>
    <text x="85" y="645" fill="#6ee7b7" font-size="11">al detalle de experiencia (/experiences/[id])</text>
  </g>

  <!-- RUTA 2: EXPLORADOR (/experiences) -->
  <g filter="url(#cardShadow)">
    <rect x="420" y="300" width="460" height="390" rx="18" fill="#131c2e" stroke="#0ea5e9" stroke-width="2"/>
    <rect x="420" y="300" width="460" height="40" rx="18" fill="#0369a1"/>
    <text x="445" y="326" fill="#ffffff" font-size="14" font-weight="bold">2. EXPLORADOR (/experiences/page.tsx)</text>

    <rect x="440" y="355" width="420" height="55" rx="10" fill="#1e293b"/>
    <text x="455" y="380" fill="#38bdf8" font-size="13" font-weight="bold">Barra de Búsqueda Reactiva &amp; Ordenador</text>
    <text x="455" y="398" fill="#94a3b8" font-size="11">Filtro en tiempo real por título, ciudad o país y precio</text>

    <rect x="440" y="420" width="420" height="55" rx="10" fill="#1e293b"/>
    <text x="455" y="445" fill="#34d399" font-size="13" font-weight="bold">Filtro de Categorías con Pastillas (CategoryFilter)</text>
    <text x="455" y="463" fill="#94a3b8" font-size="11">All (100), Adventure (20), Culture (20), Food (20)...</text>

    <rect x="440" y="485" width="420" height="180" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="455" y="515" fill="#ffffff" font-size="14" font-weight="bold">Cuadrícula Responsive (100 Experience Cards)</text>
    <text x="455" y="538" fill="#94a3b8" font-size="11">• Foto panorámica con zoom suave en hover</text>
    <text x="455" y="558" fill="#94a3b8" font-size="11">• Badge flotante con Glassmorphism (Categoría)</text>
    <text x="455" y="578" fill="#f43f5e" font-size="11">• Botón interactivo de Favorito (Toggle ❤️ / 🤍)</text>
    <text x="455" y="598" fill="#fbbf24" font-size="11">• Puntuación ★ y precio por persona</text>
    <text x="455" y="630" fill="#38bdf8" font-size="12" font-weight="bold">→ Clic en tarjeta navega a /experiences/[id]</text>
  </g>

  <!-- RUTA 3: DETALLE (/experiences/[id]) -->
  <g filter="url(#cardShadow)">
    <rect x="420" y="720" width="460" height="190" rx="16" fill="#1e293b" stroke="#6366f1" stroke-width="2"/>
    <rect x="420" y="720" width="460" height="34" rx="16" fill="#4338ca"/>
    <text x="445" y="743" fill="#ffffff" font-size="13" font-weight="bold">3. DETALLE DINÁMICO (/experiences/[id]) — 100 Páginas SSG</text>

    <text x="445" y="775" fill="#a5b4fc" font-size="12" font-weight="bold">• Lectura dinámica de params.id (1 a 100)</text>
    <text x="445" y="798" fill="#cbd5e1" font-size="11">• Galería principal en alta resolución + Botón de Favorito</text>
    <text x="445" y="818" fill="#cbd5e1" font-size="11">• Descripción detallada + Inclusiones del tour</text>
    <text x="445" y="838" fill="#cbd5e1" font-size="11">• Tarjeta interactiva de reserva simulada con cálculo por viajero</text>
    <text x="445" y="865" fill="#34d399" font-size="12" font-weight="bold">• Carrusel de experiencias similares recomendadas</text>
  </g>

  <!-- RUTA 4: FAVORITOS (/favorites) -->
  <g filter="url(#cardShadow)">
    <rect x="910" y="300" width="310" height="390" rx="18" fill="#131c2e" stroke="#f43f5e" stroke-width="2"/>
    <rect x="910" y="300" width="310" height="40" rx="18" fill="#be123c"/>
    <text x="935" y="326" fill="#ffffff" font-size="14" font-weight="bold">4. FAVORITOS (/favorites)</text>

    <rect x="930" y="355" width="270" height="85" rx="10" fill="#1e293b"/>
    <text x="945" y="380" fill="#fb7185" font-size="13" font-weight="bold">Colección Personal</text>
    <text x="945" y="400" fill="#94a3b8" font-size="11">Renderiza exclusivamente las</text>
    <text x="945" y="418" fill="#94a3b8" font-size="11">experiencias marcadas con ❤️</text>

    <rect x="930" y="450" width="270" height="100" rx="10" fill="#1e293b"/>
    <text x="945" y="475" fill="#ffffff" font-size="12" font-weight="bold">Persistencia Local</text>
    <text x="945" y="495" fill="#94a3b8" font-size="11">Sincronizado en tiempo real</text>
    <text x="945" y="513" fill="#94a3b8" font-size="11">con localStorage</text>
    <text x="945" y="533" fill="#6ee7b7" font-size="11">(wonderlust_favorites)</text>

    <rect x="930" y="560" width="270" height="105" rx="10" fill="#1e293b"/>
    <text x="945" y="585" fill="#f43f5e" font-size="12" font-weight="bold">Estado Vacío (Empty State)</text>
    <text x="945" y="605" fill="#94a3b8" font-size="11">Si no hay favoritos marcados,</text>
    <text x="945" y="625" fill="#94a3b8" font-size="11">muestra invitación visual y</text>
    <text x="945" y="645" fill="#38bdf8" font-size="11">botón hacia el Explorador</text>
  </g>

  <!-- RUTA 5: PERFIL (/profile) -->
  <g filter="url(#cardShadow)">
    <rect x="1250" y="300" width="300" height="390" rx="18" fill="#131c2e" stroke="#8b5cf6" stroke-width="2"/>
    <rect x="1250" y="300" width="300" height="40" rx="18" fill="#6d28d9"/>
    <text x="1275" y="326" fill="#ffffff" font-size="14" font-weight="bold">5. PERFIL (/profile)</text>

    <rect x="1270" y="355" width="260" height="90" rx="10" fill="#1e293b"/>
    <text x="1285" y="380" fill="#c084fc" font-size="13" font-weight="bold">Identidad de Viajero</text>
    <text x="1285" y="400" fill="#ffffff" font-size="12">Fermín Moreno</text>
    <text x="1285" y="418" fill="#94a3b8" font-size="11">VIP Explorer · Zaragoza, ES</text>
    <text x="1285" y="435" fill="#34d399" font-size="10">Perfil Verificado 100%</text>

    <rect x="1270" y="455" width="260" height="95" rx="10" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5"/>
    <text x="1285" y="480" fill="#fb7185" font-size="13" font-weight="bold">Contador de Favoritos</text>
    <text x="1285" y="505" fill="#ffffff" font-size="20" font-weight="black">[N] Guardados</text>
    <text x="1285" y="530" fill="#38bdf8" font-size="11">→ Acceso directo a colección</text>

    <rect x="1270" y="560" width="260" height="105" rx="10" fill="#1e293b"/>
    <text x="1285" y="585" fill="#facc15" font-size="12" font-weight="bold">Estadísticas &amp; Muestra</text>
    <text x="1285" y="605" fill="#94a3b8" font-size="11">Vista previa de las últimas</text>
    <text x="1285" y="625" fill="#94a3b8" font-size="11">experiencias guardadas por</text>
    <text x="1285" y="645" fill="#94a3b8" font-size="11">el usuario en su sesión</text>
  </g>
</svg>
`;

// ============================================================================
// DIAGRAMA 2: ARQUITECTURA DE COMPONENTES Y ESTADO
// ============================================================================
const svgArch = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 950" width="1600" height="950" style="background:#0b1120; font-family:'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;">
  <defs>
    <linearGradient id="archHeaderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="50%" stop-color="#065f46" />
      <stop offset="100%" stop-color="#0f766e" />
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.5" />
    </filter>
  </defs>

  <!-- Header -->
  <rect x="50" y="30" width="1500" height="85" rx="20" fill="url(#archHeaderGrad)" filter="url(#shadow)"/>
  <text x="80" y="75" fill="#ffffff" font-size="26" font-weight="bold">WONDERLUST EXPLORER — ARQUITECTURA DE COMPONENTES Y ESTADO</text>
  <text x="80" y="100" fill="#6ee7b7" font-size="14" font-weight="500">React 19 · Next.js 16 (Turbopack) · TypeScript 5 · Tailwind CSS v4 · Dribbble Travel Cards</text>

  <!-- CAPA 1: ESTADO GLOBAL Y PERSISTENCIA -->
  <g filter="url(#shadow)">
    <rect x="50" y="145" width="1500" height="150" rx="16" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
    <rect x="50" y="145" width="1500" height="34" rx="16" fill="#1d4ed8"/>
    <text x="75" y="168" fill="#ffffff" font-size="14" font-weight="bold">1. CAPA DE ESTADO GLOBAL Y CONTEXTO (src/context/FavoritesContext.tsx + Providers.tsx)</text>

    <rect x="80" y="195" width="400" height="80" rx="12" fill="#0f172a" stroke="#60a5fa" stroke-width="1.5"/>
    <text x="100" y="222" fill="#60a5fa" font-size="14" font-weight="bold">FavoritesContext (React Context)</text>
    <text x="100" y="242" fill="#94a3b8" font-size="11">favorites: string[], toggleFavorite(), isFavorite()</text>
    <text x="100" y="260" fill="#94a3b8" font-size="11">favoritesCount: number, getFavoriteExperiences()</text>

    <rect x="520" y="195" width="380" height="80" rx="12" fill="#0f172a" stroke="#f43f5e" stroke-width="1.5"/>
    <text x="540" y="222" fill="#fb7185" font-size="14" font-weight="bold">Persistencia en Navegador</text>
    <text x="540" y="242" fill="#94a3b8" font-size="11">localStorage ['wonderlust_favorites']</text>
    <text x="540" y="260" fill="#cbd5e1" font-size="11">Sincronización bidireccional automática con hidratación segura</text>

    <rect x="940" y="195" width="570" height="80" rx="12" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
    <text x="960" y="222" fill="#34d399" font-size="14" font-weight="bold">Consumidores Reactivos</text>
    <text x="960" y="242" fill="#94a3b8" font-size="11">• Navbar (Badge contador en tiempo real) • ExperienceCard (Botón corazón)</text>
    <text x="960" y="260" fill="#94a3b8" font-size="11">• Detalle de Experiencia (Toggle reserva) • Perfil (Estadísticas de guardado)</text>
  </g>

  <!-- CAPA 2: COMPONENTES REUTILIZABLES DE UI -->
  <g filter="url(#shadow)">
    <rect x="50" y="325" width="1500" height="235" rx="16" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect x="50" y="325" width="1500" height="34" rx="16" fill="#047857"/>
    <text x="75" y="348" fill="#ffffff" font-size="14" font-weight="bold">2. SISTEMA DE COMPONENTES UI (Inspiración Oficial: Dribbble Travel Cards)</text>

    <!-- ExperienceCard.tsx -->
    <rect x="80" y="375" width="460" height="165" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="2"/>
    <text x="100" y="405" fill="#34d399" font-size="15" font-weight="bold">ExperienceCard.tsx</text>
    <text x="100" y="428" fill="#cbd5e1" font-size="12">• Bordes amplios y suaves: rounded-3xl</text>
    <text x="100" y="448" fill="#cbd5e1" font-size="12">• Elevación dinámica: hover:-translate-y-1.5 hover:shadow-xl</text>
    <text x="100" y="468" fill="#cbd5e1" font-size="12">• Badge Glassmorphism: bg-black/60 backdrop-blur-md</text>
    <text x="100" y="488" fill="#fb7185" font-size="12">• Microinteracción de Favorito: Botón corazón con animación</text>
    <text x="100" y="508" fill="#fbbf24" font-size="12">• Puntuación ★ 4.9 y Precio con acento esmeralda</text>

    <!-- CategoryFilter.tsx -->
    <rect x="570" y="375" width="440" height="165" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="590" y="405" fill="#38bdf8" font-size="15" font-weight="bold">CategoryFilter.tsx</text>
    <text x="590" y="428" fill="#cbd5e1" font-size="12">• Selector horizontal deslizable con iconos temáticos</text>
    <text x="590" y="448" fill="#cbd5e1" font-size="12">• Conteo dinámico por categoría: All, Adventure, Culture...</text>
    <text x="590" y="468" fill="#cbd5e1" font-size="12">• Estado activo estilizado con emerald-600 y sombra suave</text>
    <text x="590" y="495" fill="#94a3b8" font-size="11">Emite eventos onSelectCategory() para filtrado reactivo</text>

    <!-- Navbar.tsx y Footer.tsx -->
    <rect x="1040" y="375" width="470" height="165" rx="12" fill="#0f172a" stroke="#a855f7" stroke-width="1.5"/>
    <text x="1060" y="405" fill="#c084fc" font-size="15" font-weight="bold">Navbar.tsx &amp; Footer.tsx</text>
    <text x="1060" y="428" fill="#cbd5e1" font-size="12">• Header fijo con efecto translúcido: bg-white/80 backdrop-blur-md</text>
    <text x="1060" y="448" fill="#cbd5e1" font-size="12">• Badge numérico reactivo sobre la ruta /favorites</text>
    <text x="1060" y="468" fill="#cbd5e1" font-size="12">• Indicador activo por usePathname() de Next.js Navigation</text>
    <text x="1060" y="488" fill="#cbd5e1" font-size="12">• Footer corporativo institucional con enlaces clave</text>
  </g>

  <!-- CAPA 3: MODELO DE DATOS Y GENERACIÓN SSG -->
  <g filter="url(#shadow)">
    <rect x="50" y="585" width="1500" height="320" rx="16" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <rect x="50" y="585" width="1500" height="34" rx="16" fill="#b45309"/>
    <text x="75" y="608" fill="#ffffff" font-size="14" font-weight="bold">3. CAPA DE DATOS Y RENDERIZADO SSG (src/data/experience.ts)</text>

    <!-- Schema TypeScript -->
    <rect x="80" y="635" width="460" height="245" rx="12" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <text x="100" y="665" fill="#fbbf24" font-size="15" font-weight="bold">Modelo de Datos (TypeScript)</text>
    <text x="100" y="692" fill="#a7f3d0" font-size="12">interface Experience {</text>
    <text x="120" y="712" fill="#e2e8f0" font-size="11">id: string; // "1" a "100"</text>
    <text x="120" y="730" fill="#e2e8f0" font-size="11">title: string;</text>
    <text x="120" y="748" fill="#e2e8f0" font-size="11">description: string;</text>
    <text x="120" y="766" fill="#e2e8f0" font-size="11">category: 'Adventure'|'Culture'|'Food'|'Wellness'|'Nature';</text>
    <text x="120" y="784" fill="#e2e8f0" font-size="11">destination: string; // Ciudad, País</text>
    <text x="120" y="802" fill="#e2e8f0" font-size="11">price: number; rating: number; imageUrl: string;</text>
    <text x="100" y="822" fill="#a7f3d0" font-size="12">}</text>

    <!-- 100 Items Distribution -->
    <rect x="570" y="635" width="440" height="245" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <text x="590" y="665" fill="#34d399" font-size="15" font-weight="bold">Dataset: 100 Experiencias</text>
    <text x="590" y="695" fill="#ffffff" font-size="12">🧗 Adventure: 20 items (Rafting, Glaciar, Bungee...)</text>
    <text x="590" y="720" fill="#ffffff" font-size="12">🏛️ Culture: 20 items (Té Kioto, Louvre, Machu Picchu...)</text>
    <text x="590" y="745" fill="#ffffff" font-size="12">🍜 Food: 20 items (Oaxaca, Pasta Bolonia, Tsukiji...)</text>
    <text x="590" y="770" fill="#ffffff" font-size="12">🧘 Wellness: 20 items (Ubud, Laguna Azul, Kerala...)</text>
    <text x="590" y="795" fill="#ffffff" font-size="12">🌿 Nature: 20 items (Serengeti, Auroras, Galápagos...)</text>
    <text x="590" y="830" fill="#38bdf8" font-size="11">Total: 100 objetos curados con validación en build</text>

    <!-- Static Site Generation -->
    <rect x="1040" y="635" width="470" height="245" rx="12" fill="#0f172a" stroke="#a855f7" stroke-width="1.5"/>
    <text x="1060" y="665" fill="#c084fc" font-size="15" font-weight="bold">Compilación y Generación SSG</text>
    <text x="1060" y="695" fill="#e2e8f0" font-size="12">• generateStaticParams() precompila las 100 páginas</text>
    <text x="1060" y="718" fill="#e2e8f0" font-size="12">• 107 páginas generadas en tiempo récord (1.1s)</text>
    <text x="1060" y="741" fill="#e2e8f0" font-size="12">• Tiempo de compilación Turbopack: 1.6s</text>
    <text x="1060" y="764" fill="#34d399" font-size="12">• Exit Code 0: Cero errores de sintaxis y tipos</text>
    <text x="1060" y="800" fill="#cbd5e1" font-size="11">Rendimiento ultra optimizado con navegación instantánea</text>
  </g>
</svg>
`;

async function main() {
  const navPngName = 'diagrama_navegacion_wonderlust.png';
  const archPngName = 'diagrama_arquitectura_wonderlust.png';

  const targetsNav = [
    path.join(rootDir, navPngName),
    path.join(publicDir, navPngName),
    path.join(parentDir, navPngName)
  ];

  const targetsArch = [
    path.join(rootDir, archPngName),
    path.join(publicDir, archPngName),
    path.join(parentDir, archPngName)
  ];

  console.log('Compilando diagrama_navegacion_wonderlust.png...');
  const navBuffer = await sharp(Buffer.from(svgNav)).png({ quality: 95 }).toBuffer();
  for (const t of targetsNav) {
    fs.writeFileSync(t, navBuffer);
    console.log('Guardado:', t);
  }

  console.log('Compilando diagrama_arquitectura_wonderlust.png...');
  const archBuffer = await sharp(Buffer.from(svgArch)).png({ quality: 95 }).toBuffer();
  for (const t of targetsArch) {
    fs.writeFileSync(t, archBuffer);
    console.log('Guardado:', t);
  }

  console.log('¡Diagramas PNG generados con éxito!');
}

main().catch((err) => {
  console.error('Error generando diagramas PNG:', err);
  process.exit(1);
});
