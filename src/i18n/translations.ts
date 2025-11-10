// src/i18n/translations.ts
export type Lang = "pt-BR" | "en-US" | "es";

export const availableLangs: { code: Lang; label: string }[] = [
  { code: "pt-BR", label: "PT" },
  { code: "en-US", label: "EN" },
  { code: "es", label: "ES" },
];

type Messages = Record<string, string>;

export const translations: Record<Lang, Messages> = {
  "pt-BR": {
    // HEADER
    "header.home": "Início",
    "header.benefits": "Benefícios",
    "header.features": "Recursos",
    "header.partners": "Parceiros",
    "header.about": "Sobre",
    "header.contactCta": "Teste grátis",

    // HERO
    "hero.badge": "Escolha nº1 para mais de 5.800 sites",
    "hero.title": "Construa seu site com o eSoft Builder",
    "hero.subtitle":
      "O eSoft leva o Customizer para outro nível para você personalizar cada detalhe do seu site em uma única interface.",
    "hero.cta": "Começar agora",
    "hero.videoLabel": "Ver vídeo",
    "hero.videoSub": "Confiado por centenas de empresas",

    // CTA
    "cta.title": "Acesse uma biblioteca de templates prontos",
    "cta.subtitle":
      "Integre facilmente o eSoft Builder à sua stack e lance páginas em minutos.",
    "cta.button": "Começar, é grátis",
  },

  "en-US": {
    "header.home": "Home",
    "header.benefits": "Benefits",
    "header.features": "Features",
    "header.partners": "Partners",
    "header.about": "About",
    "header.contactCta": "Free trial",

    "hero.badge": "Top choice for 5,800+ websites worldwide",
    "hero.title": "Build your website with eSoft Builder",
    "hero.subtitle":
      "eSoft takes the Customizer to the next level so you can customize every aspect of your website from a single interface.",
    "hero.cta": "Get Started Now",
    "hero.videoLabel": "Watch Video",
    "hero.videoSub": "Trusted by hundreds of companies",

    "cta.title": "Access a library of pre-built templates",
    "cta.subtitle":
      "Seamlessly integrate eSoft Builder into your stack and launch pages in minutes.",
    "cta.button": "Get started, it’s free",
  },

  es: {
    "header.home": "Inicio",
    "header.benefits": "Beneficios",
    "header.features": "Recursos",
    "header.partners": "Asociados",
    "header.about": "Sobre",
    "header.contactCta": "Prueba gratis",

    "hero.badge": "La mejor opción para más de 5.800 sitios",
    "hero.title": "Crea tu sitio con eSoft Builder",
    "hero.subtitle":
      "eSoft lleva el Customizer al siguiente nivel para que personalices cada detalle de tu sitio desde una sola interfaz.",
    "hero.cta": "Comenzar ahora",
    "hero.videoLabel": "Ver video",
    "hero.videoSub": "Confiado por cientos de empresas",

    "cta.title": "Accede a una biblioteca de plantillas",
    "cta.subtitle":
      "Integra fácilmente eSoft Builder en tu stack y lanza páginas en minutos.",
    "cta.button": "Comienza, es gratis",
  },
};
