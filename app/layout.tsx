/**
 * RootLayout
 * Minimal root layout file required by Next.js App Router. This file intentionally
 * returns the `children` directly — the localized `app/[locale]/layout.tsx`
 * handles HTML-level attributes (lang/dir) and global styles.
 *
 * Keeping this file minimal avoids duplication and lets per-locale layouts
 * manage language-specific behavior.
 *
 * @param props.children - React children rendered by the router
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}