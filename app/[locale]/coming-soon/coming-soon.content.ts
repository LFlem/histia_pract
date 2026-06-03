import { t, type Dictionary } from "intlayer";

/**
 * Localized content dictionary for the Coming Soon page.
 * Using Intlayer's `t()` helper returns values that are compatible with the
 * runtime localization system. Keep keys explicit so the UI can reference them.
 */
const comingSoonContent = {
  key: "coming-soon",
  content: {
    // Short uppercase badge label shown above the title
    badge: t({
      fr: "PAGE EN CONSTRUCTION",
      en: "PAGE UNDER CONSTRUCTION",
    }),
    // Page main title
    title: t({
      fr: "Cette page arrive bientôt",
      en: "This page is coming soon",
    }),
    // Longer descriptive paragraph used in the body copy
    description: t({
      fr: "Nous sommes encore en version bêta, Stolos n'est pas encore complet, notre équipe travaille d'arrache pied pour vous apporter cette page au plus vite !",
      en: "We are still in beta, Stolos is not yet complete, our team is working hard to bring you this page as soon as possible!",
    }),
    // Small link label displayed as text in the demo
    link: t({
      fr: "Nos nouveautés ici",
      en: "Our latest news here",
    }),
    // Alt string for mascot images — localized
    mascotAlt: t({
      fr: "Mascotte en construction",
      en: "Construction mascot",
    }),
  },
} satisfies Dictionary;

export default comingSoonContent;