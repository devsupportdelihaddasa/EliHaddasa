import {
  ActivityIcon,
  Calendar,
  CheckSquare,
  LandPlotIcon,
  MapPin,
  PersonStanding,
} from "lucide-react";
import { globalsupply } from "../data/globalsupply";
import { SectionHeading } from "./SectionHeading";
import { useScrollReveal } from "../hooks/useScrollReveal";
import type { GlobalSupplyItem } from "../types";
import { Button } from "./Button";

const globalSupplyChainandLocalization = [
  {
    title: "Agricultural Infrastructure as a Service (Ag-IaaS)",
    description:
      "We provide the physical infrastructure (leased land) and legal framework (entity status) for others to execute production.",
    //   progress: 65,
    //   target: '2030',
  },

  {
    title: "Tariff Avoidance via Domestic Partnerships",
    description:
      'Shift from an "exporter" model to a domestic agricultural or manufacturing partnership. Use our local entity footprint to eliminate trade friction.',
    //   progress: 65,
    //   target: '2030',
  },
  {
    title: "Asset-Light Land Utilization",
    description:
      "Gain immediate access to strategically located leased agricultural and manufacturing land without the bureaucratic delays of cross-border acquisition.",
    //   progress: 78,
    //   target: '2028',
  },
  {
    title: "Industrial Localization",
    description:
      "Move from importing finished goods to localized assembly loops,making your product legally domestic while boosting local employment.",
    //   progress: 52,
    //   target: '2032',
  },
  {
    title: "The Hubs",
    description:
      "We facilitate onshore assembly (SKD/CKD) and agro-processing, domesticating supply chains with absolute regulatory compliance.",
    //   progress: 100,
    //   target: 'Ongoing',
  },
  {
    title: "Storage-as-a-Service (STaaS) Localization",
    description:
      "Our Storage-as-a-Service (STaaS) framework resolves a major point of friction for international trade networks.",
    //   progress: 100,
    //   target: 'Ongoing',
  },
  {
    title: "Storage-as-a-Service (STaaS) Bonded Warehousing (Logistics)",
    description:
      "International enterprises can store massive volumes of raw or processed commodities, & business equipment via our Solar Cold-Storage or Dry-Storage onshore—entirely tariff-exempt until the exact moment of domestic sale",
    //   progress: 100,
    //   target: 'Ongoing',
  },
];

