"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { clientEndorsement, peerRecommendations, site } from "@/data/site";
import { IconLinkedIn } from "./icons";

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function Recognition() {
  const { company, companyLogo, tenure, quoteLead, quoteRest, name, title, highlights } =
    clientEndorsement;

  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const show = () => setVisible(true);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      show();
      observer.disconnect();
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="recognition"
      className="relative scroll-mt-20 py-10 sm:py-14"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="section-container relative space-y-6 sm:space-y-8">
        <div
          className={`group relative overflow-hidden rounded-3xl border border-border bg-surface shadow-[0_0_0_1px_rgb(52_211_153/0.08)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_12px_40px_-12px_rgb(52_211_153/0.25)] ${
            visible ? "endorsement-card-enter" : "translate-y-8 opacity-0"
          }`}
        >
          <div
            className={`pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl transition-opacity duration-1000 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-accent/5 blur-3xl"
            aria-hidden
          />

          <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,14rem)_1fr] lg:items-center lg:gap-10 lg:p-10">
            <div
              className={`flex items-center gap-4 transition-all duration-700 delay-100 lg:flex-col lg:items-start lg:gap-5 ${
                visible ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
              }`}
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-border bg-white p-2.5 transition-transform duration-300 group-hover:scale-105 sm:h-[4.5rem] sm:w-[4.5rem]">
                <Image
                  src={companyLogo}
                  alt={`${company} logo`}
                  width={72}
                  height={72}
                  className={`h-full w-full object-contain transition-transform duration-700 ${
                    visible ? "scale-100" : "scale-90"
                  }`}
                />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  Featured endorsement
                </p>
                <p className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
                  {company}
                </p>
                <p className="mt-1 font-mono text-xs text-muted sm:text-sm">{tenure}</p>
              </div>
            </div>

            <blockquote
              className={`min-w-0 transition-all duration-700 delay-200 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              <p className="text-xl font-medium leading-snug tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem] lg:leading-snug">
                <span className="gradient-text">{quoteLead}</span>
                <span className="text-muted/95"> {quoteRest}</span>
              </p>
            </blockquote>
          </div>

          <div
            className={`relative flex flex-col gap-5 border-t border-border bg-surface-elevated/40 px-6 py-5 transition-all duration-700 delay-300 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            <figcaption className="text-sm">
              <p className="font-semibold text-foreground">{name}</p>
              <p className="text-muted">
                {title} · {company}
              </p>
            </figcaption>
            <ul className="flex flex-wrap gap-2" aria-label="Highlighted strengths">
              {highlights.map((item, index) => (
                <li
                  key={item}
                  className={
                    visible
                      ? "endorsement-pill-enter rounded-full border border-accent/25 bg-accent-glow px-3 py-1 font-mono text-xs text-accent"
                      : "rounded-full border border-accent/25 bg-accent-glow px-3 py-1 font-mono text-xs text-accent opacity-0"
                  }
                  style={
                    visible
                      ? { animationDelay: `${420 + index * 90}ms` }
                      : undefined
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {peerRecommendations.map((rec, index) => (
            <figure
              key={rec.name}
              className={`card flex flex-col ${
                visible ? "endorsement-card-enter" : "translate-y-6 opacity-0"
              }`}
              style={
                visible ? { animationDelay: `${550 + index * 120}ms` } : undefined
              }
            >
              <div className="flex items-start gap-3">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent-glow font-mono text-sm font-semibold text-accent"
                  aria-hidden
                >
                  {initials(rec.name)}
                </div>
                <blockquote className="min-w-0 flex-1">
                  <p className="text-sm leading-relaxed text-foreground/95 sm:text-base">
                    &ldquo;{rec.quote}&rdquo;
                  </p>
                </blockquote>
              </div>
              <figcaption className="mt-4 border-t border-border pt-3 text-sm">
                <p className="font-semibold text-foreground">{rec.name}</p>
                <p className="text-accent">
                  {rec.title} · {rec.company}
                </p>
                {rec.relation ? (
                  <p className="mt-0.5 font-mono text-xs text-muted">{rec.relation}</p>
                ) : null}
              </figcaption>
            </figure>
          ))}
        </div>

        <p
          className={`text-center transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={visible ? { transitionDelay: "780ms" } : undefined}
        >
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <IconLinkedIn className="h-4 w-4" />
            View all recommendations on LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
}
