"use client";

import { useEffect, useRef, useState } from "react";
import { achievementStats } from "@/data/site";

const DURATION_MS = 1600;

function easeOutQuart(t: number) {
  return 1 - (1 - t) ** 4;
}

function AnimatedStat({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const runAnimation = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReduced) {
        setCount(target);
        return;
      }

      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / DURATION_MS, 1);
        setCount(Math.round(easeOutQuart(progress) * target));
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);

    // Hero is often visible on first paint — trigger if already in view
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      runAnimation();
      observer.disconnect();
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <div
      ref={ref}
      className="rounded-xl border border-border bg-surface/80 px-3 py-4 text-center sm:px-4 sm:py-5"
    >
      <p className="text-2xl font-semibold tabular-nums text-accent sm:text-3xl">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-xs text-muted sm:text-sm">{label}</p>
    </div>
  );
}

export function AchievementStats() {
  return (
    <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
      {achievementStats.map((stat) => (
        <AnimatedStat
          key={stat.label}
          target={stat.target}
          suffix={stat.suffix}
          label={stat.label}
        />
      ))}
    </div>
  );
}
