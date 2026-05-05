import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const isHome = variant === "home";

  useEffect(() => {
    setActiveIndex(0);
    cardRefs.current = cardRefs.current.slice(0, projects.length);
  }, [projects.length]);

  const scrollToProject = useCallback(
    (nextIndex: number) => {
      const safeIndex = Math.min(Math.max(nextIndex, 0), projects.length - 1);

      cardRefs.current[safeIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });

      setActiveIndex(safeIndex);
    },
    [projects.length]
  );

  const handleCarouselScroll = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const carouselCenter = carousel.scrollLeft + carousel.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(cardCenter - carouselCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  return (
    <div className={cn(isHome && "relative mx-auto max-w-6xl")}>
      <motion.div
        ref={isHome ? carouselRef : undefined}
        layout
        onScroll={isHome ? handleCarouselScroll : undefined}
        className={cn(
          isHome
            ? "scrollbar-none -mx-2 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-2 pb-2 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3"
            : "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
          className
        )}
      >
        <AnimatePresence mode="popLayout">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              layout
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.35, type: "spring", bounce: 0.18 }}
              className={cn(isHome && "min-w-full snap-center md:min-w-0")}
            >
              <PortfolioPreviewCard project={project} variant={variant} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {isHome && projects.length > 1 && (
        <>
          <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 flex -translate-y-1/2 items-center justify-between px-1 md:hidden">
            <button
              type="button"
              aria-label="Projeto anterior"
              onClick={() => scrollToProject(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="glass-card pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border-primary/20 text-primary shadow-lg shadow-primary/10 transition-all hover:bg-primary/10 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-35"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              aria-label="Pr\u00f3ximo projeto"
              onClick={() => scrollToProject(activeIndex + 1)}
              disabled={activeIndex === projects.length - 1}
              className="glass-card pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border-primary/20 text-primary shadow-lg shadow-primary/10 transition-all hover:bg-primary/10 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-35"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div
            className="mt-5 flex items-center justify-center gap-2 md:hidden"
            aria-hidden="true"
          >
            {projects.map((project, index) => (
              <span
                key={project.id}
                className={cn(
                  "h-2 rounded-full bg-muted-foreground/30 transition-all duration-300",
                  index === activeIndex ? "w-6 bg-primary" : "w-2"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
