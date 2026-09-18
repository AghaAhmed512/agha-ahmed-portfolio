import { education } from "@/data/site";

export function Education() {
  return (
    <section id="education" className="section-block">
      <div className="section-container">
        <p className="section-heading">Education</p>
        <h2 className="section-title">Academic background</h2>

        <div className="grid gap-4 lg:max-w-2xl lg:grid-cols-1">
          {education.map((item) => (
            <div key={item.degree} className="card flex flex-col">
              <h3 className="font-semibold text-foreground">{item.degree}</h3>
              <p className="mt-1 text-sm text-accent">{item.school}</p>
              {"gpa" in item && item.gpa ? (
                <p className="mt-2 text-sm text-muted">{item.gpa}</p>
              ) : null}
              {"details" in item && item.details?.length ? (
                <ul className="mt-4 space-y-2">
                  {item.details.map((line) => (
                    <li
                      key={line}
                      className="flex gap-3 text-sm text-muted leading-relaxed before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-accent"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              ) : null}
              <p className="mt-auto pt-4 font-mono text-xs text-muted">
                {item.period}
              </p>
              <p className="text-xs text-muted">{item.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
