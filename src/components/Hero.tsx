import Image from "next/image";
import { AchievementStats } from "@/components/AchievementStats";
import { site } from "@/data/site";
import {
  IconArrowRight,
  IconDownload,
  IconGitHub,
  IconLinkedIn,
  IconMapPin,
} from "./icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-14 sm:pt-32 sm:pb-16">
      <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />

      <div className="section-container relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="gradient-text">{site.name}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-xl text-muted sm:text-2xl">
              {site.title}
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted/90">
              {site.tagline}
            </p>

            <div className="mt-6 space-y-2 text-sm text-muted sm:text-base">
              <p className="flex items-center gap-2">
                <IconMapPin className="h-4 w-4 shrink-0 text-accent" />
                {site.location}
              </p>
              <p>💼 {site.yearsExperience} Years Professional Experience</p>
              <p>🌎 Open to Remote & International Opportunities</p>
            </div>

            <AchievementStats />

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Get in touch
                <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={site.resumePath}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-surface-elevated"
              >
                <IconDownload className="h-4 w-4" />
                Download CV
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-surface-elevated"
              >
                <IconLinkedIn className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-surface-elevated"
              >
                <IconGitHub className="h-4 w-4" />
                GitHub
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 font-mono text-xs text-muted sm:text-sm">
              {["WebdriverIO", "TypeScript", "LambdaTest", "Smart UI", "CI/CD"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-surface-elevated px-3 py-1.5"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="mx-auto lg:mx-0">
            <div className="relative">
              <div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/40 to-accent/5 blur-sm"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-elevated p-1">
                <Image
                  src={site.profileImage}
                  alt={`Portrait of ${site.name}`}
                  width={320}
                  height={400}
                  className="h-auto w-64 rounded-xl object-cover object-top sm:w-72 lg:w-80"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
