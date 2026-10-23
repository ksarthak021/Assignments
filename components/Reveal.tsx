"use client";

import { createElement, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealTag = "div" | "figure" | "article" | "blockquote" | "li" | "section" | "aside";

export function Reveal({
  children,
  className = "",
  as = "div",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  as?: RevealTag;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties | undefined = delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  return createElement(
    as,
    {
      ref,
      className: `reveal${visible ? " is-in" : ""} ${className}`.trim(),
      style,
    },
    children,
  );
}
