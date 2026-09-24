'use client';

import React from 'react';
import Link from 'next/link';
import { useFavorites } from '@/context/FavoritesContext';
import { ExperienceCard } from '@/components/ExperienceCard';

export default function FavoritesPage() {
  const { getFavoriteExperiences, favoritesCount, favorites } = useFavorites();
  const favoriteExperiences = getFavoriteExperiences();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Cabecera de Favoritos */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-rose-500">
            Colección Personal
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1">
            Mis Experiencias Favoritas ❤️
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Aquí encontrarás guardadas todas las actividades y viajes que has marcado para tu próxima aventura.
          </p>
        </div>

        {favoritesCount > 0 && (
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-rose-50 border border-rose-200 px-4 py-1.5 text-xs font-bold text-rose-700">
              {favoritesCount} {favoritesCount === 1 ? 'guardada' : 'guardadas'}
            </span>
          </div>
        )}
      </div>

      {/* Contenido: Cuadrícula o Estado Vacío */}
      {favoriteExperiences.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {favoriteExperiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-gray-200 bg-white py-20 px-4 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-50 text-3xl text-rose-400">
            🤍
          </div>
          <h2 className="mt-5 text-xl font-bold text-gray-900">
            Aún no has guardado ninguna experiencia
          </h2>
          <p className="mt-2 max-w-sm text-xs sm:text-sm text-gray-500 leading-relaxed">
            Explora las 100 experiencias disponibles y haz clic en el corazón de cualquier tarjeta para guardarla en tu lista de deseos.
          </p>
          <Link
            href="/experiences"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700 transition"
          >
            <span>Explorar las 100 experiencias</span>
            <span>→</span>
          </Link>
        </div>
      )}
    </div>
  );
}
