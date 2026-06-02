import { site } from "@/data/site";
import { IconGitHub, IconLinkedIn, IconMail, IconPhone } from "./icons";

const contactItems = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: IconMail,
  },
  {
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
    icon: IconPhone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/agha-ahmed",
    href: site.linkedin,
    icon: IconLinkedIn,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/AghaAhmed512",
    href: site.github,
    icon: IconGitHub,
    external: true,
  },
] as const;

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section-container">
        <p className="section-heading">Contact</p>
        <h2 className="section-title">Let&apos;s connect</h2>

        <div className="card max-w-2xl">
          <p className="mb-8 text-lg text-muted leading-relaxed">
            Open to roles in test automation, SDET, and quality engineering. Reach
            out via email, LinkedIn, or GitHub — I typically respond within a day.
          </p>

          <ul className="space-y-4">
            {contactItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={"external" in item && item.external ? "_blank" : undefined}
                  rel={
                    "external" in item && item.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-4 rounded-xl border border-transparent p-3 transition-colors hover:border-border hover:bg-surface-elevated"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-glow text-accent">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-muted">
                      {item.label}
                    </span>
                    <span className="text-foreground transition-colors group-hover:text-accent">
                      {item.value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href={site.resumePath}
            download
            className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-accent py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:w-auto sm:px-8"
          >
            Download resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
