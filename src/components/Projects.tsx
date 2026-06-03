import Image from "next/image";
import { projects } from "@/data/site";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section-container">
        <p className="section-heading">Projects</p>
        <h2 className="section-title">Featured work</h2>

        <div className="grid gap-8">
          {projects.map((project) => (
            <article key={project.name} className="card group">
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-border p-2 sm:h-[4.5rem] sm:w-[4.5rem] ${
                    "logoLightBg" in project && project.logoLightBg
                      ? "bg-white"
                      : "bg-surface-elevated"
                  }`}
                >
                  <Image
                    src={project.logo}
                    alt={`${project.name} logo`}
                    width={72}
                    height={72}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-2xl font-semibold text-foreground transition-colors group-hover:text-accent">
                    {project.name}
                  </h3>
                  <p className="text-sm text-accent">{project.subtitle}</p>
                </div>
              </div>

              <p className="mt-4 text-muted leading-relaxed">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-surface-elevated px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-xs font-medium uppercase tracking-wider text-accent">
                Contributions
              </p>
              <ul className="mt-3 space-y-2.5">
                {project.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm text-muted leading-relaxed before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl border border-accent/20 bg-accent-glow p-4">
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-accent">
                  Impact
                </p>
                <ul className="space-y-1.5">
                  {project.impact.map((item, i) => (
                    <li key={i} className="text-sm text-foreground/90">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
