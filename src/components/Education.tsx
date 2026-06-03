import { education } from "@/data/site";

export function Education() {
  return (
    <section id="education" className="section-block">
      <div className="section-container">
        <p className="section-heading">Education</p>
        <h2 className="section-title">Academic background</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((item) => (
            <div key={item.degree} className="card flex flex-col">
              <h3 className="font-semibold text-foreground">{item.degree}</h3>
              <p className="mt-1 text-sm text-accent">{item.school}</p>
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
