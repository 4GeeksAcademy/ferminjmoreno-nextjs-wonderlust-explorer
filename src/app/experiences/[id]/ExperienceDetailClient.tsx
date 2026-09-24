'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Experience } from '@/data/experience';
import { useFavorites } from '@/context/FavoritesContext';

interface Props {
  experience: Experience;
}

export function ExperienceDetailClient({ experience }: Props) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(experience.id);
  const [booked, setBooked] = useState(false);
  const [guests, setGuests] = useState(1);

  // useEffect para actualizar dinámicamente el título del documento al entrar en el detalle
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = `${experience.title} — Wonderlust Explorer`;
    }
  }, [experience.title]);

  const categoryColors: Record<string, string> = {
    Adventure: 'bg-amber-500 text-white',
    Culture: 'bg-indigo-500 text-white',
    Food: 'bg-rose-500 text-white',
    Wellness: 'bg-teal-500 text-white',
    Nature: 'bg-emerald-500 text-white'
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
    setTimeout(() => setBooked(false), 4000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Columna Izquierda / Principal: Contenido Extenso */}
      <div className="lg:col-span-2 space-y-8">
        {/* Imagen Panorámica Principal */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-gray-100 shadow-md">
          <img
            src={experience.imageUrl}
            alt={experience.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Badge de Categoría */}
          <span
            className={`absolute top-5 left-5 rounded-full px-4 py-1.5 text-xs font-bold shadow-md ${
              categoryColors[experience.category] || 'bg-black/60 text-white'
            }`}
          >
            {experience.category}
          </span>

          {/* Botón de Favorito Flotante */}
          <button
            onClick={() => toggleFavorite(experience.id)}
            className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 backdrop-blur-md shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95"
            aria-label="Alternar favorito"
          >
            <span className={`text-xl ${favorite ? 'text-rose-500 animate-pulse' : 'text-gray-400'}`}>
              {favorite ? '❤️' : '🤍'}
            </span>
          </button>

          {/* Destino y Rating superpuesto */}
          <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-white">
            <span className="flex items-center gap-1.5 text-base font-semibold drop-shadow-md">
              📍 {experience.destination}
            </span>
            <span className="flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-sm font-bold text-amber-300 backdrop-blur-md">
              ★ {experience.rating.toFixed(1)} / 5.0
            </span>
          </div>
        </div>

        {/* Título y Resumen */}
        <div>
          <div className="flex items-center gap-3 text-xs text-emerald-600 font-bold uppercase tracking-wider mb-2">
            <span>Experiencia Verificada</span>
            <span>·</span>
            <span>ID #{experience.id}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            {experience.title}
          </h1>
        </div>

        {/* Descripción Detallada */}
        <div className="rounded-3xl bg-white p-6 sm:p-8 border border-gray-100 shadow-xs space-y-4">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3">
            Acerca de esta experiencia
          </h2>
          <p className="text-base text-gray-700 leading-relaxed">
            {experience.description}
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Diseñada meticulosamente para amantes del viaje inmersivo, esta experiencia en {experience.destination} combina autenticidad, respeto por la comunidad local y los más altos estándares de seguridad y confort.
          </p>
        </div>

        {/* Qué Incluye */}
        <div className="rounded-3xl bg-white p-6 sm:p-8 border border-gray-100 shadow-xs space-y-4">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3">
            Lo que incluye la experiencia
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
            <div className="flex items-center gap-2.5">
              <span className="text-emerald-500 font-bold">✓</span> Guía experto certificado
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-emerald-500 font-bold">✓</span> Todos los equipos y materiales necesarios
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-emerald-500 font-bold">✓</span> Seguro de viaje y asistencia médica local
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-emerald-500 font-bold">✓</span> Degustación de refrigerios y bebidas típicas
            </div>
          </div>
        </div>
      </div>

      {/* Columna Derecha: Tarjeta Flotante de Reserva (Estilo Dribbble) */}
      <div className="lg:col-span-1">
        <div className="sticky top-24 rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-baseline justify-between border-b border-gray-100 pb-4">
            <div>
              <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">Precio</span>
              <div className="text-3xl font-black text-gray-900">
                ${experience.price}{' '}
                <span className="text-xs font-normal text-gray-500">USD / persona</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm font-bold text-amber-500">
              ★ {experience.rating.toFixed(1)}
            </div>
          </div>

          {/* Formulario Simulado de Reserva */}
          <form onSubmit={handleBooking} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Fecha deseada
              </label>
              <input
                type="date"
                defaultValue="2026-10-15"
                required
                className="w-full rounded-2xl border border-gray-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-gray-800 focus:border-emerald-500 focus:bg-white focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Viajeros
              </label>
              <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-slate-50 px-4 py-2">
                <span className="text-sm font-semibold text-gray-700">
                  {guests} {guests === 1 ? 'viajero' : 'viajeros'}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setGuests((g) => Math.max(1, g - 1))}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-bold text-gray-600 shadow-xs hover:bg-gray-100"
                  >
                    -
                  </button>
                  <button
                    type="button"
                    onClick={() => setGuests((g) => Math.min(10, g + 1))}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-bold text-gray-600 shadow-xs hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Cálculo de Total */}
            <div className="pt-2 text-xs space-y-1.5 text-gray-500 border-t border-gray-100">
              <div className="flex justify-between">
                <span>${experience.price} x {guests} viajeros</span>
                <span>${experience.price * guests} USD</span>
              </div>
              <div className="flex justify-between">
                <span>Tarifa de servicio</span>
                <span className="text-emerald-600 font-semibold">Gratis ($0)</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-100 text-sm font-bold text-gray-900">
                <span>Total Estimado</span>
                <span className="text-emerald-600 font-extrabold text-base">
                  ${experience.price * guests} USD
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:opacity-95 hover:shadow-emerald-500/40 active:scale-98"
            >
              Reservar Experiencia
            </button>

            {booked && (
              <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-3 text-center text-xs font-bold text-emerald-800 animate-fade-in">
                🎉 ¡Solicitud de reserva simulada con éxito para {guests} persona(s)!
              </div>
            )}
          </form>

          {/* Botón de Añadir a Favoritos secundario */}
          <button
            type="button"
            onClick={() => toggleFavorite(experience.id)}
            className={`w-full rounded-full border py-3 text-xs font-bold transition-all ${
              favorite
                ? 'border-rose-300 bg-rose-50 text-rose-700'
                : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            {favorite ? '❤️ Guardada en Favoritos' : '🤍 Añadir a Favoritos'}
          </button>
        </div>
      </div>
    </div>
  );
}
