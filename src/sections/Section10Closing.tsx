import React from 'react';
import { presentationConfig } from '../config/presentation';
import { MessageSquare, Mail, Phone, Globe, RotateCcw, Sparkles } from 'lucide-react';

interface Section10ClosingProps {
  onRestart: () => void;
}

export const Section10Closing: React.FC<Section10ClosingProps> = ({ onRestart }) => {
  const { agency, advisor, slides, client } = presentationConfig;
  const { closing } = slides;

  const handleWhatsAppClick = () => {
    if (!advisor.whatsappNumber) return;
    const cleanNumber = advisor.whatsappNumber.replace(/[^0-9]/g, '');
    const encodedMessage = encodeURIComponent(advisor.whatsappDefaultMessage || `Hola, me gustaría conversar sobre la propuesta para ${client.name}`);
    window.open(`https://wa.me/${cleanNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'clamp(20px, 4vw, 50px) clamp(24px, 5vw, 70px)',
        position: 'relative',
        textAlign: 'center',
        overflow: 'hidden'
      }}
      className="animate-slide-in"
    >
      {/* Background glow cinemático */}
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
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '750px', width: '100%' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <span className="badge-tag">
            <Sparkles size={13} />
            Sección 10 — Cierre Comercial
          </span>
        </div>

        <h2
          style={{
            fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
            lineHeight: 1.12,
            color: '#FFFFFF',
            fontWeight: 800
          }}
        >
          {closing.headline}
        </h2>

        <p
          style={{
            fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
            color: '#CBD5E1',
            marginTop: '16px',
            lineHeight: 1.5,
            maxWidth: '620px',
            marginInline: 'auto'
          }}
        >
          {closing.subheadline}
        </p>

        {/* CTA Principal WhatsApp */}
        {advisor.whatsappNumber && (
          <div style={{ marginTop: '28px' }}>
            <button
              onClick={handleWhatsAppClick}
              className="btn-primary"
              style={{
                fontSize: '1.05rem',
                padding: '16px 36px',
                marginInline: 'auto',
                backgroundColor: '#25D366',
                boxShadow: '0 4px 20px rgba(37, 211, 102, 0.35)'
              }}
            >
              <MessageSquare size={20} />
              <span>{closing.ctaText}</span>
            </button>
          </div>
        )}

        {/* Tarjeta de Contacto del Asesor y Agencia */}
        <div
          className="glass-panel"
          style={{
            marginTop: '36px',
            padding: '20px 28px',
            borderRadius: '16px',
            backgroundColor: 'rgba(19, 22, 28, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
            gap: '20px',
            textAlign: 'left'
          }}
        >
          <div>
            <span style={{ fontSize: '0.72rem', color: '#E05A2B', fontWeight: 700, textTransform: 'uppercase' }}>
              Presentado por
            </span>
            <h4 style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 700 }}>
              {advisor.name}
            </h4>
            <span style={{ fontSize: '0.78rem', color: '#94A3B8' }}>
              {agency.name}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {advisor.phone && (
              <span style={{ fontSize: '0.82rem', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={14} style={{ color: '#E05A2B' }} /> {advisor.phone}
              </span>
            )}
            {advisor.email && (
              <span style={{ fontSize: '0.82rem', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={14} style={{ color: '#E05A2B' }} /> {advisor.email}
              </span>
            )}
            {agency.website && (
              <span style={{ fontSize: '0.82rem', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Globe size={14} style={{ color: '#E05A2B' }} /> {agency.website}
              </span>
            )}
          </div>

          <button
            onClick={onRestart}
            className="btn-secondary"
            style={{ fontSize: '0.82rem', padding: '10px 18px' }}
            title="Reiniciar presentación"
          >
            <RotateCcw size={15} />
            <span>Volver a la portada</span>
          </button>
        </div>
      </div>
    </section>
  );
};
