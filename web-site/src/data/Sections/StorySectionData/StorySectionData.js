import wePlanIcon from "@assets/images/Bitmap.jpg";
import weManageIcon from "@assets/images/Bitmap-2.jpg";
import weBuildIcon from "@assets/images/Bitmap-3.jpg";

export const storySectionData = {
  sectionTitle: "OUR STORY",
  heading:
    "Founded in 2011 by John Mathew Smith, Konstruct has become the number one construction management firm",
  description:
    "For over a decade, we've delivered exceptional construction management services across commercial, residential, and industrial projects. Our commitment to excellence, innovative project management methodologies, and unwavering dedication to client satisfaction have established us as industry leaders. We combine technical expertise with personalized service to transform your vision into reality, on time and within budget.",
  cards: [
    {
      title: "WE PLAN",
      image: wePlanIcon,
      description:
        "Strategic planning and comprehensive project analysis to ensure success from day one",
    },
    {
      title: "WE MANAGE",
      image: weManageIcon,
      description:
        "Expert oversight of all project phases with real-time monitoring and quality control",
    },
    {
      title: "WE BUILD",
      image: {
        src: weBuildIcon,
        alt: "",
      },
      description:
        "Turning blueprints into exceptional structures with precision and craftsmanship",
    },
  ],
};
