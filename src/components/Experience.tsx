import { experience } from "@/data/site";

export function Experience() {
  return (
    <section id="experience" className="section-block">
      <div className="section-container">
        <p className="section-heading">Experience</p>
        <h2 className="section-title">Work experience</h2>

        <div className="relative space-y-8 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-0.5rem)] before:w-px before:bg-border sm:before:left-[11px]">
          {experience.map((job, index) => (
            <article key={index} className="relative pl-8 sm:pl-10">
              <span
                className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-accent bg-background sm:h-[23px] sm:w-[23px] sm:-left-[1px]"
                aria-hidden
              />

              <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{job.role}</h3>
                  <p className="text-accent">{job.company}</p>
                </div>
                <p className="font-mono text-sm text-muted">
                  {job.period}
                  <span className="mx-2 text-border">·</span>
                  {job.location}
                </p>
              </div>

              {"technologies" in job && job.technologies && (
                <>
                  <p className="mt-4 text-sm font-medium text-foreground">Technologies</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-lg border border-border bg-surface-elevated px-3 py-1 text-sm text-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <p className="mt-4 text-sm font-medium text-foreground">Responsibilities</p>
              <ul className="mt-2 space-y-2.5">
                {job.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-muted leading-relaxed before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent/60"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
