import React, { useState } from 'react';
import { presentationConfig } from '../config/presentation';
import { Sparkles } from 'lucide-react';

export const Section05Caps: React.FC = () => {
  const { caps } = presentationConfig.slides;
  const [selectedView, setSelectedView] = useState<number>(0);

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="badge-tag">Sección 05 — Custom Merchandise</span>
          <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
            [Simulación de Aplicación Visual]
          </span>
        </div>
        <h2
          style={{
            fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)',
            lineHeight: 1.15,
            marginTop: '6px',
            color: '#FFFFFF'
          }}
        >
          {caps.headline}
        </h2>
        <p style={{ fontSize: '0.9rem', color: '#94A3B8', marginTop: '4px' }}>
          {caps.subheadline}
        </p>
      </div>

      {/* Visor de Producto Realista & Selectores */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '24px',
          flex: 1,
          minHeight: 0
        }}
      >
        {/* Mockup Interactivo de Gorra */}
        <div
          className="glass-panel"
          style={{
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            position: 'relative',
            background: 'radial-gradient(circle at center, #191E28 0%, #0D0F14 100%)',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          {/* Ilustración de Mockup Visual Fotorrealista de Gorra */}
          <div
            style={{
              position: 'relative',
              width: '320px',
              height: '240px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Silueta Estructurada de Gorra Snapback */}
            <svg viewBox="0 0 400 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="capGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#252A34" />
                  <stop offset="60%" stopColor="#15181F" />
                  <stop offset="100%" stopColor="#0B0D11" />
                </linearGradient>
                <linearGradient id="visorGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#1E222A" />
                  <stop offset="100%" stopColor="#0D0F13" />
                </linearGradient>
              </defs>

              {/* Corona Principal */}
              <path
                d="M100 200 C90 120, 150 70, 200 68 C250 70, 310 120, 300 200 Z"
                fill="url(#capGradient)"
                stroke="#333A48"
                strokeWidth="1.5"
              />
              {/* Costuras de paneles */}
              <path d="M200 68 L200 200" stroke="#2B313E" strokeWidth="2" strokeDasharray="3 3" />
              <path d="M200 68 Q140 130 115 198" stroke="#2B313E" strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M200 68 Q260 130 285 198" stroke="#2B313E" strokeWidth="1.5" strokeDasharray="3 3" />

              {/* Botón superior */}
              <circle cx="200" cy="68" r="7" fill="#0B0D11" stroke="#374151" strokeWidth="1.5" />

              {/* Visera Curvada */}
              <path
                d="M70 200 C110 245, 290 245, 330 200 C300 188, 100 188, 70 200 Z"
                fill="url(#visorGradient)"
                stroke="#374151"
                strokeWidth="2"
              />
              <path d="M85 204 C120 236, 280 236, 315 204" stroke="#272C37" strokeWidth="1.5" fill="none" />

              {/* Bordado 3D Frontal Phenix */}
              {selectedView === 0 && (
                <g transform="translate(160, 120)">
                  <rect x="-10" y="-10" width="100" height="42" rx="4" fill="rgba(224,90,43,0.15)" />
                  <path
                    d="M15 5 L35 25 L15 35 Z"
                    fill="#E05A2B"
                    filter="drop-shadow(0 2px 4px rgba(0,0,0,0.8))"
                  />
                  <text
                    x="42"
                    y="22"
                    fill="#FFFFFF"
                    fontFamily="var(--font-heading)"
                    fontWeight="800"
                    fontSize="13"
                    letterSpacing="1.5"
                  >
                    PHENIX
                  </text>
                  <text
                    x="42"
                    y="32"
                    fill="#E05A2B"
                    fontFamily="var(--font-sans)"
                    fontWeight="700"
                    fontSize="7"
                    letterSpacing="1.8"
                  >
                    COLLISION
                  </text>
                </g>
              )}

              {/* Detalle Lateral */}
              {selectedView === 1 && (
                <g transform="translate(245, 145)">
                  <circle cx="15" cy="15" r="14" fill="#E05A2B" />
                  <text x="15" y="19" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">
                    P
                  </text>
                </g>
              )}

              {/* Variante Malla Trucker */}
              {selectedView === 2 && (
                <pattern id="meshPattern" width="6" height="6" patternUnits="userSpaceOnUse">
                  <circle cx="3" cy="3" r="1.2" fill="#3E4756" />
                </pattern>
              )}
            </svg>

            {/* Badge de Vista Activa */}
            <div
              style={{
                position: 'absolute',
                bottom: '-8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(11, 12, 14, 0.9)',
                border: '1px solid rgba(224, 90, 43, 0.4)',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#E05A2B',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Sparkles size={12} />
              {caps.views[selectedView].badge}
            </div>
          </div>
        </div>

        {/* Lista de Selección de Perspectivas */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', justifyContent: 'center' }}>
          {caps.views.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedView(idx)}
              style={{
                textAlign: 'left',
                padding: '16px',
                borderRadius: '12px',
                backgroundColor: selectedView === idx ? 'rgba(224, 90, 43, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                border: selectedView === idx ? '1px solid #E05A2B' : '1px solid rgba(255, 255, 255, 0.07)',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: selectedView === idx ? '#FFFFFF' : '#E2E8F0' }}>
                  {item.title}
                </span>
                <span style={{ fontSize: '0.72rem', color: '#E05A2B', fontWeight: 600 }}>
                  {item.badge}
                </span>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '6px', lineHeight: 1.45 }}>
                {item.description}
              </p>
            </button>
          ))}

          <div
            style={{
              padding: '12px 14px',
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              fontSize: '0.74rem',
              color: '#64748B'
            }}
          >
            * Nota comercial: Render de simulación digital. Las técnicas definitivas (bordado 3D, aplique de goma o parche de cuero grabado) se acuerdan según volumen de producción.
          </div>
        </div>
      </div>
    </section>
  );
};
