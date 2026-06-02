import { aboutMe, professionalSummary } from "@/data/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section-container">
        <p className="section-heading">About</p>
        <h2 className="section-title">Professional Summary</h2>

        <div className="card max-w-4xl space-y-6">
          {professionalSummary.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8 card max-w-4xl space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">Career Journey</h3>
          <h4 className="text-xl font-medium text-foreground">Who I Am</h4>
          {aboutMe.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
