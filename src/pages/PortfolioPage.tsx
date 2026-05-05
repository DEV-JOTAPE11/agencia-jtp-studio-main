import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { Footer } from "@/components/layout/Footer";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { Button } from "@/components/ui/button";
import { portfolioProjects } from "@/data/portfolioProjects";

import jtpLogo from "@/assets/logo-jtp-profissional.jpeg";

const categories = ["Todos", "Landing Page", "Institucional", "E-commerce"];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("Todos");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = portfolioProjects.filter((project) =>
    filter === "Todos" ? true : project.category === filter
  );

  const getCount = (category: string) => {
    if (category === "Todos") return portfolioProjects.length;
    return portfolioProjects.filter((project) => project.category === category)
      .length;
  };

  const gradientStyle = {
    background: "linear-gradient(90deg, #b2fefa 0%, #004b8e 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <BackgroundPaths />
      </div>

      <header className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b border-primary/15 bg-background/80 px-4 backdrop-blur-xl md:px-8">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20"
            title={"Voltar para o in\u00edcio"}
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div className="flex items-center gap-2">
            <img
              src={jtpLogo}
              alt="JTP Services"
              className="h-8 w-8 rounded-lg object-cover shadow-lg shadow-primary/20"
            />
            <span className="text-sm font-semibold tracking-wide">
              {"Portf\u00f3lio Completo"}
            </span>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl flex-grow px-4 pb-16 pt-40 sm:px-6 md:px-8 md:pt-36">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:mt-0 md:text-7xl">
              Galeria de <span style={gradientStyle}>Sucesso</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Explore nossos projetos entregues. Cada site {"\u00e9"} desenvolvido
              estrategicamente para gerar resultados e fortalecer a marca dos
              nossos clientes.
            </p>
          </motion.div>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const isActive = filter === category;
            const count = getCount(category);

            return (
              <Button
                key={category}
                variant={isActive ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={`flex h-10 items-center gap-2 rounded-full border px-5 transition-all duration-300 ${
                  isActive
                    ? "scale-105 border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "border-primary/20 bg-background/40 backdrop-blur-sm hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
                <span
                  className={`flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-[10px] font-bold transition-colors ${
                    isActive
                      ? "bg-background/20 text-primary-foreground"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {count}
                </span>
              </Button>
            );
          })}
        </div>

        <PortfolioGrid projects={filteredProjects} variant="portfolio" />

        {filteredProjects.length === 0 && (
          <div className="mt-6 rounded-2xl border border-primary/10 bg-primary/5 py-20 text-center">
            <p className="text-muted-foreground">
              Nenhum projeto encontrado nesta categoria no momento.
            </p>
            <Button
              variant="link"
              onClick={() => setFilter("Todos")}
              className="mt-2 text-primary"
            >
              Ver todos os projetos
            </Button>
          </div>
        )}
      </main>

      <div className="relative z-10">
        <Footer />
      </div>

      <WhatsAppFab />
    </div>
  );
}
