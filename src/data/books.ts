export type Book = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  amazonUrl?: string; // placeholder for now
  coverImage?: string; // /images/...
};

export const books: Book[] = [
  {
    slug: "rambams-guide-to-health",
    title: "Rambam’s Guide to Health",
    subtitle: "A Practical Modern Interpretation of Medieval Preventive Medicine",
    description:
      "A modern translation of Rambam’s preventive health framework built for practical wellness education.",
    amazonUrl: "",
    coverImage: "/images/book-rambam.jpg"
  },
  {
    slug: "cancer-across-time-and-civilizations",
    title: "Cancer Across Time and Civilizations",
    subtitle: "A Historical and Biological Translation",
    description:
      "A historically grounded exploration of cancer across medical civilizations translated into modern biological frameworks.",
    amazonUrl: "",
    coverImage: "/images/book-cancer.jpg"
  }
];
