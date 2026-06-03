import Image from "next/image";
import { projects } from "@/data/site";

function projectLogoBoxClass(project: (typeof projects)[number]) {
  const light = "logoLightBg" in project && project.logoLightBg;
  const wide = "logoWide" in project && project.logoWide;
  const base =
    "flex shrink-0 items-center justify-center rounded-xl border border-border";
  const bg = light ? "bg-white" : "bg-surface-elevated";
  const size = wide
    ? "h-14 w-[7.5rem] px-2.5 py-2 sm:h-16 sm:w-36"
    : "h-16 w-16 p-2 sm:h-[4.5rem] sm:w-[4.5rem]";
  return `${base} ${bg} ${size}`;
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section-container">
        <p className="section-heading">Projects</p>
        <h2 className="section-title">Featured work</h2>

        <div className="grid gap-8">
          {projects.map((project) => {
            const wide = "logoWide" in project && project.logoWide;
            return (
              <article key={project.name} className="card group">
                <div className="flex items-center gap-4">
                  <div className={projectLogoBoxClass(project)}>
                    <Image
                      src={project.logo}
                      alt={`${project.name} logo`}
                      width={wide ? 140 : 72}
                      height={wide ? 48 : 72}
                      className={
                        wide
                          ? "h-full max-h-10 w-full object-contain object-left sm:max-h-11"
                          : "h-full w-full object-contain"
                      }
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-2xl font-semibold text-foreground transition-colors group-hover:text-accent">
                      {project.name}
                    </h3>
                    <p className="mt-0.5 text-sm leading-snug text-accent">
                      {project.subtitle}
                    </p>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
