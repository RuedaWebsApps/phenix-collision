import React, { useState, useEffect, useCallback } from 'react';
import { PresentationNav } from './components/PresentationNav';
import {
  Scene01Opening,
  Scene02Vision,
  Scene03Web,
  Scene03Wrap,
  Scene04Motion,
  Scene05Merchandise,
  Scene06Campaigns,
  Scene07Ecosystem,
  Scene08Closing
} from './components/StudioScenes';
import { useSwipe } from './hooks/useSwipe';
import './styles/global.css';

const SCENE_TITLES = [
  "Apertura",
  "La Visión",
  "Experiencia Web",
  "Wrap Automotriz",
  "Dinámica Visual",
  "La Marca en el Producto",
  "Publicidad y Campañas",
  "Matriz de Servicios",
  "Cierre Comercial"
];

export const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const totalSlides = SCENE_TITLES.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  }, [totalSlides]);

  // Gestos Swipe para Tablet
  useSwipe({
    onSwipeLeft: nextSlide,
    onSwipeRight: prevSlide
  });

  // Atajos de Teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        prevSlide();
      } else if (e.key === 'Home') {
        goToSlide(0);
      } else if (e.key === 'End') {
        goToSlide(totalSlides - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, totalSlides]);

  return (
    <main
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#090A0D'
      }}
    >
      {/* Escena Activa */}
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        {currentSlide === 0 && <Scene01Opening onNext={nextSlide} />}
        {currentSlide === 1 && <Scene02Vision />}
        {currentSlide === 2 && <Scene03Web />}
        {currentSlide === 3 && <Scene03Wrap />}
        {currentSlide === 4 && <Scene04Motion />}
        {currentSlide === 5 && <Scene05Merchandise />}
        {currentSlide === 6 && <Scene06Campaigns />}
        {currentSlide === 7 && <Scene07Ecosystem />}
        {currentSlide === 8 && <Scene08Closing onNext={nextSlide} onGoTo={goToSlide} />}
      </div>

      {/* Navegación para Tablet */}
      <PresentationNav
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNext={nextSlide}
        onPrev={prevSlide}
        onGoTo={goToSlide}
        slideTitles={SCENE_TITLES}
      />
    </main>
  );
};

export default App;
