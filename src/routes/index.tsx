import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Instagram,
  Facebook,
  Mail,
  Quote,
  Play,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

import { caseStudies } from "@/lib/work";

const QUESTIONNAIRE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeRcec-Gcn2ZdkDfO6dTEtdjNN54-_ePwjadFpEeZJGQE8Fvw/viewform?usp=publish-editor";

const services = [
  {
    title: "Website Design & Development",
    body: "Custom-built sites that read like a magazine and run like a machine, designed and coded end-to-end.",
  },
  {
    title: "Website Refresh",
    body: "For brands whose site no longer matches how far they've come. New life, same story, sharper.",
  },
  {
    title: "Logo & Brand Design",
    body: "Wordmarks, palettes, and identity systems with a warm, editorial, considered feel.",
  },
];

const steps = [
  { n: "01", title: "Tell Us Your Vision", body: "Share your idea, your brand, and where you'd like to go. Every detail matters." },
  { n: "02", title: "Let's Talk", body: "A conversation to align on tone, scope, and the feeling your project should carry." },
  { n: "03", title: "We Create", body: "Design and build, hand in hand. Considered, editorial, and made just for you." },
  { n: "04", title: "You Launch", body: "We hand over the finished piece and support you as it steps into the world." },
];

const testimonials = [
  {
    name: "Tobias",
    role: "Tech Support For Everyone",
    quote:
      "Amazing all around. Very quick to respond to requests and coordinate with me, very accurate interpretation of my wants, clearly a result of thorough planning. Very receptive to my major and minor changes, and delivered an amazing final product. Would work with again!",
    rating: 5,
  },
  {
    name: "Keith",
    role: "Freelance client",
    quote:
      "Truly amazing work! Built me a website straight out of my vision and had it running within 2 days. Definitely would recommend.",
    rating: 5,
  },
  {
    name: "Mona",
    role: "Former client",
    quote:
      "Working with Muse was such a great experience. They really took the time to understand what I wanted and brought my vision to life better than I imagined. The website looks amazing, feels professional, and makes my business look so much more put together. I couldn't be happier with how it turned out.",
    rating: 5,
  },
];

const faqItems = [
  {
    question: "How much does a custom small business website cost at Muse Web Studio?",
    answer: "We design custom websites tailored to your budget and needs. Pricing depends on scope, complexity, and features. Rather than one-size-fits-all pricing, we discuss your vision first to create a transparent quote. Fill out our questionnaire to get started with a consultation."
  },
  {
    question: "Why choose a custom website over a generic template?",
    answer: "Generic templates often feel generic. A custom website reflects your brand's unique story, values, and personality. We build sites that are designed specifically for you—from strategy and design to development. Your website stands out, converts better, and truly represents your business without compromising on quality or affordability."
  },
  {
    question: "Does Muse Web Studio offer affordable website redesigns?",
    answer: "Yes! We offer website refresh services designed to modernize your existing site without breaking the bank. If your current site no longer matches how far your brand has come, we can give it new life while preserving what works. Affordable redesigns are part of our core service offerings."
  },
];

const featured = caseStudies[0];

const geoOptimizedSummary = "Muse Web Studio designs modern, custom websites for small businesses and personal brands, bridging the gap between quality and affordability without using generic templates.";

// Enhanced Service schema for better search engine visibility
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Muse Web Studio",
  url: "https://musewebstudio.com",
  image: "https://musewebstudio.com/og-image.jpg",
  description: geoOptimizedSummary,
  areaServed: {
    "@type": "Country",
    name: "Worldwide"
  },
  serviceType: [
    "Custom Website Design",
    "Website Redesign",
    "Small Business Web Development",
    "Logo & Brand Design"
  ],
  priceRange: "$$",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "musewebsitestudio@gmail.com",
    url: "https://musewebstudio.com"
  },
  sameAs: [
    "https://www.instagram.com/musewebstudio/",
    "https://www.facebook.com/profile.php?id=61592306638218"
  ]
};

// FAQ Schema for conversational AI search optimization
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(item => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "#muse",
      name: "Muse Web Studio",
      description: geoOptimizedSummary,
      url: "https://musewebstudio.com",
      areaServed: "Worldwide",
      sameAs: ["https://www.instagram.com/musewebstudio/", "https://www.facebook.com/profile.php?id=61592306638218"],
      founder: { "@type": "Person", name: "Muse Studio Founder" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: testimonials.length.toString(),
      },
      review: testimonials.map((t) => ({
        "@type": "Review",
        author: { "@type": "Person", name: t.name },
        reviewRating: { "@type": "Rating", ratingValue: t.rating.toString(), bestRating: "5" },
        reviewBody: t.quote,
      })),
    },
    serviceSchema,
    faqSchema,
  ],
};

