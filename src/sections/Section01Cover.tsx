import React from 'react';
import { presentationConfig } from '../config/presentation';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SafeImage } from '../components/SafeImage';

interface Section01CoverProps {
  onStart: () => void;
}

export const Section01Cover: React.FC<Section01CoverProps> = ({ onStart }) => {
  const { client, slides } = presentationConfig;
  const { cover } = slides;

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0 clamp(24px, 6vw, 80px)',
        overflow: 'hidden'
      }}
      className="animate-slide-in"
    >
      {/* Fondo de imagen automotriz de impacto con viñeta cinematográfica */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0
        }}
      >
        <SafeImage
          src={cover.bgImage}
          alt="Wrap Automotriz de Alto Impacto"
          style={{ objectFit: 'cover', filter: 'brightness(0.38) contrast(1.15)' }}
        />
        {/* Degradado gradiente para asegurar contraste editorial */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(11,12,14,0.95) 0%, rgba(11,12,14,0.7) 45%, rgba(11,12,14,0.3) 100%)'
          }}
        />
      </div>

      {/* Contenido Editorial Principal */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '680px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="badge-tag">
            <Sparkles size={13} />
            Propuesta Comercial Exclusiva
          </span>
          <span style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: 500 }}>
            Para: <strong style={{ color: '#F8FAFC' }}>{client.name}</strong>
          </span>
        </div>

        <h1
          style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
            lineHeight: 1.08,
            fontWeight: 800,
            color: '#FFFFFF',
            textShadow: '0 4px 20px rgba(0,0,0,0.6)'
          }}
        >
          {cover.headline}
        </h1>

        <p
          style={{
            fontSize: 'clamp(1rem, 1.6vw, 1.3rem)',
            color: '#CBD5E1',
            maxWidth: '560px',
            lineHeight: 1.5
          }}
        >
          {cover.subheadline}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '12px' }}>
          <button
            onClick={onStart}
            className="btn-primary"
            style={{ fontSize: '1.05rem', padding: '16px 36px' }}
          >
            <span>{cover.ctaText}</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Ficha técnica discreta en esquina inferior derecha */}
      <div
        style={{
          position: 'absolute',
          bottom: '36px',
          right: 'clamp(24px, 5vw, 60px)',
          zIndex: 10,
          textAlign: 'right',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px'
        }}
      >
        <span style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Especialidad
        </span>
        <span style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: 600 }}>
          Automotive Wrap & Brand Ecosystem
        </span>
      </div>
    </section>
  );
};
