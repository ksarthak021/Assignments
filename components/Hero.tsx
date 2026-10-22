import type { ReactNode } from "react";

type HeroProps = {
  image: string;
  alt: string;
  kicker: string;
  title: ReactNode;
  lede?: string;
  actions?: ReactNode;
  aside?: ReactNode;
  variant?: "home" | "page" | "short";
};

export function Hero({ image, alt, kicker, title, lede, actions, aside, variant = "page" }: HeroProps) {
  return (
    <section className={`hero hero-${variant}`}>
      <img
        className="hero-media"
        src={image}
        alt={alt}
        fetchPriority={variant === "home" ? "high" : "auto"}
      />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="kicker">{kicker}</p>
          <h1>{title}</h1>
          {lede ? <p className="lede">{lede}</p> : null}
          {actions ? <div className="actions">{actions}</div> : null}
        </div>
        {aside ? <div className="hero-aside">{aside}</div> : null}
      </div>
    </section>
  );
}
