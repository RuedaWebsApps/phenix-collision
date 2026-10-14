export interface RealAssetsManifest {
  heroCar: string;
  webDesign: string;
  wrap1: string;
  wrap2: string;
  poloFront: string;
  poloBack: string;
  cap: string;
  card1: string;
  card2: string;
  videoShowcase: string;
  videoRepair: string;
}

export interface ClientServiceCategory {
  number: string;
  category: string;
  tagline: string;
  ticketType: 'Ticket Alto' | 'Ticket Alto / Estacional' | 'Integral' | 'Entusiasta';
  services: string[];
  salesFocus: string;
}

export interface StudioPresentationConfig {
  studio: {
    name: string;
    label: string;
  };
  client: {
    name: string;
    industry: string;
  };
  advisor: {
    name: string;
    whatsappNumber: string;
    whatsappMessage: string;
  };
  assets: RealAssetsManifest;
  serviceCategories: ClientServiceCategory[];
  scenes: {
    opening: {
      tag: string;
      headline: string;
      subheadline: string;
      cta: string;
    };
    vision: {
      tag: string;
      headline: string;
      statement: string;
      points: Array<{
        title: string;
        description: string;
      }>;
    };
    web: {
      tag: string;
      headline: string;
      subheadline: string;
      bullets: string[];
    };
    wrap: {
      tag: string;
      headline: string;
      subheadline: string;
      bullets: string[];
    };
    app: {
      tag: string;
      headline: string;
      subheadline: string;
      bullets: string[];
    };
    merchandise: {
      tag: string;
      headline: string;
      subheadline: string;
      items: Array<{
        id: string;
        title: string;
        subtitle: string;
        image: string;
      }>;
    };
    campaigns: {
      tag: string;
      headline: string;
      subheadline: string;
      bullets: string[];
    };
    ecosystem: {
      tag: string;
      headline: string;
      subheadline: string;
    };
    closing: {
      tag: string;
      headline: string;
      subheadline: string;
      ctaText: string;
    };
  };
}

