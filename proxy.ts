/**
 * Proxy entrypoint for Next.js App Router using next-intlayer middleware.
 *
 * Historically this was called `middleware`. Next.js now expects a `proxy`
 * export for middleware-like behavior in the App Router. The exported function
 * from `next-intlayer/middleware` will be invoked for matching requests.
 */
export { intlayerMiddleware as proxy } from "next-intlayer/middleware";

/**
 * Request matcher: ignore API routes, Next internals and static asset files.
 * The regex used mirrors typical middleware matchers for full-app routing.
 */
export const config = {
  matcher: ["/((?!api|_next|.*\..*).*)"],
};