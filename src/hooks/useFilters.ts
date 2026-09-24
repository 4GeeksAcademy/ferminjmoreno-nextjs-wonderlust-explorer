'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import type { Experience } from '@/data/experience';

export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating';

export interface FilterState {
  titleQuery: string;
  selectedCategory: string;
  selectedDestination: string;
  sortBy: SortOption;
}

export function useFilters(allExperiences: Experience[]) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 1. Inicialización desde URL SearchParams
  const initialTitle = searchParams.get('title') || '';
  const initialCategory = searchParams.get('category') || 'All';
  const initialDestination = searchParams.get('destination') || 'All';
  const initialSort = (searchParams.get('sort') as SortOption) || 'featured';

  const [titleQuery, setTitleQuery] = useState<string>(initialTitle);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedDestination, setSelectedDestination] = useState<string>(initialDestination);
  const [sortBy, setSortBy] = useState<SortOption>(initialSort);

  // 2. useEffect: Sincronizar estados locales cuando los query params cambian en la URL
  useEffect(() => {
    setTitleQuery(searchParams.get('title') || '');
    setSelectedCategory(searchParams.get('category') || 'All');
    setSelectedDestination(searchParams.get('destination') || 'All');
    setSortBy((searchParams.get('sort') as SortOption) || 'featured');
  }, [searchParams]);

  // 3. Sincronización hacia la URL con router.replace
  const updateUrlParams = useCallback(
    (updates: Partial<FilterState>) => {
      const params = new URLSearchParams(searchParams.toString());

      const setOrDelete = (key: string, value: string | undefined, defaultVal: string) => {
        if (value === undefined) return;
        const trimmed = value.trim();
        if (trimmed && trimmed !== defaultVal) {
          params.set(key, trimmed);
        } else {
          params.delete(key);
        }
      };

      if ('titleQuery' in updates) setOrDelete('title', updates.titleQuery, '');
      if ('selectedCategory' in updates) setOrDelete('category', updates.selectedCategory, 'All');
      if ('selectedDestination' in updates) setOrDelete('destination', updates.selectedDestination, 'All');
      if ('sortBy' in updates) setOrDelete('sort', updates.sortBy, 'featured');

      const queryString = params.toString();
      const targetUrl = queryString ? `${pathname}?${queryString}` : pathname;
      router.replace(targetUrl, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  // Manejadores de cambios
  const handleTitleChange = useCallback(
    (val: string) => {
      setTitleQuery(val);
      updateUrlParams({ titleQuery: val });
    },
    [updateUrlParams]
  );

  const handleCategoryChange = useCallback(
    (val: string) => {
      setSelectedCategory(val);
      updateUrlParams({ selectedCategory: val });
    },
    [updateUrlParams]
  );

  const handleDestinationChange = useCallback(
    (val: string) => {
      setSelectedDestination(val);
      updateUrlParams({ selectedDestination: val });
    },
    [updateUrlParams]
  );

  const handleSortChange = useCallback(
    (val: SortOption) => {
      setSortBy(val);
      updateUrlParams({ sortBy: val });
    },
    [updateUrlParams]
  );

  const handleResetFilters = useCallback(() => {
    setTitleQuery('');
    setSelectedCategory('All');
    setSelectedDestination('All');
    setSortBy('featured');
    router.replace(pathname, { scroll: false });
  }, [pathname, router]);

  // Lista única de destinos ordenados alfabéticamente
  const uniqueDestinations = useMemo(() => {
    const set = new Set<string>();
    allExperiences.forEach((e) => {
      if (e.destination) set.add(e.destination);
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b, 'es'));
  }, [allExperiences]);

  // Conteo de experiencias por categoría
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: allExperiences.length };
    for (const exp of allExperiences) {
      counts[exp.category] = (counts[exp.category] || 0) + 1;
    }
    return counts;
  }, [allExperiences]);

  // 4. Lógica de filtrado con RegExp case-insensitive y ordenación
  const filteredExperiences = useMemo(() => {
    let result = [...allExperiences];

    // Filtro por categoría
    if (selectedCategory !== 'All') {
      result = result.filter((exp) => exp.category === selectedCategory);
    }

    // Filtro por destino
    if (selectedDestination !== 'All') {
      result = result.filter((exp) => exp.destination === selectedDestination);
    }

    // Filtro por título con RegExp case-insensitive
    if (titleQuery.trim()) {
      try {
        const sanitizedTerm = titleQuery.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(sanitizedTerm, 'i');
        result = result.filter((exp) => regex.test(exp.title));
      } catch {
        const lower = titleQuery.trim().toLowerCase();
        result = result.filter((exp) => exp.title.toLowerCase().includes(lower));
      }
    }

    // Ordenamiento
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [allExperiences, selectedCategory, selectedDestination, titleQuery, sortBy]);

  const hasActiveFilters = Boolean(
    titleQuery.trim() || selectedCategory !== 'All' || selectedDestination !== 'All' || sortBy !== 'featured'
  );

  return {
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
  };
}
