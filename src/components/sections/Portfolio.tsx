import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import capaVet from "@/assets/capa-vet.png";
import capaHotel from "@/assets/capa-oc.png";
import capaGloboSat from "@/assets/capa-globo-sat-arinos.png";

// 1. Adicione a propriedade 'link' em cada objeto aqui
const projects = [
  {
    title: "Clínica Madness",
    category: "Site institucional • Petshop",
    desc: "Site moderno com agendamento online e área do cliente para uma clínica veterinária.",
    image: capaVet,
    badges: ["Destaque"],
    link: "https://dev-jotape11.github.io/medneeds-fer/", // Link específico deste projeto
  },
  {
    title: "Hotel Ouro do cerrado",
    category: "Site institucional • Tecnologia",
    desc: "Site institucional one page para hotel, facilitando reserva pelo site, e criando uma presença digital.",
    image: capaHotel,
    badges: ["Premium"],
    link: "https://www.hotelourodocerrado.com.br", // COLOCAR O LINK CORRETO AQUI
  },
  {
    title: "Globo sat antenas",
    category: "Site Institucional • Tecnologia",
    desc: "Site profissional para empresa de instalação de antenas, com portfólio, depoimentos e formulário de contato.",
    image: capaGloboSat,
    badges: ["Case de Sucesso"],
    link: "https://www.globosatarinos.com.br", // COLOCAR O LINK CORRETO AQUI
  },
];

export function Portfolio() {
  return (
    <div className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Nosso Portfólio
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Sites que Criamos
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Alguns dos projetos que desenvolvemos para empresas de todo o Brasil.
          </p>
        </motion.div>

        {/* Versão Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  {p.badges.map((b) => (
                    <Badge
                      key={b}
                      className="bg-primary/80 text-primary-foreground text-[10px] backdrop-blur-sm"
                    >
                      {b}
                    </Badge>
                  ))}
                </div>
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  {/* 2. Atualizado aqui para usar p.link */}
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground glow-blue transition-transform hover:scale-105"
                  >
                    Visitar <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold mb-1">{p.title}</h3>
                <p className="text-xs text-primary mb-2">{p.category}</p>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Versão Mobile */}
        <div className="md:hidden px-4">
          <Carousel className="w-full max-w-xs mx-auto" opts={{ loop: true }}>
            <CarouselContent>
              {projects.map((p) => (
                <CarouselItem key={p.title}>
                  <div className="glass-card overflow-hidden h-full flex flex-col">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        {p.badges.map((b) => (
                          <Badge
                            key={b}
                            className="bg-primary/80 text-primary-foreground text-[10px] backdrop-blur-sm"
                          >
                            {b}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="font-semibold mb-1">{p.title}</h3>
                      <p className="text-xs text-primary mb-2">{p.category}</p>
                      <p className="text-sm text-muted-foreground mb-4 flex-grow">
                        {p.desc}
                      </p>
                      {/* 3. Atualizado aqui também para usar p.link */}
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground glow-blue w-full mt-auto"
                      >
                        Visitar Site <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="text-sm text-primary hover:text-accent transition-colors font-medium"
          >
            Ver portfólio completo →
          </Link>
        </div>
      </div>
    </div>
  );
}