import { profile } from "@/data/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section-container">
        <p className="section-heading">About</p>
        <h2 className="section-title">Who I am</h2>
        <div className="card max-w-3xl">
          <p className="text-lg leading-relaxed text-muted">{profile}</p>
        </div>
      </div>
    </section>
  );
}
