'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useFavorites } from '@/context/FavoritesContext';

export function Navbar() {
  const pathname = usePathname();
  const { favorites } = useFavorites();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Explorador', href: '/experiences' },
    { name: 'Favoritos', href: '/favorites', count: favorites.length },
    { name: 'Perfil', href: '/profile' },
  ];

  const checkIsActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo y Marca */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white font-black text-lg shadow-md shadow-emerald-600/25 group-hover:scale-105 transition">
              W
            </span>
            <span className="font-extrabold text-xl tracking-tight text-gray-900 group-hover:text-emerald-600 transition">
              Wonderlust<span className="text-emerald-600">.</span>
            </span>
          </Link>

          {/* Navegación Escritorio */}
          <nav className="hidden md:flex items-center gap-1.5" aria-label="Navegación principal">
            {navLinks.map((item) => {
              const isActive = checkIsActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700 font-bold shadow-sm ring-1 ring-emerald-500/20'
                      : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{item.name}</span>
                  {item.count !== undefined && (
                    <span
                      className={`inline-flex items-center justify-center h-5 min-w-[20px] px-1.5 rounded-full text-xs font-bold transition ${
                        isActive
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-gray-100 text-gray-700 group-hover:bg-emerald-100'
                      }`}
                    >
                      {item.count}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Acciones derecha escritorio */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/experiences"
              className="rounded-full bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-md shadow-emerald-600/25 hover:bg-emerald-700 hover:shadow-lg transition"
            >
              Explorar 100 Experiencias
            </Link>
          </div>

          {/* Botón Menú Hamburguesa Móvil */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-600 hover:text-emerald-600 hover:bg-gray-100 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable Móvil responsivo */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-5 shadow-lg space-y-1.5 animate-fadeIn">
          {navLinks.map((item) => {
            const isActive = checkIsActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-semibold transition ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-700 font-bold ring-1 ring-emerald-500/25'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-emerald-600'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span>{item.name}</span>
                {item.count !== undefined && (
                  <span
                    className={`inline-flex items-center justify-center h-6 min-w-[24px] px-2 rounded-full text-xs font-bold ${
                      isActive ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {item.count}
                  </span>
                )}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/experiences"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700 transition"
            >
              Explorar Catálogo Completo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export const NavBar = Navbar;
export default Navbar;
