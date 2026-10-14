import React from 'react';
import { presentationConfig } from '../config/presentation';
import { ShieldCheck, Eye, Award } from 'lucide-react';

export const Section02Vision: React.FC = () => {
  const { vision } = presentationConfig.slides;

  const icons = [
    <ShieldCheck size={28} style={{ color: '#E05A2B' }} />,
    <Eye size={28} style={{ color: '#F59E0B' }} />,
    <Award size={28} style={{ color: '#E05A2B' }} />
  ];

  return (
    <section
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(20px, 4vw, 50px) clamp(24px, 5vw, 70px)',
        position: 'relative'
      }}
      className="animate-slide-in"
    >
      {/* Encabezado de sección */}
      <div style={{ maxWidth: '850px', marginBottom: 'clamp(24px, 4vh, 40px)' }}>
        <span className="badge-tag">Sección 02 — Estrategia Visual</span>
        <h2
          style={{
            fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)',
            lineHeight: 1.15,
            marginTop: '12px',
            color: '#FFFFFF'
          }}
        >
          {vision.headline}
        </h2>
        <p style={{ fontSize: '1rem', marginTop: '8px', color: '#94A3B8', maxWidth: '640px' }}>
          {vision.subheadline}
        </p>
      </div>

      {/* Grid de 3 Pilares y Composición Editorial */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'clamp(14px, 2vw, 24px)',
          width: '100%',
          maxWidth: '1200px'
        }}
      >
        {vision.pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="glass-panel"
            style={{
              padding: 'clamp(20px, 2.5vw, 32px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backgroundColor: 'rgba(19, 22, 28, 0.75)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {icons[idx]}
            </div>

            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#E05A2B',
                textTransform: 'uppercase',
                letterSpacing: '0.06em'
              }}
            >
              {pillar.tagline}
            </span>

            <h3 style={{ fontSize: '1.35rem', color: '#F8FAFC', fontWeight: 700 }}>
              {pillar.title}
            </h3>

            <p style={{ fontSize: '0.92rem', color: '#94A3B8', lineHeight: 1.55 }}>
              {pillar.description}
            </p>
          </div>
        ))}
      </div>

      {/* Frase clave para el asesor */}
      <div
        style={{
          marginTop: 'clamp(20px, 3vh, 36px)',
          padding: '14px 20px',
          borderRadius: '10px',
          backgroundColor: 'rgba(224, 90, 43, 0.07)',
          borderLeft: '4px solid #E05A2B',
          maxWidth: '800px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}
      >
        <span style={{ fontSize: '0.85rem', color: '#E2E8F0', fontStyle: 'italic' }}>
          «No vendemos simplemente vinilos o camisetas: creamos la percepción de que Phenix Collision es la opción más calificada y profesional de la región.»
        </span>
      </div>
    </section>
  );
};
