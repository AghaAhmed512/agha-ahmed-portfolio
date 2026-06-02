import { skillGroups } from "@/data/site";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section-container">
        <p className="section-heading">Skills</p>
        <h2 className="section-title">Technical toolkit</h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.category} className="card">
              <h3 className="mb-4 text-lg font-medium text-foreground">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-border bg-surface-elevated px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/30 hover:text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
