import facebookIcon from "@assets/icons/Facebook.png";
import twitterIcon from "@assets/icons/Twitter.png";
import googleIcon from "@assets/icons/Google.png";

export const footerData = {
  subtitle: "COMPANY",
  logo: "KONSTRUCT",
  description:
    "Konstruct is a leading construction management firm dedicated to delivering exceptional results. We transform your vision into reality through innovative solutions, expert project management, and unwavering commitment to quality.",
  columns: [
    {
      title: "LINKS",
      links: [
        { label: "HOME", url: "#home" },
        { label: "ABOUT", url: "#about" },
        { label: "SERVICES", url: "#services" },
        { label: "PROJECTS", url: "#work" },
        { label: "CONTACT US", url: "#contact" },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        { label: "FAQ", url: "#faq" },
        { label: "TERMS", url: "#terms" },
        { label: "CAREERS", url: "#careers" },
        { label: "BLOG", url: "#blog" },
        { label: "PARTNERS", url: "#partners" },
        { label: "NEWS", url: "#news" },
      ],
    },
    {
      title: "CONTACT US",
      address: "213 Baker Street, Oriel City, Kauntry 7000 KNW",
      phone: "+23 994 233 4022",
      email: "info@konstruct.com",
    },
  ],
  socialIcons: [facebookIcon, twitterIcon, googleIcon],
  bottom: {
    copyright: "© 2026 Konstruct Inc. Designed by Jane Kathryn Teo",
  },
};
