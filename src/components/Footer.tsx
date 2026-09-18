import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="section-container text-center text-sm text-muted">
        <p>
          © {year}{" "}
          <span className="text-foreground">{site.shortName}</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
