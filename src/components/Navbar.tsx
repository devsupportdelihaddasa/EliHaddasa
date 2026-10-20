import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/nav";
import { useActiveSection } from "../hooks/useActiveSection";
import { Button } from "./Button";
// import Image from "next/image";
// import { Link, Menu, X, Zap } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
  const { activeId, scrolled } = useActiveSection(sectionIds);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-premium ${
        solid
          ? "bg-ink-900/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="section-shell flex h-20 items-center justify-between">
        <a
          href="#home"
          //   className="group flex items-center gap-2.5 rounded-sm focus-visible:outline-2 focus-visible:outline-sky-500"
        >
          <span className="flex h-9 w-9 items-center justify-center duration-300">
            <img src="/logo.png" alt="logo"></img>
            {/* <Link
              href=""
              className="px-4 py-2 rounded-lg shadow-lg flex gap-x-2"
            ></Link> */}
          </span>
          {/* <span className="font-display text-lg font-bold tracking-tight text-sky-500">
            ELI<span className="text-green-700">HADDASA</span>
          </span> */}
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative py-2 font-mono text-[12px] uppercase tracking-widest2 transition-colors duration-300 ${
                  isActive ? "text-sky-500" : "text-sky-500 hover:text-sky-500"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-sky-500 transition-all duration-300 ease-premium ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button as="a" href="#contact" variant="primary">
            Contact Us
          </Button>
          {/* <Button as="a" href="#contact" variant="primary">
            Get a Quote
          </Button> */}
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="tap-target flex h-11 w-11 items-center justify-center border border-white/15 text-bone transition-colors duration-300 hover:border-sky-500 hover:text-sky-500 lg:hidden"
        >
          <span className="relative flex h-5 w-5 items-center justify-center">
            <Menu
              className={`absolute h-5 w-5 transition-all duration-300 ease-premium ${
                menuOpen
                  ? "rotate-90 opacity-0"
                  : "rotate-0 opacity-100 text-sky-500"
              }`}
            />
            <X
              className={`absolute h-5 w-5 transition-all duration-300 ease-premium ${
                menuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden bg-ink-900 transition-[grid-template-rows,opacity] duration-500 ease-premium lg:hidden ${
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <nav className="min-h-0 overflow-hidden" aria-label="Mobile">
          <div className="section-shell flex flex-col gap-1 pb-8 pt-2">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  transitionDelay: menuOpen ? `${80 + i * 55}ms` : "0ms",
                }}
                className={`tap-target flex items-center gap-4 border-b border-white/10 py-4 font-display text-xl font-semibold text-bone transition-all duration-300 ease-premium hover:text-sky-500 hover:gap-5 ${
                  menuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-3 opacity-0"
                }`}
              >
                <span className="font-mono text-xs text-sky-500">{i + 1}</span>
                {link.label}
              </a>
            ))}
            <div
              className={`pt-6 transition-all duration-300 ease-premium ${
                menuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-3 opacity-0"
              }`}
              style={{
                transitionDelay: menuOpen
                  ? `${80 + navLinks.length * 55}ms`
                  : "0ms",
              }}
            >
              <Button
                as="a"
                href="#contact"
                variant="primary"
                onClick={() => setMenuOpen(false)}
                className="w-full"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
