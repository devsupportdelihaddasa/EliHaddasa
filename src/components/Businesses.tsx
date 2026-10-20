import { hadassaEcosystem } from "../data/hadassaecosystem";
import { SectionHeading } from "./SectionHeading";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function Businesses() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="businesses" className="bg-white py-24 md:py-32">
      <div className="section-shell">
        <SectionHeading
          index="04"
          eyebrow="Our Businesses"
          title="The Diversified Eli Haddasa Ecosystem."
        />

        <div ref={revealRef} className="reveal relative mt-16">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-black/10 lg:block"
            aria-hidden="true"
          />
          <ol className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-x-6 lg:gap-y-0">
            {hadassaEcosystem.map((step) => (
              <li key={step.id} className="relative pl-6 lg:pl-0">
                {/* <div className="absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-sky-500 bg-sky-500 lg:relative lg:left-auto lg:top-auto lg:mb-6 lg:translate-x-0" /> */}
                <span className="font-mono text-xs text-sky-500">
                  {step.index}
                </span>
                <h3 className="mt-2 font-display text-base font-semibold text-sky-500">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[15rem] text-[13px] leading-relaxed text-black">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
