import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";

const SITE_URL = "https://musewebstudio.com";
const BOOKING_URL = "https://calendar.app.google/M47RAvAPKgH2mDRE7";
const DESCRIPTION =
  "Muse Web Studio is a Hargeisa, Somaliland-based creative web studio offering custom website design, website redesigns, website fixes and branding for small businesses, startups and personal brands worldwide.";
const KEYWORDS =
  "web design Hargeisa, website design Somaliland, web designer Hargeisa, custom website design, small business website design, website redesign, website fixes, logo design, branding, web design studio, Muse Web Studio";
const SAME_AS = [
  "https://www.instagram.com/musewebstudio/",
  "https://www.facebook.com/profile.php?id=61592306638218",
];

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#muse-web-studio`,
  name: "Muse Web Studio",
  url: SITE_URL,
  description: DESCRIPTION,
  image: `${SITE_URL}/og-image.jpg`,
  email: "hello@musewebstudio.com",
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "Hargeisa" },
    { "@type": "Country", name: "Somaliland" },
    { "@type": "Place", name: "Worldwide" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hargeisa",
    addressRegion: "Woqooyi Galbeed",
    addressCountry: "Somaliland",
  },
  sameAs: SAME_AS,
  knowsAbout: [
    "Website design",
    "Website development",
    "Small business websites",
    "Website redesign",
    "Website fixes",
    "Logo design",
    "Brand identity",
    "Startup web design",
    "Conversion-focused web design",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Muse Web Studio Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Website Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Redesign" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Fixes" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Logo & Brand Design" } },
    ],
  },
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Try again
          </button>
          <a href="/" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Muse Web Studio | Custom Website Design in Hargeisa & Worldwide" },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: KEYWORDS },
      { name: "author", content: "Naima — Muse Web Studio" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Muse Web Studio" },
      { property: "og:title", content: "Muse Web Studio | Custom Website Design in Hargeisa & Worldwide" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Muse Web Studio | Custom Website Design in Hargeisa & Worldwide" },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/icons8-letter-m-26.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/icons8-letter-m-26.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Italianno&family=Fraunces:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Work+Sans:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(organizationLd) },
      {
        defer: true,
        "data-domain": "musewebstudio.com",
        src: "https://plausible.io/js/script.tagged-events.outbound-links.js",
      },
      {
        children:
          "window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)};",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book a discovery call with Muse Web Studio"
          style={{
            position: "fixed",
            right: "18px",
            bottom: "18px",
            zIndex: 999,
            borderRadius: "9999px",
            background: "var(--coffee)",
            color: "var(--cream)",
            padding: "12px 18px",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            boxShadow: "0 8px 24px rgba(0,0,0,.14)",
          }}
        >
          Book a discovery call
        </a>
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
