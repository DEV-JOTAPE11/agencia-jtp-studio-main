import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import type { PortfolioProject } from "@/data/portfolioProjects";
import { PortfolioPreviewCard } from "./PortfolioPreviewCard";

type PortfolioGridProps = {
  projects: PortfolioProject[];
  variant?: "home" | "portfolio";
  className?: string;
};

export function PortfolioGrid({
  projects,
  variant = "portfolio",
  className,
}: PortfolioGridProps) {
  return (
    <motion.div
      layout
      className={cn(
        "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
        variant === "home" && "mx-auto max-w-6xl",
        className
      )}
    >
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.35, type: "spring", bounce: 0.18 }}
          >
            <PortfolioPreviewCard project={project} variant={variant} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
