import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { Button } from "@/components/ui/button";
import { portfolioProjects } from "@/data/portfolioProjects";

export function Portfolio() {
  const featuredProjects = portfolioProjects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <div className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {"Nosso Portf\u00f3lio"}
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Sites que Criamos
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Alguns dos projetos que desenvolvemos para empresas de todo o
            Brasil.
          </p>
        </motion.div>

        <PortfolioGrid projects={featuredProjects} variant="home" />

        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-primary/30 bg-background/40 px-6 text-primary backdrop-blur-sm hover:bg-primary/10 hover:text-accent"
          >
            <Link to="/portfolio">
              {"Ver portf\u00f3lio completo"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
