import { Facebook, Linkedin, Youtube } from "lucide-react";
import { navLinks } from "../data/nav";
import { globalsupply } from "../data/globalsupply";

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/eli-haddasa/home/?viewAsMember=true",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61595610208622",
  },
  {
    icon: Youtube,
    label: "Youtube",
    href: "https://www.youtube.com/@EliHaddasa",
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink-900">
      <div className="section-shell grid grid-cols-1 gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center">
              <img src="/logo.png" alt="logo"></img>
            </span>
            {/* <span className="font-display text-lg font-bold tracking-tight text-green-700">
              ELI<span className="text-sky-500">HADDASA</span>
            </span> */}
          </div>
          <h3 className="font-semibold text-white mt-6">Connect With Us</h3>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-bone-muted">
            Follow our journey as we we turn corporate capital into high-yield,
            community-changing infrastructure.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center border border-white/15 text-bone-dim transition-colors hover:border-sky-500 hover:text-sky-500"
              >
                <social.icon className="h-4 w-4" strokeWidth={1.75} />
              </a>
            ))}
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-bone">
            Redefining Corporate Performance. Rebuilding Global Ecosystems.
          </p>
        </div>

        <div className="md:col-span-2 md:col-start-6">
          <h3 className="font-mono text-[11px] uppercase tracking-widest2 text-bone-muted">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-bone-dim transition-colors hover:text-sky-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-mono text-[11px] uppercase tracking-widest2 text-bone-muted">
            Global Supply Operations
          </h3>
          <ul className="mt-5 space-y-3">
            {globalsupply.slice(0, 5).map((globalsupply) => (
              <li key={globalsupply.id}>
                <a
                  href="#globalsupply"
                  className="text-sm text-bone-dim transition-colors hover:text-sky-500"
                >
                  {globalsupply.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-mono text-[11px] uppercase tracking-widest2 text-bone-muted">
            Contact
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-bone-dim">
            <li>+27 (73) 088-5485</li>
            <li>info@elihaddasa.com</li>
            <li>Limpopo, South Africa</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col items-center justify-between gap-4 py-6 text-xs text-bone-muted md:flex-row">
          <p>&copy; {year} Eli Haddasa. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-sky-500">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-sky-500">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