export const studioPresentationConfig: StudioPresentationConfig = {
  studio: {
    name: "RUEDA WEBS",
    label: "Digital Experience & Creative Direction Studio"
  },
  client: {
    name: "Phenix Collision",
    industry: "Auto Body, Collision Repair & Custom Craftsmanship"
  },
  advisor: {
    name: "Dirección Creativa",
    whatsappNumber: "15125550199",
    whatsappMessage: "Hola, estuve viendo la presentación comercial interactiva para Phenix Collision y me gustaría coordinar los siguientes pasos de la propuesta."
  },
  assets: {
    heroCar: "/assets/phenix/imagen-carro.jpg",
    webDesign: "/assets/phenix/imegen-web.jpg",
    wrap1: "/assets/phenix/wrap-1.jpg",
    wrap2: "/assets/phenix/wrap-2.jpg",
    poloFront: "/assets/phenix/polo-1.jpg",
    poloBack: "/assets/phenix/polo-2.jpg",
    cap: "/assets/phenix/mockup-gorra.jpg",
    card1: "/assets/phenix/card-1.jpeg",
    card2: "/assets/phenix/card-2.jpeg",
    videoShowcase: "/assets/phenix/video-1.mp4",
    videoRepair: "/assets/phenix/repari-car.mp4"
  },
  serviceCategories: [
    {
      number: "01",
      category: "Collision & Bodywork",
      tagline: "Restauración a Estado de Fábrica y Manejo de Seguros",
      ticketType: "Ticket Alto",
      services: [
        "Collision Repair Completo",
        "Structural Bodywork de Chasis",
        "Lifetime Warranty Paint (Pintura con Garantía de por Vida)",
        "Piezas OEM y Certificadas de Calidad"
      ],
      salesFocus: "Enfoque de Venta: Garantía de por vida, negociación directa con aseguradoras y restablecimiento exacto a los estándares del fabricante."
    },
    {
      number: "02",
      category: "Texas Hail Damage",
      tagline: "Reparación Especializada por Granizo y Tormentas",
      ticketType: "Ticket Alto / Estacional",
      services: [
        "Paintless Dent Repair (PDR) sin dañar la pintura original",
        "Storm & Glass Repair (Parabrisas y Cristales)",
        "Calibración de Sensores y ADAS post-impacto"
      ],
      salesFocus: "Enfoque de Venta: Altísima demanda en Austin en temporada de tormentas. Proceso rápido de reclamación y reparación técnica de granizo sin perder la pintura de fábrica."
    },
    {
      number: "03",
      category: "Complete Mechanical & Diagnostics",
      tagline: "Taller Integral: Reparamos la Estética y la Mecánica",
      ticketType: "Integral",
      services: [
        "Frenos y Sistemas de Seguridad (Brakes)",
        "Suspensión, Alineación y Dirección",
        "Reparación de Aire Acondicionado (A/C)",
        "Diagnóstico Computarizado & Eléctrico",
        "Mantenimiento Preventivo Integral"
      ],
      salesFocus: "Enfoque de Venta: Solución completa bajo un solo techo. El cliente no necesita llevar su auto a dos talleres distintos tras un choque."
    },
    {
      number: "04",
      category: "Custom Upgrades & Detailing",
      tagline: "Para el Cliente Entusiasta que Busca Personalizar",
      ticketType: "Entusiasta",
      services: [
        "Modificaciones & Upgrades (Rines / Rims)",
        "Fog Lights & Iluminación Especializada",
        "Body Kits y Acabados Aerodinámicos",
        "Full Detailing Profesional & Car Wash de Salón"
      ],
      salesFocus: "Enfoque de Venta: Incremento de ticket promedio para apasionados del motor que quieren que su auto luzca impecable y único tras salir del taller."
    }
  ],
  scenes: {
    opening: {
      tag: "Propuesta Integral · 2026",
      headline: "La evolución visual de Phenix Collision",
      subheadline: "Un salto de nivel estratégico: presencia digital de vanguardia, rotulación automotriz de impacto y una marca física unificada.",
      cta: "Comenzar recorrido"
    },
    vision: {
      tag: "01 · La Visión",
      headline: "Una marca coherente en cada superficie",
      statement: "La calidad que entregas en el taller ahora se percibe con la misma maestría en la pantalla, en la calle y en cada detalle de tu equipo.",
      points: [
        {
          title: "Claridad Digital",
          description: "Un sitio web moderno diseñado para transmitir confianza inmediata y convertir visitas en clientes asegurados."
        },
        {
          title: "Presencia Urbana",
          description: "Rotulación comercial precisa que transforma el vehículo de taller en la mejor carta de presentación sobre el asfalto."
        },
        {
          title: "Orgullo de Marca",
          description: "Uniformes, polos y gorras diseñados para proyectar el profesionalismo técnico que tu equipo demuestra cada día."
        }
      ]
    },
    web: {
      tag: "02 · Experiencia Digital",
      headline: "Plataforma Web Diseñada para Generar Autoridad",
      subheadline: "Estructura limpia, jerarquía clara y una experiencia visual contemporánea pensada para clientes exigentes y compañías de seguros.",
      bullets: [
        "Composición editorial sobria con enfoque directo en servicios clave.",
        "Optimización de velocidad y contacto directo a un toque.",
        "Diseño que legitima la precisión y la tecnología de reparación del taller."
      ]
    },
    wrap: {
      tag: "03 · Wrap Automotriz",
      headline: "Identidad en Movimiento de Alto Impacto",
      subheadline: "Aplicación visual plana real diseñada sobre las líneas originales del vehículo. Visibilidad inmediata a velocidad de tráfico.",
      bullets: [
        "Líneas de tensión geométrica que acompañan la aerodinámica de la carrocería.",
        "Contraste tonal equilibrado para lectura limpia de marca y servicios.",
        "Preparación de archivos en escala 1:1 listos para impresión y corte."
      ]
    },
    app: {
      tag: "04 · Interacción Dinámica",
      headline: "La Marca en Movimiento: Precisión y Fluidez",
      subheadline: "El lenguaje de marca cobra vida a través del movimiento coordinado y la experiencia visual interactiva.",
      bullets: [
        "Microinteracciones con ritmo visual editorial.",
        "Transiciones que guían la atención hacia los puntos de contacto.",
        "Coherencia estética en entornos digitales y pantallas táctiles."
      ]
    },
    merchandise: {
      tag: "05 · La Marca en el Producto",
      headline: "Indumentaria y Prendas con Identidad Propia",
      subheadline: "Fotografías reales del producto final: gorras estructuradas y polos de algodón premium con diseño en pecho y espalda.",
      items: [
        {
          id: "polo-front",
          title: "Polo Corporativo · Frontal",
          subtitle: "Isotipo limpio en pecho izquierdo",
          image: "/assets/phenix/polo-1.jpg"
        },
        {
          id: "polo-back",
          title: "Polo Corporativo · Espalda",
          subtitle: "Diseño gráfico dorsal de gran formato",
          image: "/assets/phenix/polo-2.jpg"
        },
        {
          id: "cap",
          title: "Gorra Snapback Estructurada",
          subtitle: "Aplicación frontal en relieve de alta densidad",
          image: "/assets/phenix/mockup-gorra.jpg"
        }
      ]
    },
    campaigns: {
      tag: "06 · Publicidad y Campañas",
      headline: "Papelería de Alto Nivel y Piezas Comerciales",
      subheadline: "Diseños planos reales de tarjetas comerciales con acabados de contraste y equilibrio tipográfico.",
      bullets: [
        "Tarjetas corporativas diseñadas para dejar una primera impresión impecable.",
        "Uso selectivo del color de acento y tipografía técnica de fácil lectura.",
        "Estandarización de información comercial y canales de contacto."
      ]
    },
    ecosystem: {
      tag: "07 · Ecosistema Coherente",
      headline: "Todo conecta. Todo suma.",
      subheadline: "Cuando la web, el vehículo, las prendas y la papelería comparten la misma dirección de arte, el valor percibido del negocio se multiplica."
    },
    closing: {
      tag: "08 · Cierre Comercial",
      headline: "Es momento de dar el salto.",
      subheadline: "Hagamos realidad esta propuesta. Estamos listos para iniciar la producción y el despliegue de Phenix Collision.",
      ctaText: "Coordinar siguientes pasos vía WhatsApp"
    }
  }
};
