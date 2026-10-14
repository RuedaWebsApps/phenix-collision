import React, { useState } from 'react';
import { presentationConfig } from '../config/presentation';
import { CreditCard, FileText, Smartphone, Megaphone } from 'lucide-react';

export const Section07Advertising: React.FC = () => {
  const { advertising } = presentationConfig.slides;
  const [activeItem, setActiveItem] = useState<number>(0);

  const icons = [
    <CreditCard size={22} style={{ color: '#E05A2B' }} />,
    <FileText size={22} style={{ color: '#F59E0B' }} />,
    <Smartphone size={22} style={{ color: '#E05A2B' }} />,
    <Megaphone size={22} style={{ color: '#F59E0B' }} />
  ];

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
      <div style={{ marginBottom: '20px' }}>
        <span className="badge-tag">Sección 07 — Publicidad & Material Comercial</span>
        <h2
          style={{
            fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)',
            lineHeight: 1.15,
            marginTop: '6px',
            color: '#FFFFFF'
          }}
        >
          {advertising.headline}
        </h2>
        <p style={{ fontSize: '0.9rem', color: '#94A3B8', marginTop: '4px' }}>
          {advertising.subheadline}
        </p>
      </div>

      {/* Grid de 4 Materiales */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          flex: 1,
          minHeight: 0
        }}
      >
        {advertising.materials.map((mat, idx) => (
          <div
            key={idx}
            className="glass-panel"
            onClick={() => setActiveItem(idx)}
            style={{
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRadius: '16px',
              backgroundColor: activeItem === idx ? 'rgba(224, 90, 43, 0.12)' : 'rgba(19, 22, 28, 0.7)',
              border: activeItem === idx ? '1px solid #E05A2B' : '1px solid rgba(255, 255, 255, 0.08)',
              transition: 'all 0.25s ease',
              cursor: 'pointer'
            }}
          >
            <div>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '14px'
                }}
              >
                {icons[idx]}
              </div>

              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#E05A2B',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em'
                }}
              >
                {mat.format}
              </span>

              <h3 style={{ fontSize: '1.05rem', color: '#FFFFFF', fontWeight: 700, marginTop: '6px', lineHeight: 1.3 }}>
                {mat.title}
              </h3>

              <p style={{ fontSize: '0.82rem', color: '#94A3B8', marginTop: '8px', lineHeight: 1.5 }}>
                {mat.description}
              </p>
            </div>

            {/* Simulación visual miniatura */}
            <div
              style={{
                marginTop: '16px',
                height: '80px',
                borderRadius: '8px',
                backgroundColor: 'rgba(11, 13, 17, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px'
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '0.7rem', color: '#64748B', display: 'block' }}>
                  Maqueta Digital
                </span>
                <span style={{ fontSize: '0.75rem', color: '#CBD5E1', fontWeight: 600 }}>
                  {mat.format}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Nota inferior de coherencia */}
      <div
        style={{
          marginTop: '16px',
          padding: '10px 16px',
          borderRadius: '8px',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.75rem',
          color: '#94A3B8'
        }}
      >
        <span>
          💡 <strong>Regla de oro:</strong> Toda pieza publicitaria mantendrá exactamente las mismas fórmulas tipográficas, perfiles cromáticos y jerarquía visual.
        </span>
        <span style={{ color: '#E05A2B', fontWeight: 600 }}>100% Vectorial y listo para imprenta</span>
      </div>
    </section>
  );
};
