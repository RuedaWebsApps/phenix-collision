import React, { useState } from 'react';
import { studioPresentationConfig } from '../config/studioPresentation';
import { SafeImage } from './SafeImage';
import {
  ArrowRight,
  RotateCcw,
  Check
} from 'lucide-react';

interface SceneProps {
  onNext: () => void;
  onGoTo?: (index: number) => void;
}

/* =========================================================================
   ESCENA 01 — APERTURA MEMORABLE (Estilo Apple Keynote / Studio Editorial)
   ========================================================================= */
export const Scene01Opening: React.FC<SceneProps> = ({ onNext }) => {
  const { opening } = studioPresentationConfig.scenes;
  const { heroCar } = studioPresentationConfig.assets;

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0 clamp(28px, 6vw, 90px)',
        overflow: 'hidden',
        backgroundColor: '#090A0D'
      }}
      className="animate-slide-in"
    >
      {/* Fotografía protagonista real con encuadre cinematográfico */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <SafeImage
          src={heroCar}
          alt="Vehículo Phenix Collision"
          style={{
            objectFit: 'cover',
            filter: 'brightness(0.38) contrast(1.15)',
            transform: 'scale(1.02)',
            transition: 'transform 10s ease'
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(9,10,13,0.96) 0%, rgba(9,10,13,0.7) 48%, rgba(9,10,13,0.3) 100%)'
          }}
        />
      </div>

      {/* Contenido Editorial Intencional */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '720px' }}>
        <div style={{ marginBottom: '20px' }}>
          <span style={{ fontSize: '0.9rem', color: '#E05A2B', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            {studioPresentationConfig.client.name}
          </span>
        </div>

        <h1
          style={{
            fontSize: 'clamp(2.4rem, 4.8vw, 4.2rem)',
            lineHeight: 1.08,
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#FFFFFF'
          }}
        >
          {opening.headline}
        </h1>

        <p
          style={{
            fontSize: 'clamp(1rem, 1.6vw, 1.25rem)',
            color: '#CBD5E1',
            marginTop: '20px',
            lineHeight: 1.55,
            maxWidth: '580px'
          }}
        >
          {opening.subheadline}
        </p>

        <div style={{ marginTop: '36px' }}>
          <button
            onClick={onNext}
            className="btn-primary"
            style={{ fontSize: '1.05rem', padding: '16px 36px' }}
          >
            <span>{opening.cta}</span>
            <ArrowRight size={19} />
          </button>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '36px',
          right: 'clamp(28px, 5vw, 70px)',
          zIndex: 10,
          textAlign: 'right'
        }}
      >
        <span style={{ fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block' }}>
          Propuesta Comercial
        </span>
        <span style={{ fontSize: '0.85rem', color: '#CBD5E1', fontWeight: 600 }}>
          {studioPresentationConfig.studio.name}
        </span>
      </div>
    </section>
  );
};

/* =========================================================================
   ESCENA 02 — LA VISIÓN (Declaración de Marca y Tres Dimensiones)
   ========================================================================= */
