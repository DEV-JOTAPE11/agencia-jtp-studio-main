import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

import capaVet from "@/assets/capa-vet.png";
import capaHotel from "@/assets/capa-oc.png";
import capaGloboSat from "@/assets/capa-globo-sat-arinos.png";

const projects = [
  {
    title: "Clínica Madness",
    category: "Site institucional • Petshop",
    desc: "Site moderno com agendamento online e área do cliente para uma clínica veterinária.",
    image: capaVet,
    badges: ["Destaque"],
    link: "https://dev-jotape11.github.io/medneeds-fer/",
  },
  {
    title: "Hotel Ouro do cerrado",
    category: "Site institucional • Tecnologia",
    desc: "Site institucional one page para hotel, facilitando reserva pelo site, e criando uma presença digital.",
    image: capaHotel,
    badges: ["Premium"],
    link: "https://www.hotelourodocerrado.com.br",
  },
  {
    title: "Globo sat antenas",
    category: "Site Institucional • Tecnologia",
    desc: "Site profissional para empresa de instalação de antenas, com portfólio, depoimentos e formulário de contato.",
    image: capaGloboSat,
    badges: ["Case de Sucesso"],
    link: "https://www.globosatarinos.com.br",
  },
];

export function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((index) => (index + 1) % projects.length);
  const handlePrevious = () =>
    setCurrentIndex(
      (index) => (index - 1 + projects.length) % projects.length
    );

  const currentProject = projects[currentIndex];

  return (
    <div className="py-24 px-6 relative">
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

        <div className="w-full max-w-5xl mx-auto">
          {/* Desktop layout */}
          <div className="hidden md:flex relative items-center">
            {/* Image/Avatar */}
            <div className="w-[470px] h-[470px] rounded-3xl overflow-hidden bg-gray-200 dark:bg-neutral-800 flex-shrink-0 relative shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.image}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full h-full"
                >
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover"
                    draggable={false}
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {currentProject.badges.map((b) => (
                      <span
                        key={b}
                        className="bg-primary/90 text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-md uppercase tracking-wider shadow-sm"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Card */}
            <div className="glass-card rounded-3xl shadow-2xl p-10 ml-[-80px] z-10 max-w-xl flex-1 border border-white/10 bg-background/80 backdrop-blur-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-2">
                      {currentProject.title}
                    </h3>
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                      {currentProject.category}
                    </p>
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {currentProject.desc}
                  </p>

                  <div className="flex">
                    <a
                      href={currentProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground glow-blue transition-transform hover:scale-105"
                    >
                      Visitar site <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden max-w-sm mx-auto text-center bg-transparent">
            {/* Image */}
            <div className="w-full aspect-video bg-gray-200 dark:bg-neutral-800 rounded-3xl overflow-hidden mb-4 relative shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.image}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full h-full"
                >
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover"
                    draggable={false}
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {currentProject.badges.map((b) => (
                      <span
                        key={b}
                        className="bg-primary/90 text-primary-foreground text-[10px] font-bold px-2.5 py-0.5 rounded-full backdrop-blur-md uppercase tracking-wider shadow-sm"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Card content */}
            <div className="px-2 glass-card rounded-3xl p-5 border border-white/10 bg-background/80 backdrop-blur-2xl shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex flex-col h-full"
                >
                  <h3 className="text-xl font-bold mb-2">
                    {currentProject.title}
                  </h3>
                  
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    {currentProject.category}
                  </p>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                    {currentProject.desc}
                  </p>
                  
                  <div className="flex justify-center mt-auto">
                    <a
                      href={currentProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground glow-blue transition-transform hover:scale-105 w-full"
                    >
                      Visitar site <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom navigation */}
          <div className="flex justify-center items-center gap-6 mt-6">
            {/* Previous */}
            <button
              onClick={handlePrevious}
              aria-label="Projeto anterior"
              className="w-12 h-12 rounded-full glass-card border border-white/10 shadow-md flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer text-foreground"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                    idx === currentIndex
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                  aria-label={`Ir para projeto ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={handleNext}
              aria-label="Próximo projeto"
              className="w-12 h-12 rounded-full glass-card border border-white/10 shadow-md flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer text-foreground"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
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