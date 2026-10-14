# CHECKLIST DE CONTROL DE CALIDAD Y DESARROLLO
**Proyecto:** Presentación Comercial Phenix Collision

---

## 1. Auditoría y Planificación
- [x] Carpeta `presentaciones/phenix-collision` inicializada con React + Vite + TS.
- [x] Dependencias instaladas sin vulnerabilidades.
- [x] Inspección de imágenes del espacio de trabajo.
- [x] Estructura semántica de assets configurada en `public/assets/`.
- [x] Archivo `docs/IMAGE_ASSETS_PLAN.md` creado.
- [x] Archivo `docs/ROADMAP.md` creado.
- [x] Archivo `docs/CHECKLIST.md` creado.

## 2. Configuración Central y Tipado
- [x] Archivo tipado `src/config/presentation.ts` con todos los textos, imágenes, datos comerciales y colores editables.
- [x] Estilos CSS modernos con paleta carbón/grafito y acento personalizable.
- [x] Tipografía nítida y proporciones editoriales.

## 3. Experiencia de Navegación (Tablet First)
- [x] Soporte táctil cómodo y botones con target de toque >= 48px.
- [x] Transiciones limpias entre secciones con animación CSS acelerada por hardware.
- [x] Indicador de progreso con 10 pasos clicables.
- [x] Navegación por teclado (Flechas izquierda/derecha, inicio/fin).
- [x] Botón de pantalla completa no intrusivo con detección de soporte del navegador.
- [x] Detección de gestos táctiles swipe izquierda / derecha.

## 4. Secciones Comerciales (10 de 10)
- [x] **01 — Portada Cinematográfica:** Título, subtítulo, llamada a la acción y visual automotriz.
- [x] **02 — Visión de Marca:** Trilogía de valor (Identidad, Presencia, Reconocimiento).
- [x] **03 — Wrap Automotriz:** Vistas multi-ángulo (lateral, 3/4 frontal, 3/4 trasera) + conceptos de diseño A/B con modal de inspección.
- [x] **04 — Rediseño de Logotipo:** Demostración de versiones claras/oscuras, isotipo y aplicación en textura metálica.
- [x] **05 — Gorras Personalizadas:** Mockup realista con selectores de vista (frontal, perfil, detalle de bordado 3D).
- [x] **06 — Camisetas Personalizadas:** Mockup realista con detalles de pecho, espalda y lookbook.
- [x] **07 — Publicidad y Material Promocional:** Tarjetas con foil, flyers de taller, cartelería de taller.
- [x] **08 — Ecosistema Visual:** Mosaico editorial de alta coherencia gráfica entre todos los activos.
- [x] **09 — Alcance de la Propuesta:** Desglose de 5 módulos con notas de personalización y aviso formal de cotización.
- [x] **10 — Cierre Comercial:** Datos de contacto del asesor, enlace directo y validado a WhatsApp con mensaje pre-cargado.

## 5. Rendimiento y Compatibilidad
- [x] Compilación sin errores con `npm run build`.
- [x] Cero errores de TypeScript en modo estricto.
- [x] Fallbacks visuales para imágenes que fallen.
- [x] Optimización de layout para pantallas de 1024x768, 1180x820 y 1366x1024.
- [x] Guía de despliegue en Vercel documentada en `docs/DEPLOYMENT.md`.
