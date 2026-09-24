import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { experiences } from '@/data/experience';
import { ExperienceDetailClient } from './ExperienceDetailClient';
import { ExperienceCard } from '@/components/ExperienceCard';

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return experiences.map((exp) => ({
    id: exp.id,
  }));
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { id } = await params;
  const experience = experiences.find((e) => e.id === id);

  if (!experience) {
    notFound();
  }

  // Experiencias recomendadas de la misma categoría (excluyendo la actual)
  const similar = experiences
    .filter((e) => e.category === experience.category && e.id !== experience.id)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Botón de Retorno y Breadcrumbs */}
      <div className="mb-6 flex items-center gap-2 text-xs font-semibold text-gray-500">
        <Link href="/" className="hover:text-emerald-600 transition">
          Inicio
        </Link>
        <span>/</span>
        <Link href="/experiences" className="hover:text-emerald-600 transition">
          Explorador
        </Link>
        <span>/</span>
        <span className="text-gray-900 truncate max-w-xs">{experience.title}</span>
      </div>

      <div className="mb-8">
        <Link
          href="/experiences"
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-bold text-gray-700 shadow-2xs hover:bg-gray-50 hover:text-emerald-600 transition"
        >
          <span>←</span>
          <span>Volver al catálogo</span>
        </Link>
      </div>

      {/* Componente Detallado Principal */}
      <ExperienceDetailClient experience={experience} />

      {/* Sección de Experiencias Similares */}
      {similar.length > 0 && (
        <div className="mt-20 border-t border-gray-200 pt-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                Más en {experience.category}
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                Experiencias similares recomendadas
              </h2>
            </div>
            <Link
              href={`/experiences?category=${experience.category}`}
              className="text-xs font-bold text-emerald-600 hover:underline"
            >
              Ver todas en {experience.category} →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {similar.map((item) => (
              <ExperienceCard key={item.id} experience={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
