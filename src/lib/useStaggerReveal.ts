"use client";

import { useEffect, useRef, useState } from "react";

interface StaggerRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Observes a container element. When visible, sets `isVisible = true`
 * so children can use CSS `--stagger-index` for staggered delays.
 * Single observer for the whole grid (not per-card) for performance.
 */
export function useStaggerReveal({
  threshold = 0.1,
  rootMargin = "0px 0px -40px 0px",
}: StaggerRevealOptions = {}) {
  const containerRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return { containerRef, isVisible };
}
