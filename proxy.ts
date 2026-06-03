export { intlayerMiddleware as proxy } from "next-intlayer/middleware";

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};