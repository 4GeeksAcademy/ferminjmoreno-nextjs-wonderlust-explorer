import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/Providers';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Wonderlust Explorer — 100 Experiencias de Viaje Inolvidables',
  description: 'Explora 100 experiencias curadas en Aventura, Cultura, Gastronomía, Bienestar y Naturaleza inspiradas en el diseño Dribbble Travel Cards.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-gray-900 font-sans">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