export const Scene02Vision: React.FC = () => {
  const { vision } = studioPresentationConfig.scenes;

  return (
    <section
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(20px, 4vw, 50px) clamp(28px, 6vw, 80px)',
        position: 'relative',
        backgroundColor: '#0B0D11'
      }}
      className="animate-slide-in"
    >
      <div style={{ maxWidth: '820px', marginBottom: 'clamp(24px, 4vh, 44px)' }}>
        <h2
          style={{
            fontSize: 'clamp(2rem, 3.4vw, 3rem)',
            lineHeight: 1.14,
            marginTop: '12px',
            color: '#FFFFFF'
          }}
        >
          {vision.headline}
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#CBD5E1', marginTop: '12px', lineHeight: 1.6 }}>
          «{vision.statement}»
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'clamp(16px, 2.2vw, 28px)',
          width: '100%',
          maxWidth: '1200px'
        }}
      >
        {vision.points.map((pt, idx) => (
          <div
            key={idx}
            className="glass-panel"
            style={{
              padding: 'clamp(22px, 2.6vw, 32px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              backgroundColor: 'rgba(18, 21, 28, 0.75)'
            }}
          >
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#E05A2B',
                fontFamily: 'monospace'
              }}
            >
              0{idx + 1}
            </span>
            <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', fontWeight: 700 }}>
              {pt.title}
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#94A3B8', lineHeight: 1.55 }}>
              {pt.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

/* =========================================================================
   ESCENA 03 — EXPERIENCIA DIGITAL: WEB (Imagen Plana Real Protagónica)
   ========================================================================= */
export const Scene03Web: React.FC = () => {
  const { web } = studioPresentationConfig.scenes;
  const { webDesign } = studioPresentationConfig.assets;

  return (
    <section
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: 'clamp(16px, 3vw, 36px) clamp(24px, 4.5vw, 64px)',
        position: 'relative',
        backgroundColor: '#090A0D'
      }}
      className="animate-slide-in"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '16px' }}>
        <div>
          <h2
            style={{
              fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
              lineHeight: 1.15,
              marginTop: '6px',
              color: '#FFFFFF'
            }}
          >
            {web.headline}
          </h2>
        </div>
        <span style={{ fontSize: '0.78rem', color: '#94A3B8' }}>
          
        </span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '24px',
          flex: 1,
          minHeight: 0
        }}
      >
        {/* Visor de Arte Plano Web con Scroll Panorámico */}
        <div
          className="glass-panel"
          style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: '#0D0F14',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Barra superior de ventana estilo estudio */}
          <div
            style={{
              padding: '10px 16px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }} />
            <span style={{ fontSize: '0.72rem', color: '#64748B', marginLeft: '12px' }}>
              Propuesta de sitio web
            </span>
          </div>

          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              overflowX: 'hidden',
              padding: '12px',
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: '#000000'
            }}
          >
            <SafeImage
              src={webDesign}
              alt="Diseño Web Phenix Collision"
              style={{
                objectFit: 'contain',
                width: '100%',
                maxHeight: 'none',
                height: 'auto'
              }}
            />
          </div>
        </div>

        {/* Panel Editorial de Valor Comercial */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
          <p style={{ fontSize: '1rem', color: '#CBD5E1', lineHeight: 1.6 }}>
            {web.subheadline}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {web.bullets.map((bullet, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(224, 90, 43, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#E05A2B',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}
                >
                  <Check size={13} strokeWidth={3} />
                </div>
                <span style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.5 }}>
                  {bullet}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              padding: '14px 18px',
              borderRadius: '12px',
              backgroundColor: 'rgba(224, 90, 43, 0.08)',
              border: '1px solid rgba(224, 90, 43, 0.25)',
              fontSize: '0.82rem',
              color: '#F1F5F9'
            }}
          >
            <strong>Enfoque:</strong> Diseño adaptable a móvil y escritorio, con acceso directo a cotización y contacto.
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   ESCENA 03B — ROTULACIÓN & WRAP AUTOMOTRIZ (Imágenes Reales wrap-1 y wrap-2)
   ========================================================================= */
export const Scene03Wrap: React.FC = () => {
  const { wrap } = studioPresentationConfig.scenes;
  const { wrap1, wrap2 } = studioPresentationConfig.assets;
  const [selectedWrap, setSelectedWrap] = useState<'wrap1' | 'wrap2'>('wrap1');

  return (
    <section
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: 'clamp(16px, 3vw, 36px) clamp(24px, 4.5vw, 64px)',
        position: 'relative',
        backgroundColor: '#0A0C10'
      }}
      className="animate-slide-in"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '16px' }}>
        <div>
          <h2
            style={{
              fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
              lineHeight: 1.15,
              marginTop: '6px',
              color: '#FFFFFF'
            }}
          >
            {wrap.headline}
          </h2>
        </div>

        {/* Selector de Perspectivas Planas Reales */}
        <div
          style={{
            display: 'flex',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: '4px',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <button
            onClick={() => setSelectedWrap('wrap1')}
            style={{
              padding: '8px 18px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 600,
              backgroundColor: selectedWrap === 'wrap1' ? '#E05A2B' : 'transparent',
              color: selectedWrap === 'wrap1' ? '#FFFFFF' : '#94A3B8',
              transition: 'all 0.2s ease'
            }}
          >
            Propuesta Wrap 01
          </button>
          <button
            onClick={() => setSelectedWrap('wrap2')}
            style={{
              padding: '8px 18px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 600,
              backgroundColor: selectedWrap === 'wrap2' ? '#E05A2B' : 'transparent',
              color: selectedWrap === 'wrap2' ? '#FFFFFF' : '#94A3B8',
              transition: 'all 0.2s ease'
            }}
          >
            Propuesta Wrap 02
          </button>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr',
          gap: '24px',
          flex: 1,
          minHeight: 0
        }}
      >
        {/* Contenedor del Wrap Real (contain para respetar proporciones) */}
        <div
          className="glass-panel"
          style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: '#0E1117',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}
        >
          <SafeImage
            src={selectedWrap === 'wrap1' ? wrap1 : wrap2}
            alt="Wrap Automotriz Phenix Collision"
            style={{ objectFit: 'contain', maxHeight: '100%' }}
          />
        </div>

        {/* Panel Editorial */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
          <p style={{ fontSize: '1rem', color: '#CBD5E1', lineHeight: 1.6 }}>
            {wrap.subheadline}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {wrap.bullets.map((bullet, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(224, 90, 43, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#E05A2B',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}
                >
                  <Check size={13} strokeWidth={3} />
                </div>
                <span style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.5 }}>
                  {bullet}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              padding: '14px 18px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.8rem',
              color: '#94A3B8'
            }}
          >
            <strong>Precisión:</strong> El diseño se ajusta a las medidas reales del vehículo antes de producción.
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   ESCENA 04 — INTERACCIÓN DINÁMICA / VIDEO SHOWCASE
   ========================================================================= */
export const Scene04Motion: React.FC = () => {
  const { app } = studioPresentationConfig.scenes;
  const { videoShowcase } = studioPresentationConfig.assets;

  return (
    <section
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: 'clamp(16px, 3vw, 36px) clamp(24px, 4.5vw, 64px)',
        position: 'relative',
        backgroundColor: '#090A0D'
      }}
      className="animate-slide-in"
    >
      <div style={{ marginBottom: '16px' }}>
        <h2
          style={{
            fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
            lineHeight: 1.15,
            marginTop: '6px',
            color: '#FFFFFF'
          }}
        >
          {app.headline}
        </h2>
        <p style={{ fontSize: '0.92rem', color: '#94A3B8', marginTop: '4px' }}>
          {app.subheadline}
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '24px',
          flex: 1,
          minHeight: 0
        }}
      >
        {/* Reproductor de Video Showcase Plano y Limpio */}
        <div
          className="glass-panel"
          style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: '#000000',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <video
            src={videoShowcase}
            preload="metadata"
            aria-label="Video de presentación Phenix Collision"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Panel Editorial */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {app.bullets.map((bullet, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(224, 90, 43, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#E05A2B',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}
                >
                  <Check size={13} strokeWidth={3} />
                </div>
                <span style={{ fontSize: '0.9rem', color: '#CBD5E1', lineHeight: 1.5 }}>
                  {bullet}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              padding: '16px',
              borderRadius: '12px',
              backgroundColor: 'rgba(224, 90, 43, 0.08)',
              border: '1px solid rgba(224, 90, 43, 0.25)',
              fontSize: '0.82rem',
              color: '#F8FAFC'
            }}
          >
            <strong>Movimiento:</strong> Piezas en video para redes sociales, web y pantallas del taller.
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   ESCENA 05 — LA MARCA EN EL PRODUCTO (Polos Frente/Espalda & Gorra Real)
   ========================================================================= */
export const Scene05Merchandise: React.FC = () => {
  const { merchandise } = studioPresentationConfig.scenes;
  const [selectedItemId, setSelectedItemId] = useState<string>(merchandise.items[0].id);

  const activeItem = merchandise.items.find(i => i.id === selectedItemId) || merchandise.items[0];

  return (
    <section
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: 'clamp(16px, 3vw, 36px) clamp(24px, 4.5vw, 64px)',
        position: 'relative',
        backgroundColor: '#0B0D11'
      }}
      className="animate-slide-in"
    >
      <div style={{ marginBottom: '16px' }}>
        <h2
          style={{
            fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
            lineHeight: 1.15,
            marginTop: '6px',
            color: '#FFFFFF'
          }}
        >
          {merchandise.headline}
        </h2>
        <p style={{ fontSize: '0.92rem', color: '#94A3B8', marginTop: '4px' }}>
          {merchandise.subheadline}
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '24px',
          flex: 1,
          minHeight: 0
        }}
      >
        {/* Visor de Propuesta de Producto */}
        <div
          className="glass-panel"
          style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: '#0E1117',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}
        >
          <SafeImage
            src={activeItem.image}
            alt={activeItem.title}
            style={{ objectFit: 'contain', maxHeight: '100%' }}
          />

          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              padding: '8px 16px',
              borderRadius: '10px',
              backgroundColor: 'rgba(11, 13, 17, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>
              {activeItem.title}
            </span>
            <span style={{ display: 'block', fontSize: '0.72rem', color: '#E05A2B' }}>
              {activeItem.subtitle}
            </span>
          </div>
        </div>

        {/* Selector de Piezas de Merchandising */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', justifyContent: 'center' }}>
          {merchandise.items.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedItemId(item.id)}
              style={{
                textAlign: 'left',
                padding: '16px 20px',
                borderRadius: '12px',
                backgroundColor: selectedItemId === item.id ? 'rgba(224, 90, 43, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                border: selectedItemId === item.id ? '1px solid #E05A2B' : '1px solid rgba(255, 255, 255, 0.07)',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: selectedItemId === item.id ? '#FFFFFF' : '#CBD5E1' }}>
                  {item.title}
                </span>
                <span style={{ fontSize: '0.72rem', color: '#E05A2B', fontWeight: 600 }}>
                  Propuesta
                </span>
              </div>
              <p style={{ fontSize: '0.82rem', color: '#94A3B8', marginTop: '6px' }}>
                {item.subtitle}
              </p>
            </button>
          ))}

          <div
            style={{
              padding: '14px',
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              fontSize: '0.78rem',
              color: '#94A3B8',
              lineHeight: 1.5
            }}
          >
            <strong>Nota:</strong> Simulaciones visuales de la propuesta. Técnica de aplicación, prendas y colores se definen con el cliente.
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   ESCENA 06 — PUBLICIDAD Y CAMPAÑAS (Tarjetas Planas Reales card-1 y card-2)
   ========================================================================= */
