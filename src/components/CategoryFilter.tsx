'use client';

import React from 'react';
import type { ExperienceCategory } from '@/data/experience';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  categoryCounts: Record<string, number>;
}

export function CategoryFilter({
  selectedCategory,
  onSelectCategory,
  categoryCounts
}: CategoryFilterProps) {
  const categories: Array<{ id: string; label: string; icon: string }> = [
    { id: 'All', label: 'Todas', icon: '✨' },
    { id: 'Adventure', label: 'Adventure', icon: '🧗' },
    { id: 'Culture', label: 'Culture', icon: '🏛️' },
    { id: 'Food', label: 'Food', icon: '🍜' },
    { id: 'Wellness', label: 'Wellness', icon: '🧘' },
    { id: 'Nature', label: 'Nature', icon: '🌿' }
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {categories.map((cat) => {
        const isSelected = selectedCategory === cat.id;
        const count = cat.id === 'All' ? categoryCounts.All : categoryCounts[cat.id] || 0;

        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 active:scale-95 ${
              isSelected
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/50'
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.label}</span>
            <span
              className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                isSelected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
