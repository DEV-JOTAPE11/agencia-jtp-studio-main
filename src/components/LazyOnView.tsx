import { type ReactNode, useEffect, useRef, useState } from "react";

type LazyOnViewProps = {
  children: ReactNode;
  className?: string;
  placeholderClassName?: string;
  rootMargin?: string;
};

export function LazyOnView({
  children,
  className,
  placeholderClassName,
  rootMargin = "700px 0px",
}: LazyOnViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || typeof IntersectionObserver === "undefined") {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={shouldRender ? className : placeholderClassName ?? className}>
      {shouldRender ? children : null}
    </div>
  );
}
