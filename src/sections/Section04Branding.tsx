import React, { useState } from 'react';
import { presentationConfig } from '../config/presentation';
import { Palette } from 'lucide-react';

export const Section04Branding: React.FC = () => {
  const { branding } = presentationConfig.slides;
  const [activeVersion, setActiveVersion] = useState<number>(0);

  return (
    <section
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: 'clamp(16px, 3.5vw, 40px) clamp(24px, 4vw, 60px)',
        position: 'relative',
        overflow: 'hidden'
      }}
      className="animate-slide-in"
    >
      {/* Header de Sección */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span className="badge-tag">Sección 04 — Identidad de Marca</span>
          <span
            style={{
              fontSize: '0.75rem',
              color: '#F59E0B',
              backgroundColor: 'rgba(245, 158, 11, 0.1)',
              border: '1px solid rgba(245, 158, 11, 0.25)',
              padding: '3px 10px',
              borderRadius: '9999px',
              fontWeight: 600
            }}
          >
            {branding.statusNote}
          </span>
        </div>

        <h2
          style={{
            fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)',
            lineHeight: 1.15,
            marginTop: '8px',
            color: '#FFFFFF'
          }}
        >
          {branding.headline}
        </h2>
        <p style={{ fontSize: '0.9rem', color: '#94A3B8', marginTop: '4px', maxWidth: '720px' }}>
          {branding.subheadline}
        </p>
      </div>

      {/* Grid de Demostración Visual */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '24px',
          flex: 1,
          minHeight: 0
        }}
      >
        {/* Lienzo Interactivo del Logotipo */}
        <div
          className="glass-panel"
          style={{
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '32px',
            position: 'relative',
            background:
              activeVersion === 0
                ? 'radial-gradient(circle at center, #1B1E26 0%, #0B0D12 100%)'
                : activeVersion === 1
                ? 'linear-gradient(145deg, #F8FAFC 0%, #E2E8F0 100%)'
                : 'linear-gradient(135deg, #2D3748 0%, #1A202C 100%)',
            transition: 'background 0.4s ease',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Logo Render Visual */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              textAlign: 'center'
            }}
          >
            {/* Isotipo Fénix Automotriz Estilizado en SVG */}
            <div
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                filter: activeVersion === 1 ? 'none' : 'drop-shadow(0 0 25px rgba(224, 90, 43, 0.5))'
              }}
            >
              <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Alas geométricas estilizadas y escudo de carrocería */}
                <path
                  d="M50 10 L85 30 L50 90 L15 30 Z"
                  stroke={activeVersion === 1 ? '#0F172A' : '#E05A2B'}
                  strokeWidth="3.5"
                  fill={activeVersion === 1 ? 'rgba(15,23,42,0.03)' : 'rgba(224,90,43,0.1)'}
                />
                <path
                  d="M50 22 L72 36 L50 78 L28 36 Z"
                  stroke={activeVersion === 1 ? '#E05A2B' : '#FFFFFF'}
                  strokeWidth="2.5"
                />
                {/* Núcleo Fénix Flame */}
                <path
                  d="M50 34 C54 44 62 48 50 64 C38 48 46 44 50 34 Z"
                  fill={activeVersion === 1 ? '#0F172A' : '#E05A2B'}
                />
              </svg>
            </div>

            {/* Tipografía de Marca */}
            <div>
              <h3
                style={{
                  fontSize: '2rem',
                  letterSpacing: '0.12em',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  color: activeVersion === 1 ? '#0F172A' : '#FFFFFF',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                PHENIX
              </h3>
              <p
                style={{
                  fontSize: '0.85rem',
                  letterSpacing: '0.28em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  color: activeVersion === 1 ? '#475569' : '#E05A2B',
                  marginTop: '2px'
                }}
              >
                COLLISION CENTER
              </p>
            </div>
          </div>

          {/* Badge inferior en el lienzo */}
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              padding: '6px 14px',
              borderRadius: '9999px',
              backgroundColor: activeVersion === 1 ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.06)',
              fontSize: '0.72rem',
              fontWeight: 600,
              color: activeVersion === 1 ? '#334155' : '#CBD5E1'
            }}
          >
            {branding.concepts[activeVersion].title}
          </div>
        </div>

        {/* Panel lateral con las 3 opciones de visualización */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', justifyContent: 'center' }}>
          {branding.concepts.map((concept, idx) => (
            <button
              key={idx}
              onClick={() => setActiveVersion(idx)}
              style={{
                textAlign: 'left',
                padding: '16px',
                borderRadius: '12px',
                backgroundColor: activeVersion === idx ? 'rgba(224, 90, 43, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                border: activeVersion === idx ? '1px solid #E05A2B' : '1px solid rgba(255, 255, 255, 0.07)',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Palette size={16} style={{ color: activeVersion === idx ? '#E05A2B' : '#94A3B8' }} />
                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: activeVersion === idx ? '#FFFFFF' : '#E2E8F0' }}>
                  {concept.title}
                </span>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '6px', lineHeight: 1.45 }}>
                {concept.description}
              </p>
            </button>
          ))}

          <div
            style={{
              padding: '14px',
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              fontSize: '0.75rem',
              color: '#94A3B8',
              lineHeight: 1.5
            }}
          >
            <strong style={{ color: '#E2E8F0' }}>Evolución técnica:</strong> La identidad se diseña pensando en su reproducción óptima en cortes de vinilo plotter, bordados de pequeño formato e impresión digital sin perder legibilidad.
          </div>
        </div>
      </div>
    </section>
  );
};
