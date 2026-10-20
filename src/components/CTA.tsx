import { ArrowRight } from "lucide-react";
import { CircuitTrace } from "./CircuitTrace";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-28">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 opacity-10 mix-blend-multiply">
        <CircuitTrace className="h-full w-full" />
      </div>
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rotate-180 opacity-10 mix-blend-multiply">
        <CircuitTrace className="h-full w-full" />
      </div>

      <div className="section-shell relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-widest2 text-sky-500">
            Start Your Project
          </span>
          <h2 className="mt-4 font-display text-clamp-h2 font-black leading-[1.02] tracking-tight text-sky-500">
            Secure Your Seat in the Arena
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-900/75">
            Whether you are spectator, international business seeking a
            tariff-free entry point, a corporate sponsor looking for optimized
            operations, or a CEO ready to test your limits in the arena—the
            bridge starts here.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-col items-center">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2.5 border border-sky-500 px-7 py-4 font-mono text-[12px] uppercase tracking-widest2 text-sky-500 transition-all duration-300 hover:border-ink-900"
          >
            Apply to Sponsor
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2.5 bg-sky-500 px-7 py-4 font-mono text-[12px] uppercase tracking-widest2 text-white transition-all duration-300 hover:bg-ink-800"
          >
            Register a Team
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </a>
        </div>
        <div className="flex flex-col gap-4 sm:flex-col">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2.5 border border-sky-500 px-7 py-4 font-mono text-[12px] uppercase tracking-widest2 text-sky-500 transition-all duration-300 hover:border-ink-900"
          >
            Prediction League
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2.5 bg-sky-500 px-7 py-4 font-mono text-[12px] uppercase tracking-widest2 text-white transition-all duration-300 hover:bg-ink-800"
          >
            Contact Us
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
