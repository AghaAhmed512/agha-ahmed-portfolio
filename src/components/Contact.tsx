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
    <section id="contact" className="section-block">
      <div className="section-container">
        <p className="section-heading">Contact</p>
        <h2 className="section-title">Let&apos;s connect</h2>

        <div className="card max-w-2xl">
          <p className="mb-6 leading-relaxed text-muted">
          Open to QA automation roles (remote-friendly). 
          <br/>Reach out anytime—I respond within a day.
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
                  className="group flex items-center gap-4 rounded-xl border border-transparent p-3 transition-colors duration-200 hover:border-[#34d399]/40 hover:bg-[#34d399]/10"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-glow text-accent transition-colors duration-200 group-hover:bg-[#34d399]/20 group-hover:text-[#34d399]">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-muted">
                      {item.label}
                    </span>
                    <span className="text-foreground transition-colors duration-200 group-hover:text-[#34d399]">
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
            className="btn-primary mt-6 w-full py-3.5 sm:w-auto sm:px-8"
          >
            Download resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