function track(event: string) {
  if (typeof window !== "undefined" && typeof (window as unknown as { plausible?: (e: string) => void }).plausible === "function") {
    (window as unknown as { plausible: (e: string) => void }).plausible(event);
  }
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muse Web Studio — Custom Website Design for Small Businesses" },
      {
        name: "description",
        content: geoOptimizedSummary,
      },
      { property: "og:title", content: "Muse Web Studio — Custom Website Design for Small Businesses" },
      {
        property: "og:description",
        content: geoOptimizedSummary,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://musewebstudio.com" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "google-site-verification", content: "REPLACE_WITH_GOOGLE_TOKEN" },
      { name: "msvalidate.01", content: "REPLACE_WITH_BING_TOKEN" },
    ],
    links: [{ rel: "canonical", href: "https://musewebstudio.com" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
  component: Index,
});

function FAQAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className="border border-[color:var(--maroon)]/20 rounded-lg overflow-hidden transition-all"
        >
          <button
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 hover:bg-beige transition-colors"
          >
            <span className="font-serif text-base md:text-lg text-chocolate font-semibold leading-snug pr-2">
              {item.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-maroon flex-shrink-0 mt-1 transition-transform duration-300 ${
                expandedIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>

          {expandedIndex === index && (
            <div className="px-6 py-4 bg-beige/40 border-t border-[color:var(--maroon)]/15">
              <p className="text-coffee/80 text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function Index() {
  const beforeImage = featured.gallery.find((g) => g.label === "Before");
  const afterImage = featured.gallery.find((g) => g.label === "After");

  return (
    <div className="min-h-screen bg-cream text-coffee">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[color:var(--cream)]/90 border-b border-[color:var(--maroon)]/15">
        <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
          <a href="#" className="muse-wordmark text-5xl animate-slide-in-left leading-none pb-1" aria-label="Muse Web Studio — home">
            Muse
          </a>
          <nav aria-label="Primary" className="hidden md:flex items-center gap-8 text-sm text-coffee">
            <a href="#work" className="hover:text-maroon transition-colors">Work</a>
            <a href="#services" className="hover:text-maroon transition-colors">Services</a>
            <a href="#faq" className="hover:text-maroon transition-colors">FAQ</a>
            <a href="#about" className="hover:text-maroon transition-colors">About</a>
            <a href="#contact" className="hover:text-maroon transition-colors">Contact</a>
          </nav>
          <a
            href="#contact"
            onClick={() => track("cta_start_your_vision")}
            className="rounded-full border border-coffee px-5 py-2 text-xs uppercase tracking-widest text-coffee hover:bg-coffee hover:text-cream transition-colors"
          >
            Start your vision
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 pt-8 pb-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-maroon mb-3 animate-fade-in">
              a remote creative studio
            </p>
            <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] text-chocolate animate-fade-in-slow">
              Your vision.<br />Our <em className="italic">muse</em>.
            </h1>
            <p className="mt-6 text-base md:text-lg text-coffee/80 max-w-md leading-relaxed font-medium">
              {geoOptimizedSummary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                onClick={() => track("cta_lets_work_together")}
                className="rounded-full bg-coffee text-cream px-6 py-3 text-sm hover:bg-chocolate transition-colors inline-flex items-center gap-2"
              >
                Let's work together <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#work"
                onClick={() => track("cta_view_our_work")}
                className="rounded-full border border-coffee text-coffee px-6 py-3 text-sm hover:bg-coffee hover:text-cream transition-colors"
              >
                View our work
              </a>
            </div>
          </div>
          <div className="justify-self-end w-full max-w-sm">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-beige border border-[color:var(--maroon)]/30">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="/hero%20(2).mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mx-auto max-w-6xl px-6 py-14 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl mb-10">Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-beige rounded-xl p-8 border-l-4"
                style={{ borderLeftColor: "var(--maroon)" }}
              >
                <h3 className="font-serif text-2xl mb-3">{s.title}</h3>
                <p className="text-coffee/80 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-coffee/80">
            Have something else in mind?{" "}
            <a href="#contact" className="text-maroon hover:underline underline-offset-4">
              Let's talk about custom work →
            </a>
          </p>
        </section>

        {/* FEATURED PROJECT */}
        <section className="mx-auto max-w-6xl px-6 py-14">
          <p className="text-xs uppercase tracking-[0.24em] text-maroon mb-3">Featured project</p>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <h2 className="font-serif text-4xl md:text-5xl">{featured.title}</h2>
            <a
              href={featured.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-maroon text-maroon px-5 py-2 text-xs uppercase tracking-widest hover:bg-maroon hover:text-cream transition-colors inline-flex items-center gap-2"
            >
              View live project <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <p className="max-w-2xl text-coffee/80 mb-10 leading-relaxed">
            A complete digital refresh for Tech Support For Everyone, creating a modern online presence that better reflects their brand, showcases their services, and makes connecting with customers effortless.
          </p>
          {beforeImage && afterImage && (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img
                  src={beforeImage.src}
                  alt={beforeImage.alt}
                  loading="lazy"
                  width={1600}
                  height={1200}
                  className="w-full aspect-[4/3] object-contain rounded-lg border border-[color:var(--maroon)]/20 bg-beige"
                />
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--maroon)] font-medium text-center">
                  Before
                </p>
              </div>

              <div>
                <img
                  src={afterImage.src}
                  alt={afterImage.alt}
                  loading="lazy"
                  width={1600}
                  height={1200}
                  className="w-full aspect-[4/3] object-contain rounded-lg border border-[color:var(--maroon)]/20 bg-beige"
                />
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--maroon)] font-medium text-center">
                  After
                </p>
              </div>
            </div>
          )}
        </section>

        {/* EXPLORE WORK */}
        <section id="work" className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="font-serif text-4xl md:text-5xl mb-10">
            Explore our work
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((w) => (
              <div
                key={w.slug}
                className="group bg-beige rounded-xl overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-cream p-5 flex items-center justify-center">
                  <img
                    src={w.cover}
                    alt={`${w.title} website preview`}
                    loading="lazy"
                    width={1200}
                    height={1500}
                    className="
                      w-full
                      h-full
                      object-contain
                      rounded-lg
                      transition-transform
                      duration-500
                    "
                  />
                </div>

                <div className="p-6">
                  <span className="maroon-tag mb-3">
                    {w.tag}
                  </span>

                  <h3 className="font-serif text-xl mt-3">
                    {w.title}
                  </h3>
                </div>

                <div className="px-6 pb-6">
                  <a
                    href={w.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-maroon hover:underline underline-offset-4 inline-flex items-center gap-2"
                  >
                    View live project
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="mx-auto max-w-6xl px-6 py-14">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.24em] text-maroon mb-3 text-center">Common questions</p>
            <h2 className="font-serif text-4xl md:text-5xl text-center mb-8">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-coffee/80 max-w-2xl mx-auto">
              Find answers to questions about our services, pricing, and process. Can't find what you're looking for? <a href="#contact" className="text-maroon hover:underline">Get in touch</a>.
            </p>
          </div>

          <FAQAccordion />
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">About Us</h2>
            <p className="text-coffee/80 leading-relaxed max-w-md">
              Muse is a one-woman studio built on the belief that every vision deserves to be brought to life with care. I work closely with you to create something that feels true to you and your brand.
            </p>
            <p className="muse-wordmark text-3xl mt-3 block">Your vision, my mission.</p>
            <a
              href={QUESTIONNAIRE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("cta_submit_your_vision")}
              className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-cream transition-colors hover:opacity-90"
              style={{ background: "var(--coffee)" }}
            >
              Submit your vision <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="flex justify-center md:justify-start">
            <div className="w-full max-w-lg aspect-square rounded-xl overflow-hidden bg-beige border border-[color:var(--maroon)]/20">
              <img
                src="/aboutus.jpg"
                alt="Designer reviewing brand work on a phone beside an iMac showing a color-system layout"
                loading="lazy"
                width={1200}
                height={1200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="font-serif text-4xl md:text-5xl mb-10">How it works</h2>
          <div className="grid md:grid-cols-4 md:divide-x md:divide-[color:var(--maroon)]/40">
            {steps.map((s, i) => (
              <div key={s.n} className={`px-0 md:px-6 py-4 ${i === 0 ? "md:pl-0" : ""}`}>
                <p className="text-xs uppercase tracking-[0.2em] text-maroon mb-3">Step {s.n}</p>
                <h3 className="font-serif text-xl mb-3">{s.title}</h3>
                <p className="text-sm text-coffee/80 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-14">Client testimonials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className="relative bg-beige rounded-2xl p-8 pt-10 shadow-sm border border-[color:var(--maroon)]/20 animate-testimonial-slide"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                <div className="absolute -top-4 left-6 bg-cream rounded-full p-2 border border-[color:var(--maroon)]/20">
                  <Quote className="w-4 h-4 text-maroon" />
                </div>
                <blockquote className="font-serif text-chocolate text-lg leading-snug italic">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 pt-4 border-t border-[color:var(--maroon)]/15">
                  <p className="text-sm font-medium text-coffee">{t.name}</p>
                  <p className="text-xs text-coffee/60">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* GLOBAL */}
        <section className="mx-auto max-w-6xl px-6 py-14 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-8">From anywhere, to everywhere</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="maroon-tag">Working globally</span>
            <span className="maroon-tag">100% remote</span>
            <span className="maroon-tag">Available worldwide</span>
          </div>
        </section>

        {/* DUAL CTA */}
        <div className="mx-auto max-w-6xl px-6">
          <div className="border-t border-[color:var(--maroon)]/20" />
        </div>
        <section id="contact" className="mx-auto max-w-6xl px-6 py-14 grid md:grid-cols-2 gap-6">
          <div
            className="rounded-xl p-10 border-l-4 flex flex-col justify-between"
            style={{ background: "var(--chocolate)", borderLeftColor: "var(--maroon)", color: "var(--cream)" }}
          >
            <div>
              <h3 className="font-serif text-3xl mb-4" style={{ color: "var(--cream)" }}>Have a vision in mind?</h3>
              <p className="text-sm opacity-80 leading-relaxed max-w-sm">
                Tell us about your project through our short questionnaire. It's the fastest way to start bringing your vision to life.
              </p>
            </div>
            <a
              href={QUESTIONNAIRE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("cta_fill_questionnaire")}
              className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-widest"
              style={{ color: "var(--cream)" }}
            >
              Fill the questionnaire <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div
            className="rounded-xl p-10 border-l-4 bg-beige"
            style={{ borderLeftColor: "var(--maroon)" }}
          >
            <h3 className="font-serif text-3xl mb-6">Connect with us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/musewebstudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("contact_instagram_click")}
                  className="inline-flex items-center gap-3 text-coffee hover:text-maroon transition-colors"
                >
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61592306638218"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("contact_facebook_click")}
                  className="inline-flex items-center gap-3 text-coffee hover:text-maroon transition-colors"
                >
                  <Facebook className="w-4 h-4" /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="mailto:musewebsitestudio@gmail.com"
                  onClick={() => track("contact_email_click")}
                  className="inline-flex items-center gap-3 text-coffee hover:text-maroon transition-colors"
                >
                  <Mail className="w-4 h-4" /> musewebsitestudio@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="mt-10" style={{ borderTop: "2px solid var(--maroon)" }}>
        <div className="mx-auto max-w-6xl px-6 py-14 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <p className="muse-wordmark text-6xl leading-none pb-1">Muse</p>
            <p className="mt-3 text-sm text-coffee/70 max-w-xs">
              {geoOptimizedSummary}
            </p>
          </div>
          <div className="md:text-right">
            <p className="text-xs uppercase tracking-[0.2em] text-maroon mb-3">Connect with us</p>
            <ul className="space-y-2 text-sm md:flex md:flex-col md:items-end">
              <li><a href="https://www.instagram.com/musewebstudio/" target="_blank" rel="noopener noreferrer" className="hover:text-maroon transition-colors inline-flex items-center gap-2"><Instagram className="w-4 h-4" /> Instagram</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61592306638218" target="_blank" rel="noopener noreferrer" className="hover:text-maroon transition-colors inline-flex items-center gap-2"><Facebook className="w-4 h-4" /> Facebook</a></li>
              <li><a href="mailto:musewebsitestudio@gmail.com" className="hover:text-maroon transition-colors inline-flex items-center gap-2"><Mail className="w-4 h-4" /> musewebsitestudio@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-8 text-xs text-coffee/60">© 2026 Muse Web Studio.</div>
      </footer>
    </div>
  );
}
