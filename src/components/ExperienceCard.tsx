'use client';

import React from 'react';
import Link from 'next/link';
import type { Experience } from '@/data/experience';
import { useFavorites } from '@/context/FavoritesContext';

export interface ExperienceCardProps {
  experience: Experience;
  /** Estado booleano de favorito recibido directamente por props */
  isFavorite?: boolean;
  /** Callback para alternar favorito recibido directamente por props */
  onToggleFavorite?: (id: string) => void;
}

export function ExperienceCard({
  experience,
  isFavorite: isFavProp,
  onToggleFavorite: onToggleProp
}: ExperienceCardProps) {
  // Soporte dual: Si se pasan props directas se usan prioritariamente; de lo contrario se usa el contexto
  const context = useFavorites();
  const favorite = isFavProp !== undefined ? isFavProp : context.isFavorite(experience.id);

  const categoryColors: Record<string, string> = {
    Adventure: 'bg-amber-500/80 text-white',
    Culture: 'bg-indigo-500/80 text-white',
    Food: 'bg-rose-500/80 text-white',
    Wellness: 'bg-teal-500/80 text-white',
    Nature: 'bg-emerald-500/80 text-white'
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onToggleProp) {
      onToggleProp(experience.id);
    } else {
      context.toggleFavorite(experience.id);
    }
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-gray-200">
      {/* Contenedor de Imagen Panorámica con Microinteracciones */}
      <Link href={`/experiences/${experience.id}`} className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <img
          src={experience.imageUrl}
          alt={experience.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradiente sutil superior */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 opacity-80" />

        {/* Badge de Categoría con Glassmorphism */}
        <span
          className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md shadow-sm ${
            categoryColors[experience.category] || 'bg-black/60 text-white'
          }`}
        >
          {experience.category}
        </span>

        {/* Botón de Corazón (Toggle Favorito) con reflejo visual de estado */}
        <button
          onClick={handleFavoriteClick}
          aria-label={favorite ? 'Remover de favoritos' : 'Agregar a favoritos'}
          title={favorite ? 'Remover de favoritos' : 'Agregar a favoritos'}
          className={`absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md shadow-md transition-all duration-200 hover:scale-110 active:scale-95 ${
            favorite
              ? 'bg-rose-50 border border-rose-200 text-rose-500 shadow-rose-200/50'
              : 'bg-white/80 border border-white/40 text-gray-400 hover:bg-white hover:text-rose-500'
          }`}
        >
          <span
            className={`text-lg transition-transform duration-200 ${
              favorite ? 'scale-110' : 'scale-100'
            }`}
          >
            {favorite ? '❤️' : '🤍'}
          </span>
        </button>

        {/* Ubicación sobre la imagen inferior */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs drop-shadow-md">
          <span className="flex items-center gap-1 font-medium truncate">
            📍 {experience.destination}
          </span>
          <span className="flex items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 text-xs font-bold text-amber-300 backdrop-blur-sm">
            ★ {experience.rating.toFixed(1)}
          </span>
        </div>
      </Link>

      {/* Contenido Descriptivo de la Tarjeta */}
      <div className="flex flex-1 flex-col p-5">
        <Link href={`/experiences/${experience.id}`}>
          <h3 className="text-base font-bold text-gray-900 line-clamp-1 group-hover:text-emerald-600 transition-colors">
            {experience.title}
          </h3>
        </Link>
        <p className="mt-1.5 text-xs leading-relaxed text-gray-500 line-clamp-2">
          {experience.description}
        </p>

        {/* Sección de Precio y Botón CTA */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Desde</span>
            <span className="text-base font-extrabold text-emerald-600">
              ${experience.price}{' '}
              <span className="text-xs font-normal text-gray-500">USD</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleFavoriteClick}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all sm:hidden ${
                favorite ? 'bg-rose-100 text-rose-600' : 'bg-gray-100 text-gray-400'
              }`}
            >
              {favorite ? '❤️' : '🤍'}
            </button>
            <Link
              href={`/experiences/${experience.id}`}
              className="rounded-full bg-gray-900 px-4 py-2 text-xs font-bold text-white shadow-sm transition-all duration-200 hover:bg-emerald-600 hover:shadow-md active:scale-95"
            >
              Ver Detalle →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
