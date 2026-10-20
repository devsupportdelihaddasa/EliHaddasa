import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "../data/testimonials";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const go = (delta: number) => {
    setIndex(
      (prev) => (prev + delta + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-ink-900 py-24 md:py-32">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            index="08"
            eyebrow="Testimonials"
            title="Turning Corporate Performance into Planetary Healing."
          />

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center border border-white/15 text-bone-dim transition-colors hover:border-sky-500 hover:text-sky-500"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center border border-white/15 text-bone-dim transition-colors hover:border-sky-500 hover:text-sky-500"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 border-t border-white/10 pt-14 lg:grid-cols-12">
          <Quote
            className="h-10 w-10 text-sky-500/40 lg:col-span-1"
            strokeWidth={1.5}
          />

          <div className="lg:col-span-8">
            <p className="font-display text-2xl font-medium leading-snug text-bone md:text-3xl">
              &ldquo;{active.quote}&rdquo;
            </p>

            <div className="mt-8 flex items-center gap-4">
              <img
                src={active.image}
                alt={active.name}
                className="h-11 w-11 border border-sky-500/40 object-cover object-top"
                loading="lazy"
              />
              <div>
                <p className="font-display text-sm font-semibold text-bone">
                  {active.name}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-wide text-bone-muted">
                  {active.role}, {active.company}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-1 lg:col-span-3 lg:justify-end">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < active.rating
                    ? "fill-sky-500 text-sky-500"
                    : "text-white/15"
                }`}
                strokeWidth={1.5}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 flex gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              type="button"
              aria-label={`Show testimonial from ${t.name}`}
              onClick={() => setIndex(i)}
              className={`h-1 flex-1 max-w-16 transition-colors duration-300 ${
                i === index ? "bg-sky-500" : "bg-white/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
