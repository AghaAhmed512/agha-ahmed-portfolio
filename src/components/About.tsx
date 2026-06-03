import { aboutMe, professionalSummary } from "@/data/site";

export function About() {
  return (
    <section id="about" className="section-block">
      <div className="section-container">
        <p className="section-heading">About</p>
        <h2 className="section-title">About me</h2>

        <div className="card space-y-8">
          <div>
            <h3 className="section-subtitle">Professional Summary</h3>
            <div className="space-y-4">
              {professionalSummary.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <h3 className="section-subtitle">Career Journey</h3>
            <div className="space-y-4">
              {aboutMe.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
