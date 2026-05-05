import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { PortfolioProject } from "@/data/portfolioProjects";

type PortfolioPreviewCardProps = {
  project: PortfolioProject;
  variant?: "home" | "portfolio";
};

export function PortfolioPreviewCard({
  project,
  variant = "portfolio",
}: PortfolioPreviewCardProps) {
  const [imageSrc, setImageSrc] = useState(project.previewImage);

  useEffect(() => {
    setImageSrc(project.previewImage);
  }, [project.previewImage]);

  const handleImageError = () => {
    setImageSrc((currentSrc) =>
      currentSrc === project.coverImage ? currentSrc : project.coverImage
    );
  };

  const isUsingFallbackImage = imageSrc === project.coverImage;

  return (
    <article
      className={cn(
        "glass-card group flex h-full flex-col overflow-hidden bg-card/55 transition-all duration-300",
        "hover:-translate-y-1 hover:border-primary/35 hover:shadow-2xl hover:shadow-primary/10",
        variant === "home" ? "min-h-[500px]" : "min-h-[520px]"
      )}
    >
      <div className="p-3 pb-0">
        <div
          className={cn(
            "portfolio-preview-scrollbar overflow-x-hidden overflow-y-auto rounded-xl border border-primary/20 bg-background/80 shadow-inner shadow-black/30",
            "touch-pan-y overscroll-contain focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background",
            variant === "home"
              ? "h-[260px] sm:h-[300px] lg:h-[320px]"
              : "h-[280px] sm:h-[320px] lg:h-[340px]"
          )}
          tabIndex={0}
          aria-label={`Preview rolavel do site ${project.title}`}
        >
          <img
            src={imageSrc}
            alt={`Preview completo do site ${project.title}`}
            className={cn(
              "block w-full select-none",
              isUsingFallbackImage && "h-full object-cover"
            )}
            draggable={false}
            loading="lazy"
            decoding="async"
            onError={handleImageError}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.badges.map((badge) => (
            <Badge
              key={badge}
              className="border-primary/20 bg-primary/90 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/10"
            >
              {badge}
            </Badge>
          ))}
        </div>

        <div className="mb-3">
          <h3 className="text-xl font-bold leading-tight transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
            <span className="font-semibold text-primary">
              {project.category}
            </span>
            <span aria-hidden="true" className="text-muted-foreground/60">
              &bull;
            </span>
            <span className="text-muted-foreground">{project.subCategory}</span>
          </div>
        </div>

        <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <Button asChild className="mt-auto w-full rounded-lg glow-blue">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver projeto ${project.title} em uma nova aba`}
          >
            Ver projeto
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </article>
  );
}
