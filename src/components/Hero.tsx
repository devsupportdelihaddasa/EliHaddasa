import { ArrowDown, PersonStanding } from "lucide-react";
import { Button } from "./Button";
import { CircuitTrace } from "./CircuitTrace";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-20">
      <div
        className="absolute inset-0 bg-circuit opacity-10 sm:opacity-20"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -right-40 top-0 h-[700px] w-[700px] opacity-30 sm:opacity-45 motion-safe:animate-drift">
        <CircuitTrace className="h-full w-full" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-500-900/0 via-ink-900/0 to-ink-900" />

      <div className="section-shell relative z-10 grid min-h-[calc(100vh-5rem)] grid-cols-1 items-center gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-0">
        <div className="lg:col-span-7">
          <div className="hero-in hero-in-1 flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-sky-500 motion-safe:animate-ping2" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500" />
            </span>
            <span className="eyebrow text-1xl text-sky-500">
              Executive Arena | Cross-Industry Supply Chain | High-Yield Impact
            </span>
          </div>
          <img
            className="mt-7"
            src="/legu.png"
            alt="legu"
            height={250}
            width={200}
          ></img>
          <h1 className="hero-in hero-in-2 mt-5 font-display text-clamp-hero font-black leading-[0.95] tracking-tight text-sky-500">
            Grounded
            <br />
            In <span className="text-bg-blue-700">ELI.</span>
          </h1>

          <p className="hero-in hero-in-3 mt-7 max-w-md text-[15px] leading-relaxed text-black md:text-base">
            We transform corporate grit into highly lucrative, ring-fenced
            infrastructure that actively repairs communities while delivering
            compounding commercial yields to businesses&mdash; An elite global
            "Plug-and-Play" Sports and Entertainment Hub and Sovereign Base
            Ecosystem.
          </p>

          <div className="hero-in hero-in-4 mt-10 flex flex-col gap-4 sm:flex-row">
            <Button as="a" href="#globalsupply" variant="primary">
              Global Supply
            </Button>
            <Button as="a" href="#about" variant="primary">
              {/* <Button as="a" href="#services" variant="secondary"> */}
              Learn More
            </Button>
          </div>

          <div className="hero-in hero-in-5 mt-14 grid grid-cols-3 border-t border-sky-500 pt-7">
            <div className="pr-2">
              <p className="font-display text-2xl font-bold text-sky-500">0</p>
              <p className="mt-1 font-mono text-[9px] uppercase leading-relaxed tracking-widest2 text-black sm:text-[10px]">
                Capital Tournaments Hosted
              </p>
            </div>
            <div className="border-l border-white/10 px-4 sm:px-8">
              <p className="font-display text-2xl font-bold text-sky-500">0</p>
              <p className="mt-1 font-mono text-[9px] uppercase leading-relaxed tracking-widest2 text-black sm:text-[10px]">
                Mobile Sovereign Sandbox Fundathons
              </p>
            </div>
            <div className="border-l border-white/10 pl-4 sm:pl-8">
              <p className="font-display text-2xl font-bold text-sky-500">0</p>
              <p className="mt-1 font-mono text-[9px] uppercase leading-relaxed tracking-widest2 text-black sm:text-[10px]">
                Legacy Projects Deployed
              </p>
            </div>
          </div>
        </div>

        <div className="hero-in hero-in-3 relative lg:col-span-5">
          <div className="corner-frame relative aspect-[4/5] w-full overflow-hidden">
            <div className="h-full w-full motion-safe:animate-heroReveal">
              <img
                src="https://images.unsplash.com/photo-1785528469340-19d53f284d29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D=crop"
                alt="Electrical engineer inspecting an industrial switchgear panel"
                className="h-full w-full scale-[1.01] object-cover grayscale-[15%] transition-transform duration-[1200ms] ease-premium hover:scale-[1.04]"
                loading="eager"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />

            <div className="hero-in hero-in-5 absolute left-4 top-4 flex items-center gap-2 border border-white/15 bg-ink-900/70 px-3 py-1.5 backdrop-blur-sm">
              <PersonStanding
                className="h-4 w-4 text-sky-500"
                strokeWidth={2.5}
              />
              <span className="font-mono text-[10px] uppercase tracking-widest2 text-bone">
                Upcoming Capital Tournament
              </span>
            </div>

            <div className="hero-in hero-in-6 absolute bottom-4 right-4 border border-sky-500/15 bg-sky-500/70 px-3 py-1.5 backdrop-blur-sm">
              <span className="font-mono text-[10px] uppercase tracking-widest2 text-bone">
                Football&nbsp;/&nbsp;Indoor
              </span>
            </div>
          </div>

          <div className="hero-in hero-in-6 hairline absolute bottom-6 left-6 z-10 hidden w-48 bg-green-200/95 p-4 backdrop-blur-sm sm:block">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-sky-500">
              05 Dec 2026
            </p>
            <p className="mt-1 text-xs leading-relaxed text-black">
              Football Fundathon - Fintech CEO's vs Saas CEO's
            </p>
          </div>
        </div>
      </div>

      <a
        href="#stats"
        aria-label="Scroll to statistics"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-bone-muted transition-colors duration-300 hover:text-sky-500 lg:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest2">
          Scroll
        </span>
        <ArrowDown className="h-4 w-4 motion-safe:animate-bounce" />
      </a>
    </section>
  );
}
