import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-12 text-sm text-gray-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-gray-800">Wonderlust Explorer</span>
          <span>·</span>
          <span>AI Engineering 4Geeks Academy</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-emerald-600 transition-colors">
            Inicio
          </Link>
          <Link href="/experiences" className="hover:text-emerald-600 transition-colors">
            Explorador
          </Link>
          <Link href="/favorites" className="hover:text-emerald-600 transition-colors">
            Favoritos
          </Link>
          <Link href="/profile" className="hover:text-emerald-600 transition-colors">
            Perfil
          </Link>
        </div>
        <p className="text-xs text-gray-400">
          Inspirado en el diseño Dribbble Travel Cards.
        </p>
      </div>
    </footer>
  );
}
