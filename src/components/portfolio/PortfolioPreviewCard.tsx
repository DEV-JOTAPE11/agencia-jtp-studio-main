import {
  type CSSProperties,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
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
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageSrc, setImageSrc] = useState(project.previewImage);
  const [hovered, setHovered] = useState(false);
  const [canAutoScroll, setCanAutoScroll] = useState(false);
  const [scrollDistance, setScrollDistance] = useState(0);

  const measureScrollDistance = useCallback(() => {
    const frameHeight = frameRef.current?.clientHeight ?? 0;
    const imageHeight = imageRef.current?.scrollHeight ?? 0;

    setScrollDistance(Math.max(0, imageHeight - frameHeight));
  }, []);

  useEffect(() => {
    setImageSrc(project.previewImage);
    setHovered(false);
  }, [project.previewImage]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateAutoScroll = () =>
      setCanAutoScroll(mediaQuery.matches && !reducedMotion.matches);

    updateAutoScroll();
    mediaQuery.addEventListener("change", updateAutoScroll);
    reducedMotion.addEventListener("change", updateAutoScroll);

    return () => {
      mediaQuery.removeEventListener("change", updateAutoScroll);
      reducedMotion.removeEventListener("change", updateAutoScroll);
    };
  }, []);

  useEffect(() => {
    measureScrollDistance();

    const frame = frameRef.current;
    const image = imageRef.current;

    if (!frame || !image || typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", measureScrollDistance);
      return () => window.removeEventListener("resize", measureScrollDistance);
    }

    const observer = new ResizeObserver(measureScrollDistance);
    observer.observe(frame);
    observer.observe(image);
    window.addEventListener("resize", measureScrollDistance);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measureScrollDistance);
    };
  }, [imageSrc, measureScrollDistance]);

  const handleImageError = () => {
    setImageSrc((currentSrc) =>
      currentSrc === project.coverImage ? currentSrc : project.coverImage
    );
  };

  const handleImageLoad = () => {
    requestAnimationFrame(measureScrollDistance);
  };

  const transitionDuration = Math.min(
    10,
    Math.max(5, scrollDistance / 180)
  );
  const isUsingFallbackImage = imageSrc === project.coverImage;

  const imageStyle: CSSProperties = {
    transform:
      canAutoScroll && hovered && scrollDistance > 0
        ? `translate3d(0, -${scrollDistance}px, 0)`
        : "translate3d(0, 0, 0)",
    transitionDuration: `${transitionDuration}s`,
  };

  const frameStyle: CSSProperties = {
    overscrollBehavior: "contain",
    WebkitOverflowScrolling: "touch",
  };

  return (
    <article
      className={cn(
        "glass-card group flex h-full flex-col overflow-hidden bg-card/55 transition-all duration-300",
        "hover:-translate-y-1 hover:border-primary/35 hover:shadow-2xl hover:shadow-primary/10",
        variant === "home" ? "min-h-[560px]" : "min-h-[580px]"
      )}
    >
      <div className="p-3 pb-0">
        <div
          className={cn(
            "overflow-hidden rounded-xl border border-primary/20 bg-background/80 shadow-inner shadow-black/30",
            canAutoScroll ? "overflow-hidden" : "overflow-y-auto",
            variant === "home"
              ? "h-[300px] sm:h-[340px] lg:h-[360px]"
              : "h-[320px] sm:h-[360px] lg:h-[380px]"
          )}
          ref={frameRef}
          style={frameStyle}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            ref={imageRef}
            src={imageSrc}
            alt={`Preview completo do site ${project.title}`}
            className={cn(
              "block w-full select-none transition-transform ease-in-out will-change-transform",
              isUsingFallbackImage && "h-full object-cover"
            )}
            style={imageStyle}
            draggable={false}
            loading="lazy"
            decoding="async"
            onError={handleImageError}
            onLoad={handleImageLoad}
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
