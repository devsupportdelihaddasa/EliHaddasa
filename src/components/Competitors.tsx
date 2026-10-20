import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Globe,
  Linkedin,
  Mail,
} from "lucide-react";
import { competitors, competitorsFilters } from "../data/competitors";
import { SectionHeading } from "./SectionHeading";
import type { CompetitorsItem } from "../types";

function CompetitorsCard({ competitors }: { competitors: CompetitorsItem }) {
  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: competitors.linkedin },
    { icon: Mail, label: "Email", href: competitors.email },
    { icon: Globe, label: "Company Website", href: competitors.companywebsite },
  ];
  return (
    <article className="group relative flex flex-col overflow-hidden border border-white/10 transition-colors duration-300 hover:border-sky-500/50">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={competitors.image}
          alt={`${competitors.name} — ${competitors.category} project in ${competitors.position}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/10 to-transparent" />

        <span className="absolute left-4 top-4 border border-white/20 bg-ink-900/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest2 text-bone backdrop-blur-sm">
          {competitors.countryOfOrigin}
        </span>

        <span className="absolute right-4 top-4 flex h-9 w-9 -translate-y-2 items-center justify-center border border-white/20 bg-ink-900/70 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4 text-sky-500" strokeWidth={2} />
        </span>

        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="font-display text-lg font-bold text-bone">
            {competitors.name}
          </h3>
          <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-bone-dim">
            <BriefcaseBusiness className="h-8 w-8 text-sky-500" />
            {competitors.position} &middot; {competitors.industryField}
          </div>
        </div>
      </div>
      <div className="p-5 flex items-center gap-4 transition-transform duration-300 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 transition-all duration-300 ease-premium group-hover:-rotate-3 group-hover:border-sky-500 group-hover:bg-sky-500/10 group-focus-visible:border-sky-500">
          <div className="ml-12 mt-6 flex items-center gap-3">
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
          {/* <a
            href={competitors.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-4 w-4 text-sky-500" strokeWidth={1.75} />
          </a>
        </span>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 transition-all duration-300 ease-premium group-hover:-rotate-3 group-hover:border-sky-500 group-hover:bg-sky-500/10 group-focus-visible:border-sky-500">
          <a href={competitors.email} target="_blank" rel="noopener noreferrer">
            <Mail className="h-4 w-4 text-sky-500" strokeWidth={1.75} />
          </a>
        </span>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 transition-all duration-300 ease-premium group-hover:-rotate-3 group-hover:border-sky-500 group-hover:bg-sky-500/10 group-focus-visible:border-sky-500">
          <a
            href={competitors.companywebsite}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe className="h-4 w-4 text-sky-500" strokeWidth={1.75} />
          </a> */}
        </span>
      </div>
      {/*Company role and Name*/}
      <div className="max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:border-white/10 group-hover:opacity-100">
        <p className="p-5 text-[13px] leading-relaxed text-bone-dim">
          {competitors.position} &middot; {competitors.companyname}
        </p>
      </div>
      {/* <div className="max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:border-white/10 group-hover:opacity-100">
        <p className="p-5 text-[13px] leading-relaxed text-bone-dim">
          {competitors.companywebsite}
        </p>
      </div> */}
      {/*Nationality*/}
      <div className="flex items-stretch gap-1 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4 max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-80 group-hover:border-white/10 group-hover:opacity-100">
        <h4 className="ml-2 text-sm font-semibold text-bone">About Company</h4>

        <div className="text-[13px] leading-none text-bone-dim mb-4 p-5 space-y-1">
          {competitors.companydescription}
        </div>
      </div>
      {/*Bio*/}
      {/*Nationality*/}
      <div className="flex items-stretch gap-1 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4 max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-80 group-hover:border-white/10 group-hover:opacity-100">
        <h4 className="ml-2 text-sm font-semibold text-bone">Nationality</h4>

        <div className="text-[13px] leading-none text-bone-dim mb-4 p-5 space-y-1">
          {competitors.nationality}
        </div>
      </div>
      {/*Bio*/}
      <div className="flex items-stretch gap-1 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4 max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-80 group-hover:border-white/10 group-hover:opacity-100">
        <h4 className="ml-2 text-sm font-semibold text-bone">Bio</h4>
        <div className="text-[13px] leading-none text-bone-dim mb-4 p-5 space-y-1">
          {competitors.bio}
        </div>
      </div>

      {/*Chosen Impact Pillars*/}
      <div className="flex items-stretch gap-1 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4 max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-80 group-hover:border-white/10 group-hover:opacity-100">
        <h4 className="ml-2 text-sm font-semibold text-bone">
          Chosen Impact Pillars
        </h4>

        <div className="text-[13px] leading-none text-bone-dim mb-4 p-5 space-y-1">
          {competitors.chosenImpactPillar}
        </div>
      </div>
    </article>
  );
}

export function Competitors() {
  const [filter, setFilter] =
    useState<(typeof competitorsFilters)[number]>("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? competitors
        : competitors.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="competitors" className="bg-ink-900 py-24 md:py-32">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            index="03"
            eyebrow="Competitors & Investor Profiles"
            title="Meet the Eli Haddasa Gladiators."
            description="The executives, founders, venture capitalists and investors stepping out of the boardroom and into the arena to sweat for global renewal."
          />
        </div>
        <div
          className="mt-10 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter competitors by category"
        >
          {competitorsFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`border px-4 py-2 font-mono text-[11px] uppercase tracking-widest2 transition-colors duration-300 ${
                filter === f
                  ? "border-sky-500 bg-sky-500 text-ink-900"
                  : "border-white/15 text-bone-dim hover:border-white/40 hover:text-bone"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((competitors) => (
            <CompetitorsCard key={competitors.id} competitors={competitors} />
          ))}
        </div>
        <br />
      </div>
    </section>
  );
}
