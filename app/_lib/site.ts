import type { Metadata } from "next";

export const name = "Vlad Polishchuk";
export const fullName = "Vladyslav Polishchuk";
export const role = "Senior Software Engineer · Independent Developer";
export const siteUrl = process.env.SITE_URL;
export const email = process.env.CONTACT_EMAIL;
export const linkedinUrl = process.env.LINKEDIN_URL;
export const githubUrl = "https://github.com/vladyslav-polishchuk";

export const navigation = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const villa = {
  name: "Villa Lim Silent",
  href: "/work/villa-lim-silent",
  url: "https://www.villa-lim-silent.com/en",
  description: "A custom website for a Croatian vacation rental, with a multilingual guest experience, booking enquiries, and a private admin interface.",
};

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: siteUrl ? { canonical: path } : undefined,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: name,
      url: siteUrl ? path : undefined,
    },
  };
}

export const services = [
  {
    title: "Business websites",
    summary: "A polished online presence that makes it easy for customers to find you and get in touch.",
    detail: "From focused landing pages to full business websites, I build around what your customers need to know and what you want them to do next.",
  },
  {
    title: "Booking & enquiries",
    summary: "Clear ways for customers to request availability, book a service, or get a quote.",
    detail: "Tailored forms, email workflows, and integrations that fit how you already run your business.",
  },
  {
    title: "Custom web tools",
    summary: "Dashboards, admin panels, and small applications that simplify everyday work.",
    detail: "If you spend too much time moving information between systems or repeating the same task, a small tool can make the work easier.",
  },
  {
    title: "Website improvements",
    summary: "Targeted work to make an existing website faster, easier to use, or more useful.",
    detail: "I can help with performance, responsive layouts, accessibility, technical search setup, and new features.",
  },
];
