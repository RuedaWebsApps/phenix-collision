import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackLabel?: string;
  containerClassName?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackLabel = "Vista previa conceptual",
  className = "",
  containerClassName = "",
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center ${containerClassName}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#12151B'
      }}
    >
      {!hasError && src ? (
        <img
          src={src}
          alt={alt || "Imagen de presentación"}
          onError={() => setHasError(true)}
          onLoad={() => setIsLoaded(true)}
          className={className}
          style={{
            width: '100%',
            height: '100%',
            objectFit: props.style?.objectFit || 'cover',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.4s ease-in-out',
            ...props.style
          }}
          {...props}
        />
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            textAlign: 'center',
            color: '#64748B',
            background: 'linear-gradient(145deg, #161922, #0E1015)',
            width: '100%',
            height: '100%'
          }}
        >
          <div
            style={{
              padding: '12px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.04)',
              marginBottom: '12px',
              color: '#E05A2B'
            }}
          >
            <ImageOff size={28} />
          </div>
          <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#94A3B8' }}>{alt || fallbackLabel}</p>
          <span style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '4px' }}>
            [Recurso conceptual Phenix Collision]
          </span>
        </div>
      )}
    </div>
  );
};
