import React, { useState } from 'react';
import { presentationConfig } from '../config/presentation';
import { Check, Info } from 'lucide-react';

export const Section09Scope: React.FC = () => {
  const { scope } = presentationConfig.slides;
  const [selectedItems, setSelectedItems] = useState<string[]>(scope.items.map(i => i.id));

  const toggleItem = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

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
        <span className="badge-tag">Sección 09 — Configuración Modular</span>
        <h2
          style={{
            fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)',
            lineHeight: 1.15,
            marginTop: '6px',
            color: '#FFFFFF'
          }}
        >
          {scope.headline}
        </h2>
        <p style={{ fontSize: '0.9rem', color: '#94A3B8', marginTop: '4px' }}>
          {scope.subheadline}
        </p>
      </div>

      {/* Grid de los 5 Módulos de Contratación */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '14px',
          flex: 1,
          minHeight: 0
        }}
      >
        {scope.items.map((item) => {
          const isSelected = selectedItems.includes(item.id);

          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className="glass-panel"
              style={{
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '14px',
                backgroundColor: isSelected ? 'rgba(224, 90, 43, 0.08)' : 'rgba(19, 22, 28, 0.5)',
                border: isSelected ? '1px solid #E05A2B' : '1px solid rgba(255, 255, 255, 0.06)',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#E05A2B' }}>
                    {item.category}
                  </span>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: isSelected ? '#E05A2B' : 'rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF'
                    }}
                  >
                    {isSelected && <Check size={12} strokeWidth={3} />}
                  </div>
                </div>

                <h3 style={{ fontSize: '0.98rem', color: '#FFFFFF', fontWeight: 700, lineHeight: 1.3 }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.78rem', color: '#94A3B8', marginTop: '8px', lineHeight: 1.45 }}>
                  {item.description}
                </p>
              </div>

              {/* Entregables */}
              <div style={{ marginTop: '14px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '10px' }}>
                <span style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                  Entregables:
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {item.deliverables.map((d, dIdx) => (
                    <li key={dIdx} style={{ fontSize: '0.72rem', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ color: '#E05A2B' }}>•</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Nota Discreta de Alcance y Presupuesto */}
      <div
        style={{
          marginTop: '14px',
          padding: '12px 18px',
          borderRadius: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '0.8rem',
          color: '#94A3B8'
        }}
      >
        <Info size={16} style={{ color: '#F59E0B', flexShrink: 0 }} />
        <span>
          <strong>Nota de transparencia:</strong> {scope.disclaimer}
        </span>
      </div>
    </section>
  );
};
