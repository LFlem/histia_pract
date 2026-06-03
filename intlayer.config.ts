import { Locales, type IntlayerConfig } from "intlayer";

/**
 * Intlayer configuration for locale routing.
 * - `locales` lists supported locales in the app.
 * - `defaultLocale` determines the fallback when none is provided.
 */
const config: IntlayerConfig = {
    internationalization: {
        locales: [Locales.ENGLISH, Locales.FRENCH],
        defaultLocale: Locales.FRENCH,
    },
};

export default config;