'use client';

import React from 'react';
import Link from 'next/link';
import { useFavorites } from '@/context/FavoritesContext';
import { ExperienceCard } from '@/components/ExperienceCard';

export default function ProfilePage() {
  const { favoritesCount, getFavoriteExperiences } = useFavorites();
  const favoriteExperiences = getFavoriteExperiences();

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Cabecera y Tarjeta de Perfil de Usuario */}
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
        {/* Banner Superior Decorativo */}
        <div className="h-36 w-full bg-gradient-to-r from-emerald-600 via-teal-500 to-indigo-600" />

        {/* Información del Usuario */}
        <div className="relative px-6 sm:px-8 pb-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between -mt-16 sm:-mt-14 gap-4 mb-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              {/* Avatar Simulado */}
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-gradient-to-tr from-gray-900 to-gray-700 text-3xl font-black text-white shadow-lg">
                FM
              </div>
              <div className="pt-2 sm:pt-0">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h1 className="text-2xl sm:text-3xl font-black text-gray-900">
                    Fermín Moreno
                  </h1>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800">
                    VIP Explorer
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                  fermin.moreno@wonderlust.ai · 📍 Zaragoza, España
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/favorites"
                className="inline-flex items-center gap-2 rounded-full bg-rose-50 border border-rose-200 px-4 py-2 text-xs font-bold text-rose-700 hover:bg-rose-100 transition"
              >
                <span>❤️</span>
                <span>{favoritesCount} Favoritos</span>
              </Link>
            </div>
          </div>

          {/* Biografía */}
          <div className="rounded-2xl bg-slate-50 p-4 border border-gray-100 text-xs sm:text-sm text-gray-600 leading-relaxed">
            <strong className="text-gray-900">Bio: </strong>
            Estudiante e Ingeniero en el programa de Inteligencia Artificial de 4Geeks Academy. Entusiasta del desarrollo web moderno con Next.js, explorador de destinos icónicos y apasionado por descubrir culturas y sabores alrededor del planeta.
          </div>

          {/* Estadísticas de Viajero */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 text-center">
            <div className="rounded-2xl border border-gray-100 p-4 bg-white shadow-2xs">
              <div className="text-2xl font-black text-emerald-600">{favoritesCount}</div>
              <div className="text-xs text-gray-400 font-medium mt-0.5">Favoritos Guardados</div>
            </div>
            <div className="rounded-2xl border border-gray-100 p-4 bg-white shadow-2xs">
              <div className="text-2xl font-black text-indigo-600">12</div>
              <div className="text-xs text-gray-400 font-medium mt-0.5">Países Visitados</div>
            </div>
            <div className="rounded-2xl border border-gray-100 p-4 bg-white shadow-2xs">
              <div className="text-2xl font-black text-amber-500">Gold</div>
              <div className="text-xs text-gray-400 font-medium mt-0.5">Nivel de Membresía</div>
            </div>
            <div className="rounded-2xl border border-gray-100 p-4 bg-white shadow-2xs">
              <div className="text-2xl font-black text-teal-600">100%</div>
              <div className="text-xs text-gray-400 font-medium mt-0.5">Perfil Verificado</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Destacada: Acceso Directo a los Favoritos del Usuario */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Tus Experiencias Favoritas ({favoritesCount})
            </h2>
            <p className="text-xs text-gray-500">
              Colección guardada para tu próximo itinerario de viaje
            </p>
          </div>
          {favoritesCount > 0 && (
            <Link
              href="/favorites"
              className="text-xs font-bold text-emerald-600 hover:text-emerald-700 hover:underline"
            >
              Ver página completa de favoritos →
            </Link>
          )}
        </div>

        {favoriteExperiences.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteExperiences.slice(0, 3).map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-gray-200 bg-white p-8 text-center">
            <span className="text-4xl">🤍</span>
            <h3 className="mt-3 text-base font-bold text-gray-800">
              No tienes experiencias en favoritos aún
            </h3>
            <p className="mt-1 text-xs text-gray-500">
              Navega por las 100 opciones y haz clic en el corazón para guardarlas aquí.
            </p>
            <Link
              href="/experiences"
              className="mt-4 inline-block rounded-full bg-emerald-600 px-5 py-2 text-xs font-bold text-white hover:bg-emerald-700 transition"
            >
              Ir al Explorador de Experiencias
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
