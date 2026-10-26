// src/components/lib/motion.tsx
// Reusable, reduced-motion-aware motion primitives for the brand system.
// Uses Framer Motion for declarative, accessibility-respecting animation.

import { useEffect, useState, useRef, ReactNode } from "react";
import { motion } from "framer-motion";

/** Hook: track whether an element is in the viewport (IntersectionObserver). */
export function useReveal<T extends HTMLElement>(options?: {
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        }
      },
      { threshold: options?.threshold ?? 0, rootMargin: options?.rootMargin ?? "0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.threshold, options?.rootMargin]);

  return { ref, inView };
}

/** Reveal a single element once it scrolls into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  distance = 28,
  ease = [0.22, 1, 0.36, 1],
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  ease?: [number, number, number, number];
}) {
  const { ref, inView } = useReveal<HTMLDivElement>();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: distance }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
      transition={{ duration: 0.6, ease, delay: delay / 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Reveal a list of items with staggered delays, once the container is in view.
 *  Generic over the item type so each item is passed to the render function. */
export function RevealList<T>({
  items,
  children,
  className,
  delay = 0,
  stagger = 90,
  ease = [0.22, 1, 0.36, 1],
}: {
  items: T[];
  children: (item: T, index: number) => ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  ease?: [number, number, number, number];
}) {
  const { ref, inView } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={className}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.55, ease, delay: (delay + index * stagger) / 1000 }}
        >
          {children(item, index)}
        </motion.div>
      ))}
    </div>
  );
}
