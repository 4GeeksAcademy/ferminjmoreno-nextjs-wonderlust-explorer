import React from 'react';
import Link from 'next/link';
import { experiences } from '@/data/experience';
import { ExperienceCard } from '@/components/ExperienceCard';

export default function HomePage() {
  // Tomamos 3 experiencias destacadas con calificación 5.0
  const featured = experiences.filter((e) => e.rating === 5.0).slice(0, 3);

  const categories = [
    { name: 'Adventure', icon: '🧗', count: 20, desc: 'Adrenalina y retos al aire libre' },
    { name: 'Culture', icon: '🏛️', count: 20, desc: 'Historia, arte y tradiciones' },
    { name: 'Food', icon: '🍜', count: 20, desc: 'Sabores locales y gastronomía' },
    { name: 'Wellness', icon: '🧘', count: 20, desc: 'Relajación, aguas termales y yoga' },
    { name: 'Nature', icon: '🌿', count: 20, desc: 'Fauna salvaje y paisajes vírgenes' }
  ];

  return (
    <div className="flex flex-col">
      {/* SECCIÓN HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-gray-900 to-slate-900 py-24 sm:py-32 text-white">
        {/* Luces y efectos de fondo */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500 blur-[140px]" />
          <div className="absolute -bottom-40 right-10 h-[400px] w-[400px] rounded-full bg-teal-400 blur-[130px]" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Badge Superior */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-md mb-6">
            <span>✨</span>
            <span>Catálogo Exclusivo de 100 Experiencias</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline text-white/70">Diseño Dribbble Travel Cards</span>
          </div>

          {/* Titular Principal */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Descubre el mundo con{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-200 bg-clip-text text-transparent">
              Wonderlust Explorer
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-300">
            Desde expediciones sobre glaciares patagónicos y ceremonias milenarias de té en Kioto, hasta safaris salvajes en el Serengeti. Vive aventuras que transforman vidas.
          </p>

          {/* Botones de Acción / CTA */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/experiences"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 px-8 py-4 text-base font-bold text-gray-950 shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/40 active:scale-95"
            >
              <span>Explorar las 100 Experiencias</span>
              <span className="text-xl">→</span>
            </Link>
            <Link
              href="/favorites"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 active:scale-95"
            >
              <span>Ver Mis Favoritos</span>
              <span>❤️</span>
            </Link>
          </div>

          {/* Métricas destacadas */}
          <div className="mt-16 grid grid-cols-3 gap-6 sm:gap-12 border-t border-white/10 pt-10 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white">100</div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium mt-1">Experiencias Únicas</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-400">5</div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium mt-1">Categorías Especializadas</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-amber-300">4.9★</div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium mt-1">Satisfacción Promedio</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE CATEGORÍAS */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Explora por Categoría
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Encuentra la experiencia ideal acorde a tu estilo de viaje
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={`/experiences?category=${cat.name}`}
                className="group relative flex flex-col items-center rounded-3xl border border-gray-100 bg-slate-50 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50/50 hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm transition-transform duration-300 group-hover:scale-110">
                  {cat.icon}
                </div>
                <h3 className="mt-4 font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                  {cat.name}
                </h3>
                <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                  {cat.desc}
                </p>
                <span className="mt-4 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-gray-600 shadow-2xs">
                  {cat.count} experiencias
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN DE EXPERIENCIAS DESTACADAS */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                Selección Premium
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                Experiencias con Calificación Perfecta (5.0★)
              </h2>
            </div>
            <Link
              href="/experiences"
              className="text-sm font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 group"
            >
              <span>Ver catálogo completo (100)</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featured.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
