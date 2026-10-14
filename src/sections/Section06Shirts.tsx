import React, { useState } from 'react';
import { presentationConfig } from '../config/presentation';
import { Sparkles } from 'lucide-react';

export const Section06Shirts: React.FC = () => {
  const { shirts } = presentationConfig.slides;
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
          <span className="badge-tag">Sección 06 — Indumentaria de Marca</span>
          <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
            [Prendas de Alto Rendimiento]
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
          {shirts.headline}
        </h2>
        <p style={{ fontSize: '0.9rem', color: '#94A3B8', marginTop: '4px' }}>
          {shirts.subheadline}
        </p>
      </div>

      {/* Visor & Selector */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '24px',
          flex: 1,
          minHeight: 0
        }}
      >
        {/* Mockup Interactivo de Camiseta */}
        <div
          className="glass-panel"
          style={{
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            position: 'relative',
            background: 'radial-gradient(circle at center, #181C26 0%, #0A0C10 100%)',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '320px',
              height: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg viewBox="0 0 400 420" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="shirtDark" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1E232D" />
                  <stop offset="100%" stopColor="#101318" />
                </linearGradient>
                <filter id="shadowDepth" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000000" floodOpacity="0.6" />
                </filter>
              </defs>

              {/* Silueta de Camiseta Premium */}
              <g filter="url(#shadowDepth)">
                <path
                  d="M130 50 L160 70 C180 82, 220 82, 240 70 L270 50 L360 110 L315 170 L275 140 L275 380 L125 380 L125 140 L85 170 L40 110 Z"
                  fill="url(#shirtDark)"
                  stroke="#2E3644"
                  strokeWidth="1.8"
                />
                {/* Cuello Ribbed */}
                <path
                  d="M160 70 C180 92, 220 92, 240 70 C220 80, 180 80, 160 70 Z"
                  fill="#15181F"
                  stroke="#374151"
                  strokeWidth="1.5"
                />
                {/* Costuras de Mangas */}
                <path d="M125 140 L160 70" stroke="#282F3B" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M275 140 L240 70" stroke="#282F3B" strokeWidth="1.5" strokeDasharray="3 3" />
              </g>

              {/* Aplicación Gráfica según la Vista */}
              {selectedView === 0 && (
                /* Pecho Izquierdo */
                <g transform="translate(150, 140)">
                  <rect x="0" y="0" width="36" height="36" rx="6" fill="rgba(224,90,43,0.12)" />
                  <path d="M8 8 L28 18 L8 28 Z" fill="#E05A2B" />
                  <text x="44" y="16" fill="#FFFFFF" fontSize="11" fontWeight="800" letterSpacing="1">
                    PHENIX
                  </text>
                  <text x="44" y="27" fill="#94A3B8" fontSize="7" fontWeight="600" letterSpacing="1.2">
                    COLLISION
                  </text>
                </g>
              )}

              {selectedView === 1 && (
                /* Vista Espalda Completa */
                <g transform="translate(145, 120)">
                  <path d="M55 20 L85 45 L55 95 L25 45 Z" fill="none" stroke="#E05A2B" strokeWidth="3" />
                  <path d="M55 35 L75 52 L55 85 L35 52 Z" fill="#E05A2B" />
                  <text x="55" y="130" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="900" letterSpacing="3">
                    PHENIX COLLISION
                  </text>
                  <text x="55" y="148" textAnchor="middle" fill="#E05A2B" fontSize="9" fontWeight="700" letterSpacing="3">
                    CRAFTSMANSHIP & PRECISION
                  </text>
                </g>
              )}

              {selectedView === 2 && (
                /* Polo de Mostrador */
                <g transform="translate(180, 80)">
                  {/* Botones de Polo */}
                  <rect x="-10" y="0" width="20" height="70" fill="#161920" stroke="#2D3442" rx="3" />
                  <circle cx="0" cy="18" r="3" fill="#3E4756" />
                  <circle cx="0" cy="38" r="3" fill="#3E4756" />
                  <circle cx="0" cy="58" r="3" fill="#3E4756" />
                  <g transform="translate(-45, 75)">
                    <text x="0" y="0" fill="#E05A2B" fontSize="9" fontWeight="700">ASESOR CERTIFICADO</text>
                  </g>
                </g>
              )}
            </svg>

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
              {shirts.views[selectedView].badge}
            </div>
          </div>
        </div>

        {/* Selector de Perspectivas Textil */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', justifyContent: 'center' }}>
          {shirts.views.map((item, idx) => (
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
            * Proyección visual: Las telas y métodos de estampado (serigrafía al agua o DTF alta elasticidad para uniformes de uso rudo) se detallan en el pedido técnico.
          </div>
        </div>
      </div>
    </section>
  );
};
