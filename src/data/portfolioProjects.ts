export type PortfolioProject = {
  id: number;
  title: string;
  category: string;
  subCategory: string;
  description: string;
  coverImage: string;
  previewImage: string;
  previewSrcSet: string;
  previewSizes: string;
  previewWidth: number;
  previewHeight: number;
  badges: string[];
  tags: string[];
  link: string;
  featured: boolean;
};

const portfolioPreviewSizes =
  "(max-width: 767px) calc(100vw - 56px), (max-width: 1023px) 50vw, 384px";

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "Barber Start",
    category: "Landing Page",
    subCategory: "Marketing Digital",
    description:
      "Landing page moderna com foco em convers\u00e3o, apresenta\u00e7\u00e3o de servi\u00e7os e chamada direta para atendimento.",
    coverImage: "/images/portfolio/optimized/barber-start-cover-768.webp",
    previewImage:
      "/images/portfolio/optimized/landing-page-jonas-fullpage-384.webp",
    previewSrcSet:
      "/images/portfolio/optimized/landing-page-jonas-fullpage-384.webp 384w, /images/portfolio/optimized/landing-page-jonas-fullpage-768.webp 768w",
    previewSizes: portfolioPreviewSizes,
    previewWidth: 384,
    previewHeight: 1546,
    badges: ["Alta Convers\u00e3o", "Design Premium"],
    tags: ["React", "Tailwind", "Vite"],
    link: "https://lp-jonas-barber.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Hotel Ouro do Cerrado",
    category: "Institucional",
    subCategory: "Hotelaria",
    description:
      "Site institucional one page para hotel, facilitando reservas e criando uma presen\u00e7a digital profissional.",
    coverImage:
      "/images/portfolio/optimized/hotel-ouro-cerrado-cover-768.webp",
    previewImage:
      "/images/portfolio/optimized/hotel-ouro-cerrado-fullpage-384.webp",
    previewSrcSet:
      "/images/portfolio/optimized/hotel-ouro-cerrado-fullpage-384.webp 384w, /images/portfolio/optimized/hotel-ouro-cerrado-fullpage-768.webp 768w",
    previewSizes: portfolioPreviewSizes,
    previewWidth: 384,
    previewHeight: 1678,
    badges: ["Premium", "Sistema de Reservas"],
    tags: ["React", "Tailwind", "Vite"],
    link: "https://www.hotelourodocerrado.com.br",
    featured: true,
  },
  {
    id: 3,
    title: "Cl\u00ednica Madness",
    category: "Institucional",
    subCategory: "Sa\u00fade",
    description:
      "Site moderno com agendamento online e \u00e1rea do cliente para uma cl\u00ednica veterin\u00e1ria.",
    coverImage: "/images/portfolio/optimized/madness-clinica-cover-768.webp",
    previewImage:
      "/images/portfolio/optimized/madness-clinica-veterinaria-fullpage-384.webp",
    previewSrcSet:
      "/images/portfolio/optimized/madness-clinica-veterinaria-fullpage-384.webp 384w, /images/portfolio/optimized/madness-clinica-veterinaria-fullpage-768.webp 768w",
    previewSizes: portfolioPreviewSizes,
    previewWidth: 384,
    previewHeight: 1458,
    badges: ["Destaque", "Clean Design"],
    tags: ["React", "Tailwind", "Vite"],
    link: "https://dev-jotape11.github.io/medneeds-fer/",
    featured: true,
  },
  {
    id: 4,
    title: "Globo Sat Arinos",
    category: "Institucional",
    subCategory: "Telecom",
    description:
      "Site profissional para empresa de instala\u00e7\u00e3o de antenas, com portf\u00f3lio, depoimentos e formul\u00e1rio de contato.",
    coverImage: "/images/portfolio/optimized/globosatarinos-cover-768.webp",
    previewImage:
      "/images/portfolio/optimized/globosatarinos-fullpage-384.webp",
    previewSrcSet:
      "/images/portfolio/optimized/globosatarinos-fullpage-384.webp 384w, /images/portfolio/optimized/globosatarinos-fullpage-768.webp 768w",
    previewSizes: portfolioPreviewSizes,
    previewWidth: 384,
    previewHeight: 1584,
    badges: ["Case de Sucesso", "Institucional"],
    tags: ["React", "Tailwind"],
    link: "https://www.globosatarinos.com.br",
    featured: false,
  },
  {
    id: 5,
    title: "LP Patins",
    category: "Landing Page",
    subCategory: "Esportes",
    description:
      "Landing page moderna e impactante para marca de patins, com ritmo visual forte e foco em produto.",
    coverImage: "/images/portfolio/optimized/lp-patins-cover-768.webp",
    previewImage: "/images/portfolio/optimized/lp-patins-fullpage-384.webp",
    previewSrcSet:
      "/images/portfolio/optimized/lp-patins-fullpage-384.webp 384w, /images/portfolio/optimized/lp-patins-fullpage-768.webp 768w",
    previewSizes: portfolioPreviewSizes,
    previewWidth: 384,
    previewHeight: 432,
    badges: ["Landing Page", "Radical"],
    tags: ["React", "Tailwind"],
    link: "https://dev-jotape11.github.io/lp-de-patins-animada-/",
    featured: false,
  },
  {
    id: 6,
    title: "Justly Advogados",
    category: "Institucional",
    subCategory: "Jur\u00eddico",
    description:
      "Site s\u00f3brio e elegante para transmitir autoridade, confian\u00e7a e clareza em servi\u00e7os jur\u00eddicos.",
    coverImage: "/images/portfolio/optimized/lp-justly-cover-768.webp",
    previewImage: "/images/portfolio/optimized/lp-justly-fullpage-384.webp",
    previewSrcSet:
      "/images/portfolio/optimized/lp-justly-fullpage-384.webp 384w, /images/portfolio/optimized/lp-justly-fullpage-768.webp 768w",
    previewSizes: portfolioPreviewSizes,
    previewWidth: 384,
    previewHeight: 1896,
    badges: ["Corporativo", "Autoridade"],
    tags: ["React", "Tailwind"],
    link: "https://dev-jotape11.github.io/justly/",
    featured: false,
  },
];
