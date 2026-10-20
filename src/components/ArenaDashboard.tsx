import { useMemo, useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { arenadashboard, arenadashboardFilters } from "../data/arenadashboard";
import { SectionHeading } from "./SectionHeading";
import type { ArenaDashboardItem } from "../types";

function ArenaDashboardCard({
  arenadashboard,
}: {
  arenadashboard: ArenaDashboardItem;
}) {
  return (
    <article className="group relative flex flex-col overflow-hidden border border-white/10 transition-colors duration-300 hover:border-sky-500/50">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={arenadashboard.image}
          alt={`${arenadashboard.name} — ${arenadashboard.category} project in ${arenadashboard.location}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/10 to-transparent" />

        <span className="absolute left-4 top-4 border border-white/20 bg-ink-900/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest2 text-bone backdrop-blur-sm">
          {arenadashboard.tournamenttitle}
        </span>

        <span className="absolute right-4 top-4 flex h-9 w-9 -translate-y-2 items-center justify-center border border-white/20 bg-ink-900/70 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4 text-sky-500" strokeWidth={2} />
        </span>

        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="font-display text-lg font-bold text-bone">
            {arenadashboard.name}
          </h3>
          <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-bone-dim">
            <MapPin className="h-8 w-8 text-sky-500" />
            {arenadashboard.location} &middot; {arenadashboard.eventdate}
          </div>
        </div>
      </div>
      <div className="max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:border-white/10 group-hover:opacity-100">
        <p className="p-5 text-[13px] leading-relaxed text-bone-dim">
          {arenadashboard.sporttype} &middot; {arenadashboard.bouttype}
        </p>
      </div>
      <div className="max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:border-white/10 group-hover:opacity-100">
        <p className="p-5 text-[13px] leading-relaxed text-bone-dim">
          {arenadashboard.eventdescription}
        </p>
      </div>
      <div className="max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:border-white/10 group-hover:opacity-100">
        <p className="p-5 text-[13px] leading-relaxed text-bone-dim">
          {arenadashboard.maineventbout}
        </p>
      </div>

      {/*Event Details*/}
      <div className="flex items-center gap-2 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4 max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-80 group-hover:border-white/10 group-hover:opacity-100">
        <div className="space-y-1 mb-4 mt-4 p-5">
          {arenadashboard.eventdetails.slice(0, 6).map((spec, idx) => (
            <div key={idx} className="flex justify-between text-sm">
              <span className="font-bold text-[13px] text-bone">
                {spec.label}:
              </span>
              <span className="font-thin text-[13px] leading-relaxed text-bone-dim">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/*Challenger Tier*/}
      <div className="flex items-center gap-1 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4 max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-80 group-hover:border-white/10 group-hover:opacity-100">
        {/* <h4 className="text-[13px] font-semibold text-bone">Challenger</h4> */}
        <div className="space-y-1 mb-4 mt-4 p-5">
          {arenadashboard.thechallengertier.slice(0, 5).map((spec, idx) => (
            <div key={idx} className="flex justify-between text-sm">
              <span className="font-bold text-[13px] text-bone">
                {spec.label}:
              </span>
              <span className="font-thin text-[13px] leading-none text-bone-dim">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/*Contender Tier*/}
      <br />
      <div className="flex items-center gap-1 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4 max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-80 group-hover:border-white/10 group-hover:opacity-100">
        {/* <h4 className="text-sm font-semibold text-bone">Contender</h4> */}
        <div className="space-y-1 mb-4 mt-4 p-5">
          {arenadashboard.thetitlecontendertier.slice(0, 6).map((spec, idx) => (
            <div key={idx} className="flex justify-between text-sm">
              <span className="font-bold text-[13px] text-bone">
                {spec.label}:
              </span>
              <span className="font-thin text-[13px] leading-none text-bone-dim">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/*Public Event Ticket Price*/}
      <div className="flex items-center gap-1 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4 max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-60 group-hover:border-white/10 group-hover:opacity-100 p-2">
        <h4 className="text-sm font-semibold text-bone">Event Ticket Price</h4>

        <div className="font-thin text-[13px] leading-none text-bone-dim">
          {arenadashboard.publicticketprice}
        </div>
      </div>
      {/*Total capital Targeted*/}
      <div className="flex items-center gap-1 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4 max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-60 group-hover:border-white/10 group-hover:opacity-100 p-2">
        <h4 className="text-sm font-semibold text-bone">
          Total capital Targeted
        </h4>

        <div className="font-thin text-[13px] leading-none text-bone-dim">
          {arenadashboard.totalcapitaltargeted}
        </div>
      </div>
      {/*Total capital Raised*/}
      <div className="flex items-center gap-1 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4 max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-60 group-hover:border-white/10 group-hover:opacity-100 p-2">
        <h4 className="text-sm font-semibold text-bone">
          Total capital Raised
        </h4>

        <div className="font-thin text-[13px] leading-none text-bone-dim">
          {arenadashboard.totalcapitalraised}
        </div>
      </div>
      {/*Partnerships & Affiliates*/}
      <div className="flex items-center gap-1 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4 max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-60 group-hover:border-white/10 group-hover:opacity-100 p-2">
        <h4 className="text-sm font-semibold text-bone">
          Partnerships & Affiliates
        </h4>

        <div className="font-thin text-[13px] leading-none text-bone-dim">
          {arenadashboard.partnershipsAndaffiliates}
        </div>
      </div>
      {/*Guests & Invitations*/}
      <div className="flex items-center gap-1 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4 max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-60 group-hover:border-white/10 group-hover:opacity-100 p-2">
        <h4 className="text-sm font-semibold text-bone">
          Guests & Invitations
        </h4>

        <div className="font-thin text-[13px] leading-none text-bone-dim">
          {arenadashboard.guestInvitations}
        </div>
      </div>
      {/*Targeted Projects*/}
      <div className="flex items-center gap-4 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4 max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-60 group-hover:border-white/10 group-hover:opacity-100">
        <h4 className="ml-2 text-sm font-semibold text-bone">
          Targeted Projects
        </h4>
        <div className="space-y-1 mb-4 mt-4 p-5">
          {arenadashboard.targetprojectname.slice(0, 5).map((spec, idx) => (
            <div key={idx} className="flex justify-between text-sm">
              <span className="font-bold text-[13px] text-bone">
                {spec.label}:
              </span>
              <span className="font-thin text-[13px] leading-relaxed text-bone-dim">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/*Project Concept*/}
      <div className="flex items-stretch gap-1 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4 max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-80 group-hover:border-white/10 group-hover:opacity-100">
        <h4 className="ml-2 text-sm font-semibold text-bone">
          Project Concept
        </h4>

        <div className="text-[13px] leading-none text-bone-dim mb-4 p-5 space-y-1">
          {arenadashboard.projectconceptandeventdetailedDescription}
        </div>
      </div>
      {/*Impact Category */}
      <div className="flex items-stretch gap-1 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4 max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-80 group-hover:border-white/10 group-hover:opacity-100">
        <h4 className="ml-2 text-sm font-semibold text-bone">
          Impact Category
        </h4>

        <div className="text-[13px] leading-none text-bone-dim mb-4 p-5 space-y-1">
          {arenadashboard.impactcategory}
        </div>
      </div>
      {/*Impact Category Description */}
      <div className="flex items-stretch gap-1 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4 max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-80 group-hover:border-white/10 group-hover:opacity-100">
        <h4 className="ml-2 text-sm font-semibold text-bone">
          Impact Category Details
        </h4>

        <div className="text-[13px] leading-none text-bone-dim mb-4 p-5 space-y-1">
          {arenadashboard.impactcategorydescription}
        </div>
      </div>
      {/*Financial Yield Estimate */}
      <div className="flex items-stretch gap-1 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4 max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-80 group-hover:border-white/10 group-hover:opacity-100">
        <h4 className="ml-2 text-sm font-semibold text-bone">
          Financial Yield Estimate
        </h4>

        <div className="text-[13px] leading-none text-bone-dim mb-4 p-5 space-y-1">
          {arenadashboard.financialyieldestimate}
        </div>
      </div>
    </article>
  );
}

export function ArenaDashboard() {
  const [filter, setFilter] =
    useState<(typeof arenadashboardFilters)[number]>("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? arenadashboard
        : arenadashboard.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="arenadashboard" className="bg-ink-900 py-24 md:py-32">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            index="02"
            eyebrow="The Arena Dashboard"
            title="Secure Your Seat in the Arena."
            description="Track upcoming duels, review historical legacies, and explore the infrastructure footprints funded by our global leaders."
          />
        </div>

        <div
          className="mt-10 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter events by category"
        >
          {arenadashboardFilters.map((f) => (
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
          {filtered.map((arenadashboard) => (
            <ArenaDashboardCard
              key={arenadashboard.id}
              arenadashboard={arenadashboard}
            />
          ))}
        </div>
        <br />
      </div>
    </section>
  );
}
