// An array of links for navigation bar
const navBarLinks = [
  { name: "Start", url: "/" },
  { name: "Dienstleistungen", url: "/services" },
  { name: "Unternehmen", url: "/company" },
  { name: "Kontakt", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Weitere Informationen",
    links: [
      { name: "Impressum", url: "/impressum" },
      { name: "Datenschutz", url: "/dataprotection" }
      
    ],
  },
  {
    section: "Unternehmen",
    links: [
      { name: "Über Uns", url: "/company" },
      { name: "Leistungen", url: "/services" },
      { name: "Kontakt", url: "/contact" }
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};