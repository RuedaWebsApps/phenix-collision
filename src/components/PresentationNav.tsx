import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Grid } from 'lucide-react';

interface PresentationNavProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onGoTo: (index: number) => void;
  slideTitles: string[];
}

export const PresentationNav: React.FC<PresentationNavProps> = ({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onGoTo,
  slideTitles
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showIndexMenu, setShowIndexMenu] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
      }
    }
  };

  return (
    <>
      {/* Barra de progreso superior discreta */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'rgba(255, 255, 255, 0.06)',
          zIndex: 1000
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${((currentSlide + 1) / totalSlides) * 100}%`,
            background: 'linear-gradient(90deg, #E05A2B, #F59E0B)',
            transition: 'width 0.3s ease-out'
          }}
        />
      </div>

      {/* Menú de cuadrícula / índice si está activo */}
      {showIndexMenu && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(11, 12, 14, 0.92)',
            backdropFilter: 'blur(20px)',
            zIndex: 1100,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '32px'
          }}
          onClick={() => setShowIndexMenu(false)}
        >
          <div
            style={{
              maxWidth: '900px',
              width: '100%',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '12px'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {slideTitles.map((title, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onGoTo(idx);
                  setShowIndexMenu(false);
                }}
                style={{
                  textAlign: 'left',
                  padding: '16px 20px',
                  borderRadius: '12px',
                  background: currentSlide === idx ? 'rgba(224, 90, 43, 0.15)' : 'rgba(255,255,255,0.03)',
                  border: currentSlide === idx ? '1px solid #E05A2B' : '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: currentSlide === idx ? '#FFFFFF' : '#94A3B8',
                  transition: 'all 0.2s ease'
                }}
              >
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: currentSlide === idx ? '#E05A2B' : '#64748B',
                    width: '28px'
                  }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{title}</span>
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowIndexMenu(false)}
            style={{
              marginTop: '24px',
              color: '#94A3B8',
              fontSize: '0.85rem',
              padding: '8px 16px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            Cerrar índice [Esc]
          </button>
        </div>
      )}

      {/* Barra de Controles Flotante para Tablet */}
      <aside
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '8px 16px',
          backgroundColor: 'rgba(19, 22, 28, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderRadius: '9999px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
          zIndex: 900
        }}
        aria-label="Controles de navegación"
      >
        {/* Botón Anterior */}
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          aria-label="Sección anterior"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: currentSlide === 0 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.06)',
            color: currentSlide === 0 ? '#475569' : '#FFFFFF',
            cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          <ChevronLeft size={22} />
        </button>

        {/* Indicador de sección actual */}
        <button
          onClick={() => setShowIndexMenu(!showIndexMenu)}
          style={{
            padding: '6px 14px',
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}
          title="Ver índice de secciones"
        >
          <Grid size={15} style={{ color: '#E05A2B' }} />
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#E2E8F0' }}>
            {String(currentSlide + 1).padStart(2, '0')}{' '}
            <span style={{ color: '#64748B' }}>/ {String(totalSlides).padStart(2, '0')}</span>
          </span>
        </button>

        {/* Botón Siguiente */}
        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          aria-label="Siguiente sección"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: currentSlide === totalSlides - 1 ? 'rgba(255,255,255,0.02)' : '#E05A2B',
            color: currentSlide === totalSlides - 1 ? '#475569' : '#FFFFFF',
            cursor: currentSlide === totalSlides - 1 ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: currentSlide === totalSlides - 1 ? 'none' : '0 2px 12px rgba(224, 90, 43, 0.4)'
          }}
        >
          <ChevronRight size={22} />
        </button>

        {/* Divisor */}
        <div style={{ width: '1px', height: '24px', backgroundColor: 'rgba(255,255,255,0.1)' }} />

        {/* Pantalla Completa */}
        <button
          onClick={toggleFullscreen}
          aria-label={isFullscreen ? "Salir de pantalla completa" : "Modo presentación pantalla completa"}
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#94A3B8'
          }}
          title="Pantalla completa"
        >
          {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
        </button>
      </aside>
    </>
  );
};
