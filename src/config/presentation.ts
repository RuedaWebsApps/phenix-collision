import type { PresentationConfig } from '../types/presentation';

export const presentationConfig: PresentationConfig = {
  agency: {
    name: "RUEDA WEBS & CREATIVE STUDIO",
    tagline: "Estrategia Visual, Wrap Automotriz y Branding de Alto Impacto",
    website: "https://ruedawebs.com"
  },
  client: {
    name: "Phenix Collision",
    legalName: "Phenix Collision Center",
    industry: "Auto Body, Collision Repair & Custom Finishes",
    isClientNameConfirmed: true
  },
  advisor: {
    name: "Asesor Comercial Creativo",
    title: "Especialista en Identidad Visual y Rotulación Comercial",
    phone: "+1 (512) 555-0199",
    whatsappNumber: "15125550199", // Editable con número real del asesor
    whatsappDefaultMessage: "Hola, estuve revisando la propuesta de imagen y wrap automotriz para Phenix Collision y me gustaría coordinar los siguientes pasos.",
    email: "contacto@ruedawebs.com"
  },
  theme: {
    accentColor: "#E05A2B", // Naranja Fénix / Cobre Automotriz de alto contraste
    accentGlow: "rgba(224, 90, 43, 0.25)",
    bgDark: "#0B0C0E",
    bgCard: "#131519",
    textPrimary: "#F5F5F7",
    textSecondary: "#9CA3AF"
  },
  slides: {
    cover: {
      headline: "Una nueva imagen para tu marca",
      subheadline: "Diseño, personalización y publicidad pensados para destacar",
      ctaText: "Descubrir la propuesta",
      bgImage: "/assets/vehicle/hero-truck.jpg"
    },
    vision: {
      headline: "Cada detalle comunica quién eres",
      subheadline: "Construimos una imagen sólida y coherente: desde tu vehículo de trabajo hasta tus productos promocionales y publicidad.",
      pillars: [
        {
          title: "Identidad",
          tagline: "Diferenciación inmediata",
          description: "Un lenguaje visual moderno que transmite maestría técnica, seriedad y confianza desde el primer segundo."
        },
        {
          title: "Presencia",
          tagline: "Visibilidad en movimiento",
          description: "Tu vehículo se convierte en un anuncio rodante premium que genera miles de impactos visuales diarios en tu ciudad."
        },
        {
          title: "Reconocimiento",
          tagline: "Consistencia multicanal",
          description: "Uniformidad impecable en uniformes, gorras, tarjetas y publicidad para consolidar el prestigio de tu taller."
        }
      ]
    },
    wrap: {
      headline: "Tu vehículo. Tu identidad. Tu mejor carta de presentación",
      subheadline: "Transformamos tu vehículo en la herramienta publicitaria más rentable de tu negocio con diseño y aplicación de wrap de nivel concurso.",
      angles: [
        {
          id: "side",
          name: "Vista Lateral Completa",
          tag: "Arquitectura Gráfica",
          image: "/assets/vehicle/truck-wrap-side.png",
          description: "Distribución armónica de logotipo, teléfonos y servicios clave optimizados para lectura a velocidad de tráfico."
        },
        {
          id: "front",
          name: "Perspectiva 3/4 Frontal",
          tag: "Impacto Visual",
          image: "/assets/vehicle/truck-wrap-front34.png",
          description: "Alineación de capó y aletas frontales para generar una postura agresiva y memorable de la marca."
        },
        {
          id: "rear",
          name: "Perspectiva 3/4 Trasera",
          tag: "Conversión Directa",
          image: "/assets/vehicle/truck-wrap-rear34.png",
          description: "Enfoque en la compuerta trasera: punto de mayor retención visual para conductores en semáforos y atascos."
        }
      ],
      concepts: [
        {
          id: "concept-a",
          title: "Concepto A — Dinámico Deportivo",
          tag: "Líneas de Alto Contraste",
          image: "/assets/vehicle/car-wrap-concept-a.png",
          description: "Geometría afilada con acentos naranja fuego y textura carbón que proyecta agilidad y precisión."
        },
        {
          id: "concept-b",
          title: "Concepto B — Minimalismo Ejecutivo",
          tag: "Elegancia Sólida",
          image: "/assets/vehicle/car-wrap-concept-b.png",
          description: "Superficies limpias con énfasis en tipografía sobria y acabados satinados de alta gama."
        }
      ]
    },
    branding: {
      headline: "Una identidad que representa el nivel de tu negocio",
      subheadline: "Evolucionamos la marca visual para reflejar calidad artesanal, tecnología de acabado y confianza técnica.",
      statusNote: "Propuesta conceptual en fase de exploración y ajuste con el cliente.",
      concepts: [
        {
          title: "Versión Principal — Carbón & Fuego",
          background: "dark",
          description: "Monograma estilizado de fénix integrado con la letra 'P' automotriz sobre fondo oscuro de máxima elegancia."
        },
        {
          title: "Versión Positiva — Fondo Claro",
          background: "light",
          description: "Adaptación monocromática optimizada para papelería técnica, facturas y rótulos sobre fondos claros."
        },
        {
          title: "Aplicación Realista — Metal Cepillado",
          background: "metal",
          description: "Simulación de placa exterior cortada por láser para la fachada del taller o recepción de clientes."
        }
      ]
    },
    caps: {
      headline: "Tu marca, también en los detalles",
      subheadline: "Prendas de cabeza diseñadas con proporciones precisas que tu equipo y tus clientes querrán lucir todos los días.",
      views: [
        {
          title: "Gorra Snapback Premium — Vista Frontal",
          badge: "Bordado 3D de Alta Densidad",
          description: "Isotipo en relieve con hilo de alto brillo sobre corona estructurada en tejido twill negro carbón."
        },
        {
          title: "Perfil Lateral & Ajuste",
          badge: "Detalle Discreto",
          description: "Detalle de costura reforzada con etiqueta tejida en lateral para un acabado de boutique."
        },
        {
          title: "Variante Trucker Mesh Transpirable",
          badge: "Comodidad para Taller",
          description: "Malla trasera transpirable pensada para el trabajo activo y el clima cálido, manteniendo la estructura."
        }
      ]
    },
    shirts: {
      headline: "Diseñadas para representar tu marca",
      subheadline: "Uniformes y camisetas promocionales con presencia corporativa de nivel internacional.",
      views: [
        {
          title: "Camiseta Oficial de Equipo — Frontal",
          badge: "Pecho Discreto",
          description: "Emblema limpio en pecho izquierdo con tipografía corporativa y balance milimétrico."
        },
        {
          title: "Composición de Espalda — Gran Formato",
          badge: "Declaración de Marca",
          description: "Gráfico dorsal completo con tipografía impactante 'Phenix Collision - Craftsmanship & Precision'."
        },
        {
          title: "Polo Técnico para Asesores",
          badge: "Presentación Comercial",
          description: "Tejido piqué de tacto suave para atención en mostrador y reuniones comerciales con aseguradoras."
        }
      ]
    },
    advertising: {
      headline: "Una imagen consistente en cada punto de contacto",
      subheadline: "Materiales impresos y digitales que cierran el círculo de ventas y transmiten legitimidad absoluta.",
      materials: [
        {
          title: "Tarjetas de Presentación Black Soft-Touch",
          format: "3.5\" x 2\" con foil cobre",
          description: "Acabado aterciopelado mate con estampado metálico en bordes y relieve del isotipo."
        },
        {
          title: "Flyers Informativos de Servicios",
          format: "Díptico / Media Carta",
          description: "Guía visual rápida de procesos de colisión, enderezado y garantía para entregar a asegurados."
        },
        {
          title: "Kit Digital para Redes Sociales & Google Maps",
          format: "Templates 1080x1080 y Banners",
          description: "Gráficos unificados para historias de antes/después y portadas oficiales de negocio."
        },
        {
          title: "Rótulos y Banners de Fachada",
          format: "Gran Formato Exterior",
          description: "Señalética direccional de taller y banner perimetral para máxima visibilidad desde la vía pública."
        }
      ]
    },
    ecosystem: {
      headline: "El ecosistema visual completo de Phenix Collision",
      subheadline: "Cuando el vehículo, el merchandising y la publicidad hablan el mismo idioma visual, el valor percibido de tu taller se multiplica."
    },
    scope: {
      headline: "Construyamos una propuesta a tu medida",
      subheadline: "Selecciona las áreas clave para iniciar la transformación visual de tu negocio.",
      disclaimer: "Alcance y presupuesto por definir según los requerimientos y especificaciones del proyecto.",
      items: [
        {
          id: "scope-wrap",
          category: "01. Wrap Automotriz",
          title: "Rotulación y Wrap Comercial Completo",
          description: "Diseño personalizado sobre plano a escala, preparación de archivos de alta resolución y supervisión de instalación.",
          deliverables: ["Renders 360° del vehículo", "Archivos de producción listos para impresión", "Guía de aplicación de vinilos"]
        },
        {
          id: "scope-brand",
          category: "02. Rediseño de Logotipo",
          title: "Identidad Visual y Manual Esencial",
          description: "Renovación integral del símbolo, tipografía corporativa, paleta de colores y versiones para todo tipo de fondo.",
          deliverables: ["Archivos vectoriales (AI, SVG, PDF)", "Versiones claro/oscuro/monocromo", "Mini manual de uso de marca"]
        },
        {
          id: "scope-caps",
          category: "03. Gorras Personalizadas",
          title: "Línea de Gorras Premium para Personal y Clientes",
          description: "Diseño técnico de bordados, especificación de hilos y mockups de producción para diferentes modelos de gorra.",
          deliverables: ["Ficha técnica de bordado", "Archivos vectoriales para matriz de bordado", "Prototipos digitales fotorrealistas"]
        },
        {
          id: "scope-shirts",
          category: "04. Camisetas y Uniformes",
          title: "Colección Textil de Trabajo y Promoción",
          description: "Propuestas de uniformes técnicos para taller y camisetas publicitarias para eventos y clientes frecuentes.",
          deliverables: ["Diseño de pecho, espalda y mangas", "Archivos de separación de color / DTF", "Guía de colores de prendas"]
        },
        {
          id: "scope-ads",
          category: "05. Publicidad y Piezas Gráficas",
          title: "Kit Comercial de Punto de Venta y Redes",
          description: "Diseño de materiales impresos clave para recepción y plantillas digitales para presencia online continua.",
          deliverables: ["Diseño de tarjetas de presentación", "Flyers de servicios del taller", "Plantillas editables para redes"]
        }
      ]
    },
    closing: {
      headline: "Es momento de darle una nueva imagen a tu marca",
      subheadline: "Cuéntanos qué quieres transmitir y construiremos una propuesta visual alineada con el crecimiento de Phenix Collision.",
      ctaText: "Coordinar siguientes pasos vía WhatsApp"
    }
  }
};
