'use client';

import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { experiences } from '@/data/experience';
import { ExperienceCard } from '@/components/ExperienceCard';
import { FilterBar } from '@/components/FilterBar';
import { useFilters } from '@/hooks/useFilters';
import { useFavorites } from '@/context/FavoritesContext';

function ExperiencesContent() {
  const context = useFavorites();

  // 1. Estado compartido de IDs de Favoritos gestionado a nivel superior mediante useState
  const [favoriteIds, setFavoriteIds] = useState<string[]>(context.favorites);

  // Sincronizar el useState local cuando el contexto o localStorage cambie
  useEffect(() => {
    setFavoriteIds(context.favorites);
  }, [context.favorites]);

  // Manejador del toggle de favoritos para pasar hacia abajo como prop
  const handleToggleFavorite = useCallback(
    (id: string) => {
      setFavoriteIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
      context.toggleFavorite(id);
    },
    [context]
  );

  // 2. Custom Hook useFilters: Encapsula la lógica de filtrado, RegExp y query parameters
  const {
    titleQuery,
    selectedCategory,
    selectedDestination,
    sortBy,
    filteredExperiences,
    categoryCounts,
    uniqueDestinations,
    hasActiveFilters,
    handleTitleChange,
    handleCategoryChange,
    handleDestinationChange,
    handleSortChange,
    handleResetFilters
  } = useFilters(experiences);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Cabecera del Explorador */}
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
          Explorador de Experiencias
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1">
          Descubre el Catálogo Completo (100)
        </h1>
        <p className="mt-2 text-sm text-gray-500 max-w-2xl">
          Filtra por título mediante expresiones regulares, selecciona tu destino o explora por categoría. Haz clic en el corazón para guardar tus favoritos en memoria compartida.
        </p>
      </div>

      {/* Componente Modular FilterBar (con SearchBar, CategoryFilter, Dropdown y Ordenador) */}
      <FilterBar
        titleQuery={titleQuery}
        onTitleChange={handleTitleChange}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        categoryCounts={categoryCounts}
        selectedDestination={selectedDestination}
        onDestinationChange={handleDestinationChange}
        uniqueDestinations={uniqueDestinations}
        sortBy={sortBy}
        onSortChange={handleSortChange}
        hasActiveFilters={hasActiveFilters}
        onResetFilters={handleResetFilters}
      />

      {/* Contador de Resultados y Estado de Favoritos */}
      <div className="flex items-center justify-between text-xs text-gray-500 mb-6 px-1">
        <span>
          Mostrando <strong className="text-gray-900 font-bold">{filteredExperiences.length}</strong> de 100 experiencias
        </span>
        <span className="flex items-center gap-1.5 text-xs font-semibold text-rose-600">
          <span>❤️</span>
          <span>{favoriteIds.length} favoritos guardados</span>
        </span>
      </div>

      {/* Cuadrícula de Tarjetas: Estado de favorito y toggle pasados estrictamente hacia abajo vía props */}
      {filteredExperiences.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredExperiences.map((experience) => {
            const isFav = favoriteIds.includes(experience.id);
            return (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                isFavorite={isFav}
                onToggleFavorite={handleToggleFavorite}
              />
            );
          })}
        </div>
      ) : (
        /* Estado vacío */
        <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-gray-200 bg-white py-20 px-4 text-center">
          <span className="text-5xl">🧭</span>
          <h3 className="mt-4 text-xl font-bold text-gray-900">
            No se encontraron resultados
          </h3>
          <p className="mt-2 text-sm text-gray-500 max-w-md">
            Ninguna experiencia coincide con los criterios de búsqueda y filtros seleccionados.
          </p>
          <button
            onClick={handleResetFilters}
            className="mt-6 rounded-full bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700 transition"
          >
            Restablecer todos los filtros
          </button>
        </div>
      )}
    </div>
  );
}

export default function ExperiencesPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm text-gray-500">Cargando explorador de experiencias...</div>}>
      <ExperiencesContent />
    </Suspense>
  );
}
