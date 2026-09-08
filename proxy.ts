import { clerkMiddleware } from "@clerk/nextjs/server";

function isPublicRoute(pathname: string) {
  return (
    pathname.startsWith("/sign-in") ||
    pathname.startsWith("/sign-up") ||
    pathname.startsWith("/__clerk")
  );
}

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req.nextUrl.pathname)) return;

  // Redirect happens here for every non-public route when signed out.
  // Middleware redirects require an absolute URL.
  await auth.protect({
    unauthenticatedUrl: new URL("/sign-up", req.url).toString(),
  });
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
    "/__clerk/:path*",
  ],
};
