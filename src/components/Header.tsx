"use client";

import { useState, useEffect } from "react";
import { site, navLinks } from "@/data/site";
import { IconMenu, IconClose } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-background/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex h-16 items-center justify-between sm:h-[4.5rem]">
        <a
          href="#"
          className="font-mono text-sm font-medium tracking-tight text-foreground transition-colors duration-200 hover:text-[#34d399]"
        >
          {site.shortName}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="btn-nav"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-muted transition-colors duration-200 hover:text-[#34d399] md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-border bg-background px-6 py-6 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-lg text-foreground transition-colors duration-200 hover:text-[#34d399]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