function GlobalSupplyRow({ globalsupply }: { globalsupply: GlobalSupplyItem }) {
  const Icon = globalsupply.icon;

  return (
    <div
      tabIndex={0}
      className="group relative grid grid-cols-1 gap-4 border-b border-white/10 py-8 pl-5 transition-colors duration-300 ease-premium hover:bg-ink-800/60 focus-visible:bg-ink-800/60 focus-visible:outline-none sm:grid-cols-12 sm:items-center sm:gap-6 sm:px-6 sm:pl-9"
    >
      <span className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-sky-500 transition-transform duration-400 ease-premium group-hover:scale-y-100 group-focus-visible:scale-y-100" />

      <span className="font-mono text-xs text-bone-muted transition-colors duration-300 group-hover:text-sky-500 group-focus-visible:text-sky-500 sm:col-span-1">
        {globalsupply.id}
      </span>
      <span className="font-mono text-xs text-bone-muted transition-colors duration-300 group-hover:text-sky-500 group-focus-visible:text-sky-500 sm:col-span-1">
        {globalsupply.category}
      </span>

      <div className="flex items-center gap-4 transition-transform duration-300 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 transition-all duration-300 ease-premium group-hover:-rotate-3 group-hover:border-sky-500 group-hover:bg-sky-500/10 group-focus-visible:border-sky-500">
          <Icon className="h-4 w-4 text-sky-500" strokeWidth={1.75} />
        </span>
        <h2 className="font-display text-base font-semibold text-bone">
          {globalsupply.title}
        </h2>
      </div>
      <div className="flex items-center gap-4 transition-transform duration-300 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 transition-all duration-300 ease-premium group-hover:-rotate-3 group-hover:border-sky-500 group-hover:bg-sky-500/10 group-focus-visible:border-sky-500">
          <MapPin className="h-4 w-4 text-sky-500" strokeWidth={1.75} />
        </span>
        <h2 className="font-display text-base font-semibold text-bone">
          {globalsupply.location}
        </h2>
      </div>
      <div className="flex items-center gap-4 transition-transform duration-300 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 transition-all duration-300 ease-premium group-hover:-rotate-3 group-hover:border-sky-500 group-hover:bg-sky-500/10 group-focus-visible:border-sky-500">
          <Calendar className="h-4 w-4 text-sky-500" strokeWidth={1.75} />
        </span>
        <h2 className="font-display text-base font-semibold text-bone">
          {globalsupply.location}
        </h2>
      </div>

      <div className="flex items-center justify-between sm:col-span-2 sm:justify-end sm:gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 transition-all duration-300 ease-premium group-hover:-rotate-3 group-hover:border-sky-500 group-hover:bg-sky-500/10 group-focus-visible:border-sky-500">
          <CheckSquare className="h-4 w-4 text-sky-500" strokeWidth={1.75} />
        </span>
        <h2 className="font-display text-base font-semibold text-bone">
          {globalsupply.spec}
        </h2>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 transition-all duration-300 ease-premium group-hover:-rotate-3 group-hover:border-sky-500 group-hover:bg-sky-500/10 group-focus-visible:border-sky-500">
          <ActivityIcon className="h-4 w-4 text-sky-500" strokeWidth={1.75} />
        </span>
        <h2 className="font-display text-base font-semibold text-bone">
          {globalsupply.status}
        </h2>
        {/* <span className="hidden font-mono text-[10px] uppercase tracking-widest2 text-bone-muted transition-colors duration-300 group-hover:text-amp md:inline">
          {globalsupply.spec}
        </span>
        <span className="flex h-4 w-4 items-center justify-center border border-transparent transition-all duration-300 ease-premium group-hover:border-white/15 group-focus-visible:border-white/15">
          <ArrowUpRight
            className="h-4 w-4 text-bone-muted transition-all duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amp group-focus-visible:text-amp"
            strokeWidth={2}
          />
        </span> */}
      </div>
      <div className="flex items-center gap-4 transition-transform duration-300 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4">
        <h2 className="text-bone-muted">{globalsupply.description}</h2>
      </div>
      <div className="flex items-center gap-4 transition-transform duration-300 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 transition-all duration-300 ease-premium group-hover:-rotate-3 group-hover:border-sky-500 group-hover:bg-sky-500/10 group-focus-visible:border-sky-500">
          <LandPlotIcon className="h-4 w-4 text-sky-500" strokeWidth={1.75} />
        </span>
        <h4 className="text-sm font-semibold text-bone mb-2">Land Size</h4>

        <div className="text-sm text-gray-500 mb-2">
          {globalsupply.available_land_hectares} hectares
        </div>
      </div>
      <div className="flex items-center gap-4 transition-transform duration-300 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 transition-all duration-300 ease-premium group-hover:-rotate-3 group-hover:border-sky-500 group-hover:bg-sky-500/10 group-focus-visible:border-sky-500">
          <Calendar className="h-4 w-4 text-sky-500" strokeWidth={1.75} />
        </span>
        <h4 className="text-sm font-semibold text-bone mb-2">
          Land Availability:
        </h4>

        <div className="text-sm text-gray-500 mb-2">
          {globalsupply.availabilityDate}
        </div>
      </div>
      <div className="flex items-center gap-4 transition-transform duration-300 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 transition-all duration-300 ease-premium group-hover:-rotate-3 group-hover:border-sky-500 group-hover:bg-sky-500/10 group-focus-visible:border-sky-500">
          <PersonStanding className="h-4 w-4 text-sky-500" strokeWidth={1.75} />
        </span>
        <h4 className="text-sm font-semibold text-bone mb-2">
          Worker Availability:
        </h4>
        <div className="text-sm text-gray-500 mb-2">
          {globalsupply.availableworkers} - Available Trained Workforce
        </div>
      </div>
      <div className="flex items-center gap-4 transition-transform duration-300 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4">
        <h4 className="text-sm font-semibold text-bone mb-2">
          Soil & Climate Profile:
        </h4>

        <div className="text-sm text-gray-500 mb-4">
          {globalsupply.soil_and_climate_profile}
        </div>
      </div>
      <div className="flex items-center gap-4 transition-transform duration-300 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4">
        <h4 className="text-sm font-semibold text-bone mb-2">
          Ideal Industrial Sectors:
        </h4>

        <div className="text-sm text-gray-500 mb-4">
          {globalsupply.ideal_industrial_sectors}
        </div>
      </div>
      <div className="flex items-center gap-4 transition-transform duration-300 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4">
        <h4 className="text-sm font-semibold text-bone mb-2">
          Ideal High Value Products / Crops:
        </h4>

        <div className="text-sm text-gray-500 mb-4">
          {globalsupply.ideal_high_value_products_or_crops}
        </div>
      </div>

      <div className="flex items-center gap-4 transition-transform duration-300 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4">
        <h4 className="text-sm font-semibold text-bone mb-2">
          Target Buyer Profile:
        </h4>

        <div className="text-sm text-gray-500 mb-2">
          {globalsupply.target_buyer_profile}
        </div>
      </div>
      <div className="flex items-center gap-4 transition-transform duration-300 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4">
        <h4 className="text-sm font-semibold text-bone mb-2">
          Client Operational Model:
        </h4>

        <div className="text-sm text-gray-500 mb-2">
          {globalsupply.client_operational_model}
        </div>
      </div>
      <div className="flex items-center gap-4 transition-transform duration-300 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4">
        <h4 className="text-sm font-semibold text-bone mb-2">
          Haddasa Turnkey Services:
        </h4>

        <div className="text-sm text-gray-500 mb-2">
          {globalsupply.hadassa_turnkey_services}
        </div>
      </div>
      <div className="flex items-center gap-4 transition-transform duration-300 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4">
        <h4 className="text-sm font-semibold text-bone mb-2">
          Featured Creative Catalysts And Knowledge Architects:
        </h4>

        <div className="text-sm text-gray-500 mb-2">
          {globalsupply.featured_creative_catalysts_knowledge_Architects}
        </div>
      </div>
      <div className="flex items-center gap-4 transition-transform duration-300 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4">
        <h4 className="text-sm font-semibold text-bone mb-2">
          Allocation Status:
        </h4>

        <div className="text-sm text-gray-500 mb-2">
          {globalsupply.allocation_status}
        </div>
      </div>
      <div className="flex items-center gap-4 transition-transform duration-300 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4">
        <h4 className="text-sm font-semibold text-bone mb-2">
          Compliance & Certifications:
        </h4>

        <div className="text-sm text-gray-500 mb-2">
          {globalsupply.complianceCertifications}
        </div>
        <Button as="a" href="#" variant="primary">
          Inquire
        </Button>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-sky-500/15 via-transparent to-transparent" />
    </div>
  );
}

export function GlobalSupply() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="globalsupply" className="bg-ink-900 py-24 md:py-32">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            index="05"
            eyebrow="Global Supply Operations"
            title="Renovating Supply Chains. Repairing Trade Routes."
            description="We assist international businesses in bypassing high import tariffs
            and regulatory friction. By leveraging our leased land assets across
            the world, storage facilities and domestic entity status, we legally transform complex
            cross-border trade into efficient domestic production and localized
            manufacturing agreements."
          />
        </div>
        <h3 className="text-2xl font-semibold text-bone mb-2 mt-8">
          Onshore Compliance. Seamless Market Entry.
        </h3>
        <br />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {globalSupplyChainandLocalization.map((item) => (
            <div
              key={item.title}
              className="group bg-slate-100 p-6 transition-colors duration-300 mt-2 mr-2"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 ">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm ">{item.description}</p>
            </div>
          ))}
        </div>
        <br />
        <h3 className="text-2xl font-semibold text-bone mb-2 mt-8">
          Global Supply Operations Availability & Activity
        </h3>
        <div ref={revealRef} className="reveal mt-14 border-t border-white/10">
          {globalsupply.map((globalsupply) => (
            <GlobalSupplyRow
              key={globalsupply.id}
              globalsupply={globalsupply}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
