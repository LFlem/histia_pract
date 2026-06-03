import { t, type Dictionary } from "intlayer";

const comingSoonContent = {
  key: "coming-soon",
  content: {
    badge: t({
      fr: "PAGE EN CONSTRUCTION",
      en: "PAGE UNDER CONSTRUCTION",
    }),
    title: t({
      fr: "Cette page arrive bientôt",
      en: "This page is coming soon",
    }),
    description: t({
      fr: "Nous sommes encore en version bêta, Stolos n'est pas encore complet, notre équipe travaille d'arrache pied pour vous apporter cette page au plus vite !",
      en: "We are still in beta, Stolos is not yet complete, our team is working hard to bring you this page as soon as possible!",
    }),
    link: t({
      fr: "Nos nouveautés ici",
      en: "Our latest news here",
    }),
    mascotAlt: t({
      fr: "Mascotte en construction",
      en: "Construction mascot",
    }),
  },
} satisfies Dictionary;

export default comingSoonContent;