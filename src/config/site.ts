import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "ISIE",
  description:
    "ISIE ontwikkelt een instrumentarium van energiemodellen om integrale beleidsvragen beter en consistenter te kunnen beantwoorden.",
  url: "https://isie.energy",
  lang: "nl",
  locale: "nl_NL",
  author: "Common Futures en Zenmo",
  twitter: "@AukeHoekstra",
  ogImage: ogImage,
  socialLinks: {
    twitter: "https://x.com/AukeHoekstra",
    github: "https://github.com/Zenmo/isie-website",
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
