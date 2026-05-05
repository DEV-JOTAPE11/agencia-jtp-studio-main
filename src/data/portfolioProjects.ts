import capaGlobo from "@/assets/capa-globo-sat-arinos.png";
import capaOc from "@/assets/capa-oc.png";
import capaVet from "@/assets/capa-vet.png";
import capaJustly from "@/assets/justly-capa.png";
import capaBarber from "@/assets/landing-page-barber-start.png";
import capaPatins from "@/assets/landing-page-patins.png";

export type PortfolioProject = {
  id: number;
  title: string;
  category: string;
  subCategory: string;
  description: string;
  coverImage: string;
  previewImage: string;
  badges: string[];
  tags: string[];
  link: string;
  featured: boolean;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "Barber Start",
    category: "Landing Page",
    subCategory: "Marketing Digital",
    description:
      "Landing page moderna com foco em convers\u00e3o, apresenta\u00e7\u00e3o de servi\u00e7os e chamada direta para atendimento.",
    coverImage: capaBarber,
    previewImage: "/images/portfolio/landing-page-jonas-fullpage.webp",
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
    coverImage: capaOc,
    previewImage: "/images/portfolio/hotel-ouro-cerrado-fullpage.webp",
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
    coverImage: capaVet,
    previewImage: "/images/portfolio/madness-clinica-veterinaria-fullpage.webp",
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
    coverImage: capaGlobo,
    previewImage: "/images/portfolio/globosatarinos-fullpage.webp",
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
    coverImage: capaPatins,
    previewImage: "/images/portfolio/lp-patins-fullpage.webp",
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
    coverImage: capaJustly,
    previewImage: "/images/portfolio/lp-justly-fullpage.webp",
    badges: ["Corporativo", "Autoridade"],
    tags: ["React", "Tailwind"],
    link: "https://dev-jotape11.github.io/justly/",
    featured: false,
  },
];
