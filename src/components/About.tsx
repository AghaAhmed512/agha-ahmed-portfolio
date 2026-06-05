import { aboutMe, professionalSummary } from "@/data/site";

export function About() {
  return (
    <section id="about" className="section-block">
      <div className="section-container">
        <p className="section-heading mb-6 sm:mb-8">About</p>

        <div className="space-y-6 sm:space-y-8">
          <div className="card">
            <h3 className="section-subtitle">Professional Summary</h3>
            <div className="space-y-4">
              {professionalSummary.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="card">
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
