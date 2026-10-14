import React from 'react';
import { presentationConfig } from '../config/presentation';
import { SafeImage } from '../components/SafeImage';


export const Section08Ecosystem: React.FC = () => {
  const { ecosystem } = presentationConfig.slides;

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
      {/* Header */}
      <div style={{ marginBottom: '16px' }}>
        <span className="badge-tag">Sección 08 — Coherencia Global</span>
        <h2
          style={{
            fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)',
            lineHeight: 1.15,
            marginTop: '6px',
            color: '#FFFFFF'
          }}
        >
          {ecosystem.headline}
        </h2>
        <p style={{ fontSize: '0.9rem', color: '#94A3B8', marginTop: '4px' }}>
          {ecosystem.subheadline}
        </p>
      </div>

      {/* Composición Editorial Mosaico Asimétrico */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: '16px',
          flex: 1,
          minHeight: 0
        }}
      >
        {/* Bloque 1: Vehículo Principal (Ocupa 2 filas) */}
        <div
          className="glass-panel"
          style={{
            gridRow: 'span 2',
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: '#0E1117'
          }}
        >
          <SafeImage
            src="/assets/vehicle/hero-truck.jpg"
            alt="Vehículo Rotulado Principal"
            style={{ objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '20px',
              background: 'linear-gradient(0deg, rgba(11,12,14,0.95) 0%, transparent 100%)'
            }}
          >
            <span style={{ fontSize: '0.72rem', color: '#E05A2B', fontWeight: 700, textTransform: 'uppercase' }}>
              Impacto Urbano
            </span>
            <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', fontWeight: 700 }}>
              Flota y Vehículos de Asistencia
            </h3>
          </div>
        </div>

        {/* Bloque 2: Logotipo y Manual */}
        <div
          className="glass-panel"
          style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            background: 'radial-gradient(circle at center, #1C202B, #0E1015)'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '1.4rem', fontWeight: 900, letterSpacing: '0.12em', color: '#FFFFFF' }}>
              PHENIX
            </span>
            <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#E05A2B', letterSpacing: '0.25em' }}>
              COLLISION
            </span>
          </div>
          <span style={{ position: 'absolute', bottom: '12px', fontSize: '0.75rem', color: '#94A3B8' }}>
            Identidad Oficial
          </span>
        </div>

        {/* Bloque 3: Merch Gorras */}
        <div
          className="glass-panel"
          style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            background: 'radial-gradient(circle at center, #1A1F2C, #0B0D12)'
          }}
        >
          <span style={{ fontSize: '1.8rem' }}>🧢</span>
          <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F1F5F9', marginTop: '6px' }}>
            Gorras Snapback 3D
          </span>
          <span style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '2px' }}>
            Bordado Premium
          </span>
        </div>

        {/* Bloque 4: Merch Camisetas */}
        <div
          className="glass-panel"
          style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            background: 'radial-gradient(circle at center, #1A1F2C, #0B0D12)'
          }}
        >
          <span style={{ fontSize: '1.8rem' }}>👕</span>
          <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F1F5F9', marginTop: '6px' }}>
            Indumentaria de Taller
          </span>
          <span style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '2px' }}>
            Algodón Pesado & Polos
          </span>
        </div>

        {/* Bloque 5: Publicidad Impresa & Digital */}
        <div
          className="glass-panel"
          style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            background: 'radial-gradient(circle at center, #1C202B, #0E1015)'
          }}
        >
          <span style={{ fontSize: '1.8rem' }}>📑</span>
          <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F1F5F9', marginTop: '6px' }}>
            Tarjetas & Rótulos
          </span>
          <span style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '2px' }}>
            Soft-Touch y Acabados Mate
          </span>
        </div>
      </div>
    </section>
  );
};
