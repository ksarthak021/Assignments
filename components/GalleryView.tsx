"use client";

import { useEffect, useId, useRef, useState } from "react";
import { asset } from "@/lib/asset";
import { gallery, galleryFilters, type GalleryCategory } from "@/lib/site";

type Filter = (typeof galleryFilters)[number];
const FOCUSABLE = 'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])';

export function GalleryView() {
  const [filter, setFilter] = useState<Filter>("All");
  const [index, setIndex] = useState<number | null>(null);
  const [failed, setFailed] = useState<Record<string, boolean>>({});
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const returnFocus = useRef<HTMLElement | null>(null);

  const items = gallery.filter((item) => filter === "All" || item.category === filter);
  const active = index !== null ? items[index] : null;
  const countRef = useRef(items.length);
  countRef.current = items.length;
  const open = index !== null;

  useEffect(() => {
    setIndex(null);
  }, [filter]);

  useEffect(() => {
    if (!open) return;
    const root = dialogRef.current;
    const content = document.getElementById("content");
    const footer = document.getElementById("footer");
    const header = document.querySelector(".site-header");
    document.body.classList.add("scroll-lock");
    content?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    header?.setAttribute("inert", "");
    closeRef.current?.focus();

    const nodes = () => Array.from(root?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIndex(null);
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setIndex((current) => {
          if (current === null) return current;
          const count = countRef.current;
          return count ? (current + 1) % count : current;
        });
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIndex((current) => {
          if (current === null) return current;
          const count = countRef.current;
          return count ? (current - 1 + count) % count : current;
        });
        return;
      }
      if (event.key !== "Tab" || !root) return;
      const list = nodes();
      if (!list.length) return;
      const first = list[0];
      const last = list[list.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("scroll-lock");
      content?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      header?.removeAttribute("inert");
      returnFocus.current?.focus();
    };
  }, [open]);

  function openAt(next: number, trigger: HTMLElement) {
    returnFocus.current = trigger;
    setIndex(next);
  }

  return (
    <div>
      <div className="gallery-bar" role="toolbar" aria-label="Filter photographs">
        {galleryFilters.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {items.length === 0 ? (
        <div className="empty" role="status">
          <p>Nothing is filed under this heading.</p>
          <button type="button" className="btn" onClick={() => setFilter("All")}>
            Show every photograph
          </button>
        </div>
      ) : (
        <div className="masonry">
          {items.map((item, itemIndex) => {
            const broken = failed[item.src];
            return (
              <figure key={item.src} className={`tile tile-${item.frame}`}>
                <button
                  type="button"
                  className="tile-button"
                  onClick={(event) => openAt(itemIndex, event.currentTarget)}
                >
                  {broken ? (
                    <span className="tile-fallback">This photograph could not be loaded.</span>
                  ) : (
                    <img
                      src={asset(item.src)}
                      alt={item.alt}
                      loading="lazy"
                      onError={() => setFailed((current) => ({ ...current, [item.src]: true }))}
                    />
                  )}
                  <span className="tile-meta">
                    <span>{item.category}</span>
                    <strong>{item.title}</strong>
                  </span>
                </button>
              </figure>
            );
          })}
        </div>
      )}

      {active && index !== null ? (
        <div className="lightbox" role="presentation" onClick={() => setIndex(null)}>
          <div
            ref={dialogRef}
            className="lightbox-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="lightbox-bar">
              <p id={titleId}>
                {active.title}
                <span>
                  {index + 1} / {items.length} · {active.category as GalleryCategory}
                </span>
              </p>
              <button ref={closeRef} type="button" className="btn btn-light" onClick={() => setIndex(null)}>
                Close
              </button>
            </div>
            <div className="lightbox-stage">
              {failed[active.src] ? (
                <p className="tile-fallback" role="alert">
                  This photograph could not be loaded.
                </p>
              ) : (
                <img src={asset(active.src)} alt={active.alt} />
              )}
            </div>
            <p className="lightbox-caption">{active.alt}</p>
            <div className="lightbox-nav">
              <button
                type="button"
                className="btn btn-line-light"
                onClick={() =>
                  setIndex((current) =>
                    current === null ? current : (current - 1 + items.length) % items.length,
                  )
                }
              >
                Previous
              </button>
              <button
                type="button"
                className="btn btn-line-light"
                onClick={() =>
                  setIndex((current) => (current === null ? current : (current + 1) % items.length))
                }
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
