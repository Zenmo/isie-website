import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "ISIE",
  description:
    "ISIE ontwikkelt een instrumentarium van energiemodellen om integrale beleidsvragen beter en consistenter te kunnen beantwoorden.",
  url: "https://astrostarterpro.com",
  lang: "en",
  locale: "en_US",
  author: "Devgelo",
  twitter: "@Devgelo",
  ogImage: ogImage,
  socialLinks: {
    twitter: "https://twitter.com",
    github: "https://github.com/devgelo-labs/astro-starter-pro",
    discord: "https://discord.com",
  },
  navLinks: [
    { text: "Home", href: "/" },
    { text: "Over het project", href: "/over-het-project" },
    { text: "Aanpak", href: "/aanpak" },
    { text: "Instrumentarium", href: "/instrumentarium" },
    { text: "Publicaties", href: "/publicaties" },
    { text: "Consortium", href: "/consortium" },
    { text: "Contact", href: "/contact" },
  ],
};
