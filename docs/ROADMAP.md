# ROADMAP — PRESENTACIÓN COMERCIAL PREMIUM INTERACTIVA
**Cliente:** Phenix Collision  
**Stack:** React 19 + Vite + TypeScript + Lucide React + CSS Modular

---

## 📌 FASE 1 — Auditoría, Planificación y Arquitectura (Completada)
- [x] Inspección del entorno de archivos y assets disponibles.
- [x] Clonación/creación del proyecto en `presentaciones/phenix-collision`.
- [x] Instalación de dependencias básicas (Lucide Icons, Vite, TS).
- [x] Creación de estructura de directorios (`public/assets/`, `docs/`, `src/`).
- [x] Migración y organización de assets reales en carpetas semánticas (`vehicle/`, `branding/`, `caps/`, `shirts/`, `advertising/`, `references/`).
- [x] Elaboración de `docs/IMAGE_ASSETS_PLAN.md` con prompts técnicos para activos faltantes.
- [x] Elaboración de `docs/ROADMAP.md` y `docs/CHECKLIST.md`.

---

## 📌 FASE 2 — Construcción del Motor y las 10 Secciones Comerciales
- [x] Configuración centralizada tipada en `src/config/presentation.ts`.
- [x] Sistema de estilos globales premium (fondo carbón `#0B0C0E`, acento ámbar/cobre `#E57A3C`, tipografía Inter/Plus Jakarta Sans, variables CSS).
- [x] Controles de presentación optimizados para Tablet:
  - Navegación Anterior / Siguiente flotante y táctil cómoda.
  - Indicador de progreso de 10 secciones interactivo.
  - Modo pantalla completa con un clic (sin forzar navegador).
  - Soporte de teclado (Flechas Izquierda / Derecha / Espacio / Esc).
  - Soporte de gestos táctiles (Swipe).
- [x] Implementación de las 10 Secciones en el orden estricto del brief:
  1. **Sección 01 — Portada Cinematográfica:** Título, subtítulo, llamada a la acción y visual automotriz.
  2. **Sección 02 — Visión de Marca:** Trilogía de valor (Identidad, Presencia, Reconocimiento).
  3. **Sección 03 — Wrap Automotriz:** Galería interactiva (Frontal 3/4, Lateral, Trasera 3/4) + selector de conceptos de diseño A/B con visor ampliado.
  4. **Sección 04 — Rediseño de Logotipo:** Evolución conceptual, versiones claro/oscuro, aplicación sobre material metálico mate.
  5. **Sección 05 — Gorras Personalizadas:** Vista frontal, lateral y detalle de bordado 3D, selector de color y notas técnicas de prototipo.
  6. **Sección 06 — Camisetas Personalizadas:** Vista frontal, dorsal y detalle de estampado, composición lookbook.
  7. **Sección 07 — Publicidad y Material Promocional:** Tarjetas premium con foil, flyers de taller, gráficos y rótulos.
  8. **Sección 08 — Ecosistema Visual:** Composición editorial integral que une vehículo, merch y papelería.
  9. **Sección 09 — Alcance de la Propuesta:** Resumen modular de los 5 servicios con selector de requerimientos y disclaimer de cotización formal.
  10. **Sección 10 — Cierre Comercial:** Datos de asesor, llamada de acción directa a WhatsApp con mensaje preconfigurado y botón de reinicio.

---

## 📌 FASE 3 — Refinamiento Visual, Rendimiento y Modo Tablet
- [x] Pruebas en resoluciones tablet: 1024×768, 1180×820, 1366×1024.
- [x] Fallbacks automáticos de imágenes si un asset no carga.
- [x] Comportamiento accesible (ARIA tags, contraste cromático WCAG AA, `prefers-reduced-motion`).
- [x] Optimización de layout y prevención de scrolls verticales accidentales durante la presentación presencial.

---

## 📌 FASE 4 — Validación, Build y Guía de Despliegue en Vercel
- [x] Verificación de compilación limpia con `npm run build` y comprobación de TypeScript (`tsc`).
- [x] Documentación exhaustiva en `docs/DEPLOYMENT.md`.
- [x] Verificación final y entrega de reporte comercial.
