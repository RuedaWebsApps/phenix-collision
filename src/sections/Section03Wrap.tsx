import React, { useState } from 'react';
import { presentationConfig } from '../config/presentation';
import { SafeImage } from '../components/SafeImage';
import { Layers, Eye } from 'lucide-react';

export const Section03Wrap: React.FC = () => {
  const { wrap } = presentationConfig.slides;
  const [selectedAngleId, setSelectedAngleId] = useState<string>(wrap.angles[0].id);
  const [activeTab, setActiveTab] = useState<'angles' | 'concepts'>('angles');
  const [selectedConceptId, setSelectedConceptId] = useState<string>(wrap.concepts[0].id);

  const currentAngle = wrap.angles.find(a => a.id === selectedAngleId) || wrap.angles[0];
  const currentConcept = wrap.concepts.find(c => c.id === selectedConceptId) || wrap.concepts[0];

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
      {/* Cabecera de Sección */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '16px' }}>
        <div>
          <span className="badge-tag">Sección 03 — Servicio Protagónico</span>
          <h2
            style={{
              fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)',
              lineHeight: 1.15,
              marginTop: '6px',
              color: '#FFFFFF'
            }}
          >
            {wrap.headline}
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#94A3B8', marginTop: '4px' }}>
            {wrap.subheadline}
          </p>
        </div>

        {/* Selector de Modo: Vistas Técnicas vs Conceptos Alternativos */}
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
            onClick={() => setActiveTab('angles')}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 600,
              backgroundColor: activeTab === 'angles' ? '#E05A2B' : 'transparent',
              color: activeTab === 'angles' ? '#FFFFFF' : '#94A3B8',
              transition: 'all 0.2s ease'
            }}
          >
            Vistas del Vehículo (3 Ángulos)
          </button>
          <button
            onClick={() => setActiveTab('concepts')}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 600,
              backgroundColor: activeTab === 'concepts' ? '#E05A2B' : 'transparent',
              color: activeTab === 'concepts' ? '#FFFFFF' : '#94A3B8',
              transition: 'all 0.2s ease'
            }}
          >
            Conceptos de Diseño
          </button>
        </div>
      </div>

      {/* Visor Principal & Selector */}
      {activeTab === 'angles' ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 320px',
            gap: '20px',
            flex: 1,
            minHeight: 0
          }}
        >
          {/* Escaparate de Imagen del Vehículo */}
          <div
            className="glass-panel"
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
              backgroundColor: '#0E1117'
            }}
          >
            <SafeImage
              src={currentAngle.image}
              alt={currentAngle.name}
              style={{ objectFit: 'contain', maxHeight: '100%' }}
            />
            {/* Tag de la vista */}
            <div
              style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                padding: '6px 12px',
                borderRadius: '8px',
                backgroundColor: 'rgba(11, 12, 14, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Eye size={14} style={{ color: '#E05A2B' }} />
              <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#F1F5F9' }}>
                {currentAngle.name}
              </span>
            </div>
          </div>

          {/* Menú de selección de ángulo y notas técnicas */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center' }}>
            {wrap.angles.map(angle => (
              <button
                key={angle.id}
                onClick={() => setSelectedAngleId(angle.id)}
                style={{
                  textAlign: 'left',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  backgroundColor: selectedAngleId === angle.id ? 'rgba(224, 90, 43, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  border: selectedAngleId === angle.id ? '1px solid #E05A2B' : '1px solid rgba(255, 255, 255, 0.07)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: selectedAngleId === angle.id ? '#FFFFFF' : '#CBD5E1' }}>
                    {angle.name}
                  </span>
                  <span style={{ fontSize: '0.7rem', color: '#E05A2B', fontWeight: 600 }}>
                    {angle.tag}
                  </span>
                </div>
                <p style={{ fontSize: '0.78rem', color: '#94A3B8', marginTop: '6px', lineHeight: 1.4 }}>
                  {angle.description}
                </p>
              </button>
            ))}

            <div
              style={{
                padding: '12px 14px',
                borderRadius: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                fontSize: '0.75rem',
                color: '#64748B'
              }}
            >
              ℹ️ Prototipo adaptado a escala del modelo del cliente. Los archivos se preparan con sangrados y líneas de corte listas para producción.
            </div>
          </div>
        </div>
      ) : (
        /* Vista de Conceptos Alternativos */
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 320px',
            gap: '20px',
            flex: 1,
            minHeight: 0
          }}
        >
          <div
            className="glass-panel"
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
              backgroundColor: '#0E1117'
            }}
          >
            <SafeImage
              src={currentConcept.image}
              alt={currentConcept.title}
              style={{ objectFit: 'contain', maxHeight: '100%' }}
            />
            <div
              style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                padding: '6px 12px',
                borderRadius: '8px',
                backgroundColor: 'rgba(11, 12, 14, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Layers size={14} style={{ color: '#E05A2B' }} />
              <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#F1F5F9' }}>
                {currentConcept.title}
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase' }}>
              Conceptos Alternativos
            </span>
            {wrap.concepts.map(concept => (
              <button
                key={concept.id}
                onClick={() => setSelectedConceptId(concept.id)}
                style={{
                  textAlign: 'left',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  backgroundColor: selectedConceptId === concept.id ? 'rgba(224, 90, 43, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  border: selectedConceptId === concept.id ? '1px solid #E05A2B' : '1px solid rgba(255, 255, 255, 0.07)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: selectedConceptId === concept.id ? '#FFFFFF' : '#CBD5E1' }}>
                    {concept.title}
                  </span>
                  <span style={{ fontSize: '0.7rem', color: '#E05A2B', fontWeight: 600 }}>
                    {concept.tag}
                  </span>
                </div>
                <p style={{ fontSize: '0.78rem', color: '#94A3B8', marginTop: '6px', lineHeight: 1.4 }}>
                  {concept.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
