export type CaseStudy = {
  slug: string;
  tag: string;
  title: string;
  cover: string;
  liveUrl: string;
  summary: string;
  description: string;
  gallery: { src: string; alt: string; label?: "Before" | "After" }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "tech-support-for-everyone",
    tag: "Client Work",
    title: "Tech Support For Everyone",
    cover: "/project-tsfe-live.png",
    liveUrl: "https://techsupportforeveryone.com/",
    summary:
      "A full digital refresh — a modern, human site that finally matches the service behind it.",
    description:
      "Tech Support For Everyone needed a site that felt as approachable as their in-home help. We rebuilt the brand's presence with clearer messaging, a warmer visual language, and a booking flow that gets people from question to appointment in a few taps.",
    gallery: [
      {
        src: "/tsfe-before-1.png",
        alt: "Tech Support For Everyone — original hero, red on dark blue",
        label: "Before",
      },
      {
        src: "/after2.png",
        alt: "Redesigned Tech Support For Everyone hero with friendly photography",
        label: "After",
      },
    ],
  },
  {
    slug: "jana",
    tag: "Demo Project",
    title: "Jańa",
    cover: "/project-jana.png",
    liveUrl: "https://jana-parisian-elegance.vercel.app/",
    summary:
      "A candlelit corner of Paris — buttery pastries by day, velvet-dark jazz by night.",
    description:
      "Jańa is an editorial demo built to show how a hospitality brand can feel timeless without feeling stiff. Deep burgundy, a hand-drawn wordmark, and quiet interior photography combine into a site that reads like the menu.",
    gallery: [
      {
        src: "/project-jana.png",
        alt: "Jańa homepage hero with elegant script wordmark on a burgundy background",
      },
    ],
  },
  {
    slug: "medi-estate",
    tag: "Demo Project",
    title: "Medi Estate",
    cover: "/project-medi.png",
    liveUrl: "https://medi-estate.vercel.app/",
    summary:
      "Where the Mediterranean meets the Gulf — a real-estate concept for beachfront villas across the UAE.",
    description:
      "Medi Estate is a demo for a modern real-estate brand. We paired oceanfront imagery with a serif display face and quiet UI so the listings do the talking.",
    gallery: [
      {
        src: "/project-medi.png",
        alt: "Medi Estate homepage with a beachfront villa at golden hour",
      },
    ],
  },
];

export function findCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