export const Scene06Campaigns: React.FC = () => {
  const { campaigns } = studioPresentationConfig.scenes;
  const { card1, card2 } = studioPresentationConfig.assets;

  return (
    <section
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: 'clamp(16px, 3vw, 36px) clamp(24px, 4.5vw, 64px)',
        position: 'relative',
        backgroundColor: '#090A0D'
      }}
      className="animate-slide-in"
    >
      <div style={{ marginBottom: '16px' }}>
        <h2
          style={{
            fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
            lineHeight: 1.15,
            marginTop: '6px',
            color: '#FFFFFF'
          }}
        >
          {campaigns.headline}
        </h2>
        <p style={{ fontSize: '0.92rem', color: '#94A3B8', marginTop: '4px' }}>
          {campaigns.subheadline}
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '24px',
          flex: 1,
          minHeight: 0
        }}
      >
        {/* Galería Editorial de las Dos Caras de la Tarjeta */}
        <div
          className="cards-pair"
          style={{
            display: 'flex',
            gap: '16px',
            height: '100%',
            minHeight: 0
          }}
        >
          <div
            className="glass-panel"
            style={{
              flex: 1,
              minWidth: 0,
              borderRadius: '14px',
              overflow: 'hidden',
              padding: '12px',
              backgroundColor: '#0D0F14',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <SafeImage
              src={card1}
              alt="Tarjeta Cara A"
              style={{ objectFit: 'contain', maxHeight: '100%' }}
            />
          </div>
          <div
            className="glass-panel"
            style={{
              flex: 1,
              minWidth: 0,
              borderRadius: '14px',
              overflow: 'hidden',
              padding: '12px',
              backgroundColor: '#0D0F14',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <SafeImage
              src={card2}
              alt="Tarjeta Cara B"
              style={{ objectFit: 'contain', maxHeight: '100%' }}
            />
          </div>
        </div>

        {/* Panel Editorial */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {campaigns.bullets.map((bullet, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(224, 90, 43, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#E05A2B',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}
                >
                  <Check size={13} strokeWidth={3} />
                </div>
                <span style={{ fontSize: '0.9rem', color: '#CBD5E1', lineHeight: 1.5 }}>
                  {bullet}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              padding: '14px',
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              fontSize: '0.8rem',
              color: '#94A3B8'
            }}
          >
            <strong>Entrega:</strong> Archivos finales preparados para imprenta una vez aprobado el diseño.
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   ESCENA 07 — ECOSISTEMA COHERENTE (Mosaico con las Piezas Reales)
   ========================================================================= */
export const Scene07Ecosystem: React.FC = () => {
  const { serviceCategories } = studioPresentationConfig;
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const activeCategory = serviceCategories[activeCategoryIndex];

  return (
    <section
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: 'clamp(16px, 3vw, 36px) clamp(24px, 4.5vw, 64px)',
        position: 'relative',
        backgroundColor: '#090A0E'
      }}
      className="animate-slide-in"
    >
      <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h2
            style={{
              fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
              lineHeight: 1.15,
              marginTop: '6px',
              color: '#FFFFFF'
            }}
          >
            Matriz Comercial de Servicios
          </h2>
          <p style={{ fontSize: '0.92rem', color: '#94A3B8', marginTop: '4px' }}>
            Estructuración estratégica de los servicios de Phenix Collision para maximizar conversión y valor de ticket.
          </p>
        </div>

        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '0.72rem', color: '#E05A2B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Austin, Texas
          </span>
          <span style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', fontWeight: 600 }}>
            4 Categorías Clave
          </span>
        </div>
      </div>

      {/* Grid de 4 Categorías + Panel de Detalle Activo */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '20px',
          flex: 1,
          minHeight: 0
        }}
      >
        {/* Lista de las 4 Categorías Principales */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center' }}>
          {serviceCategories.map((cat, idx) => {
            const isSelected = activeCategoryIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategoryIndex(idx)}
                style={{
                  textAlign: 'left',
                  padding: '16px 20px',
                  borderRadius: '14px',
                  backgroundColor: isSelected ? 'rgba(224, 90, 43, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                  border: isSelected ? '1px solid #E05A2B' : '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      color: isSelected ? '#E05A2B' : '#64748B',
                      fontFamily: 'monospace'
                    }}
                  >
                    {cat.number}
                  </span>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', color: isSelected ? '#FFFFFF' : '#E2E8F0', fontWeight: 700 }}>
                      {cat.category}
                    </h3>
                    <p style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '2px' }}>
                      {cat.tagline}
                    </p>
                  </div>
                </div>

                <span
                  style={{
                    fontSize: '0.72rem',
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    backgroundColor: isSelected ? '#E05A2B' : 'rgba(255, 255, 255, 0.06)',
                    color: isSelected ? '#FFFFFF' : '#94A3B8',
                    fontWeight: 600,
                    whiteSpace: 'nowrap'
                  }}
                >
                  {cat.ticketType}
                </span>
              </button>
            );
          })}
        </div>

        {/* Panel Editorial de Desglose y Enfoque de Venta */}
        <div
          className="glass-panel"
          style={{
            padding: '28px',
            borderRadius: '16px',
            backgroundColor: 'rgba(18, 21, 28, 0.85)',
            border: '1px solid rgba(224, 90, 43, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <span style={{ fontSize: '0.78rem', color: '#E05A2B', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Servicios Agrupados Dentro
              </span>
              <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
                {activeCategory.ticketType}
              </span>
            </div>

            <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '6px' }}>
              {activeCategory.category}
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#CBD5E1', marginBottom: '20px' }}>
              {activeCategory.tagline}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {activeCategory.services.map((srv, sIdx) => (
                <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(224, 90, 43, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#E05A2B',
                      flexShrink: 0
                    }}
                  >
                    <Check size={11} strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: '0.88rem', color: '#F1F5F9', fontWeight: 500 }}>
                    {srv}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Caja destacada del Enfoque de Venta */}
          <div
            style={{
              marginTop: '24px',
              padding: '16px 20px',
              borderRadius: '12px',
              backgroundColor: 'rgba(224, 90, 43, 0.08)',
              borderLeft: '4px solid #E05A2B'
            }}
          >
            <span style={{ fontSize: '0.75rem', color: '#E05A2B', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '4px' }}>
              Estrategia Comercial
            </span>
            <p style={{ fontSize: '0.85rem', color: '#E2E8F0', lineHeight: 1.5 }}>
              {activeCategory.salesFocus}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   ESCENA 08 — CIERRE COMERCIAL
   ========================================================================= */
export const Scene08Closing: React.FC<SceneProps> = ({ onGoTo }) => {
  const { closing } = studioPresentationConfig.scenes;
  const { client, studio, assets } = studioPresentationConfig;
  const { videoRepair } = assets;

  return (
    <section
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'clamp(20px, 4vw, 50px) clamp(28px, 6vw, 80px)',
        position: 'relative',
        textAlign: 'center',
        backgroundColor: '#08090C',
        overflow: 'hidden'
      }}
      className="animate-slide-in"
    >
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          backgroundColor: 'rgba(224, 90, 43, 0.08)',
          filter: 'blur(120px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none'
        }}
      />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '750px', width: '100%' }}>

        <h2
          style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
            lineHeight: 1.12,
            color: '#FFFFFF',
            fontWeight: 800,
            marginTop: '16px'
          }}
        >
          {closing.headline}
        </h2>

        <p
          style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            color: '#CBD5E1',
            marginTop: '16px',
            lineHeight: 1.55,
            maxWidth: '620px',
            marginInline: 'auto'
          }}
        >
          {closing.subheadline}
        </p>

        {/* Video Showcase de Cierre */}
        <div
          className="glass-panel"
          style={{
            marginTop: '28px',
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: '#000000',
            border: '1px solid rgba(224, 90, 43, 0.25)',
            maxHeight: '340px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(0,0,0,0.6)'
          }}
        >
          <video
            src={videoRepair}
            preload="metadata"
            aria-label="Video de presentación Phenix Collision"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              maxHeight: '340px',
              objectFit: 'contain'
            }}
          />
        </div>

        <div
          className="glass-panel"
          style={{
            marginTop: '24px',
            padding: '16px 28px',
            borderRadius: '16px',
            backgroundColor: 'rgba(18, 21, 28, 0.85)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'left'
          }}
        >
          <div>
            <span style={{ fontSize: '0.72rem', color: '#E05A2B', fontWeight: 700, textTransform: 'uppercase' }}>
              Presentación Exclusiva Para
            </span>
            <h4 style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 700 }}>
              {client.name}
            </h4>
            <span style={{ fontSize: '0.78rem', color: '#94A3B8' }}>
              {studio.label}
            </span>
          </div>

          <button
            onClick={() => onGoTo && onGoTo(0)}
            className="btn-secondary"
            style={{ fontSize: '0.82rem', padding: '10px 18px' }}
          >
            <RotateCcw size={15} />
            <span>Volver al inicio</span>
          </button>
        </div>
      </div>
    </section>
  );
};



