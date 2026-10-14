export interface SlideSection {
  id: string;
  number: string;
  title: string;
  subtitle: string;
}

export interface WrapAngle {
  id: string;
  name: string;
  tag: string;
  image: string;
  description: string;
}

export interface WrapConcept {
  id: string;
  title: string;
  tag: string;
  image: string;
  description: string;
}

export interface ScopeItem {
  id: string;
  category: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface PresentationConfig {
  agency: {
    name: string;
    tagline: string;
    website?: string;
  };
  client: {
    name: string;
    legalName?: string;
    industry: string;
    isClientNameConfirmed: boolean;
  };
  advisor: {
    name: string;
    title: string;
    phone?: string;
    whatsappNumber?: string;
    whatsappDefaultMessage?: string;
    email?: string;
  };
  theme: {
    accentColor: string;
    accentGlow: string;
    bgDark: string;
    bgCard: string;
    textPrimary: string;
    textSecondary: string;
  };
  slides: {
    cover: {
      headline: string;
      subheadline: string;
      ctaText: string;
      bgImage: string;
    };
    vision: {
      headline: string;
      subheadline: string;
      pillars: Array<{
        title: string;
        tagline: string;
        description: string;
      }>;
    };
    wrap: {
      headline: string;
      subheadline: string;
      angles: WrapAngle[];
      concepts: WrapConcept[];
    };
    branding: {
      headline: string;
      subheadline: string;
      statusNote: string;
      concepts: Array<{
        title: string;
        background: 'dark' | 'light' | 'metal';
        description: string;
      }>;
    };
    caps: {
      headline: string;
      subheadline: string;
      views: Array<{
        title: string;
        badge: string;
        description: string;
      }>;
    };
    shirts: {
      headline: string;
      subheadline: string;
      views: Array<{
        title: string;
        badge: string;
        description: string;
      }>;
    };
    advertising: {
      headline: string;
      subheadline: string;
      materials: Array<{
        title: string;
        format: string;
        description: string;
      }>;
    };
    ecosystem: {
      headline: string;
      subheadline: string;
    };
    scope: {
      headline: string;
      subheadline: string;
      disclaimer: string;
      items: ScopeItem[];
    };
    closing: {
      headline: string;
      subheadline: string;
      ctaText: string;
    };
  };
}
