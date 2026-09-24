'use client';

import React from 'react';

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = 'Buscar por título (ej. Rafting, Té, Safari, Glaciar)...',
  label = 'Búsqueda por Título (RegExp)'
}: SearchBarProps) {
  return (
    <div className="relative w-full">
      {label && (
        <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-2xl border border-gray-200 bg-slate-50 px-4 py-2.5 pl-9 text-xs font-medium text-gray-800 placeholder-gray-400 focus:border-emerald-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-200 transition-all"
        />
        <span className="absolute left-3 top-3 text-xs text-gray-400">🔍</span>
        {value && (
          <button
            onClick={() => onChange('')}
            aria-label="Limpiar búsqueda"
            title="Limpiar búsqueda"
            className="absolute right-3 top-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-gray-600 hover:bg-gray-300 transition-colors"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
