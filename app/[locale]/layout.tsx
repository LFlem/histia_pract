import type { NextLayoutIntlayer } from "next-intlayer";
import { getHTMLTextDir } from "intlayer";
import "../globals.css";

/**
 * Locale-aware layout wrapper used by the App Router.
 * - Sets the `lang` attribute for accessibility and SEO.
 * - Uses `getHTMLTextDir()` to set the `dir` attribute for RTL/LTR support.
 *
 * The layout intentionally remains minimal: global styles are imported here
 * while page-specific structure lives in localized pages.
 */
const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
  const { locale } = await params;
  return (
    <html lang={locale} dir={getHTMLTextDir(locale)}>
      <body>{children}</body>
    </html>
  );
};

export default LocaleLayout;