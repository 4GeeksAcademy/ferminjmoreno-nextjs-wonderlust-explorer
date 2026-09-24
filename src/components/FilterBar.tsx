'use client';

import React from 'react';
import { SearchBar } from './SearchBar';
import { CategoryFilter } from './CategoryFilter';
import type { SortOption } from '@/hooks/useFilters';

export interface FilterBarProps {
  titleQuery: string;
  onTitleChange: (val: string) => void;
  selectedCategory: string;
  onCategoryChange: (val: string) => void;
  categoryCounts: Record<string, number>;
  selectedDestination: string;
  onDestinationChange: (val: string) => void;
  uniqueDestinations: string[];
  sortBy: SortOption;
  onSortChange: (val: SortOption) => void;
  hasActiveFilters: boolean;
  onResetFilters: () => void;
}

export function FilterBar({
  titleQuery,
  onTitleChange,
  selectedCategory,
  onCategoryChange,
  categoryCounts,
  selectedDestination,
  onDestinationChange,
  uniqueDestinations,
  sortBy,
  onSortChange,
  hasActiveFilters,
  onResetFilters
}: FilterBarProps) {
  return (
    <div className="space-y-4 mb-8 bg-white p-5 rounded-3xl border border-gray-100 shadow-xs">
      {/* 1. Selector de Categorías Horizontal */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={onCategoryChange}
        categoryCounts={categoryCounts}
      />

      {/* 2. Controles de Búsqueda, Destino y Ordenación */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 pt-3 border-t border-gray-100">
        {/* SearchBar por Título (RegExp) */}
        <div className="lg:col-span-6">
          <SearchBar value={titleQuery} onChange={onTitleChange} />
        </div>

        {/* Dropdown de Destino */}
        <div className="lg:col-span-3">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
            Filtro de Destino
          </label>
          <select
            value={selectedDestination}
            onChange={(e) => onDestinationChange(e.target.value)}
            className="w-full rounded-2xl border border-gray-200 bg-slate-50 px-3 py-2.5 text-xs font-semibold text-gray-700 focus:border-emerald-500 focus:bg-white focus:outline-hidden"
          >
            <option value="All">📍 Todos los destinos ({uniqueDestinations.length})</option>
            {uniqueDestinations.map((dest) => (
              <option key={dest} value={dest}>
                {dest}
              </option>
            ))}
          </select>
        </div>

        {/* Selector de Orden */}
        <div className="lg:col-span-3">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
            Ordenar por
          </label>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="w-full rounded-2xl border border-gray-200 bg-slate-50 px-3 py-2.5 text-xs font-semibold text-gray-700 focus:border-emerald-500 focus:bg-white focus:outline-hidden"
          >
            <option value="featured">Destacados</option>
            <option value="rating">Mejor Calificados ★</option>
            <option value="price-asc">Precio: Menor a Mayor</option>
            <option value="price-desc">Precio: Mayor a Menor</option>
          </select>
        </div>
      </div>

      {/* 3. Badges de Filtros Activos con eliminación rápida */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-gray-50 text-xs">
          <span className="font-bold text-gray-400 text-[11px] uppercase">Filtros Activos:</span>

          {titleQuery && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 font-semibold text-emerald-800">
              Título: &ldquo;{titleQuery}&rdquo;
              <button onClick={() => onTitleChange('')} className="font-bold hover:text-emerald-950">
                ✕
              </button>
            </span>
          )}

          {selectedCategory !== 'All' && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-200 px-3 py-1 font-semibold text-indigo-800">
              Categoría: {selectedCategory}
              <button onClick={() => onCategoryChange('All')} className="font-bold hover:text-indigo-950">
                ✕
              </button>
            </span>
          )}

          {selectedDestination !== 'All' && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 font-semibold text-amber-800">
              Destino: {selectedDestination}
              <button onClick={() => onDestinationChange('All')} className="font-bold hover:text-amber-950">
                ✕
              </button>
            </span>
          )}

          {sortBy !== 'featured' && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 border border-gray-200 px-3 py-1 font-semibold text-gray-800">
              Orden: {sortBy}
              <button onClick={() => onSortChange('featured')} className="font-bold hover:text-gray-950">
                ✕
              </button>
            </span>
          )}

          <button
            onClick={onResetFilters}
            className="ml-auto text-xs font-bold text-rose-600 hover:text-rose-700 hover:underline"
          >
            Limpiar todos los filtros
          </button>
        </div>
      )}
    </div>
  );
}

export default FilterBar;
