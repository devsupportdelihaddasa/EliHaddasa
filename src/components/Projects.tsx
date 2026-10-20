import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Building,
  Cloud,
  Coins,
  Computer,
  Construction,
  Dam,
  Droplet,
  Handshake,
  House,
  MapPin,
  Trees,
  Turtle,
  UtilityPole,
  Zap,
} from "lucide-react";
import { projects, projectFilters } from "../data/projects";
import { SectionHeading } from "./SectionHeading";
import type { ProjectItem } from "../types";

{
  /* The Eli Hadassa Circular Water Network Metrics*/
}
const circularWaterNetworksustainabilityMetrics = [
  {
    id: "1",
    title: "Water Recycling Rate",
    value: 92,
    unit: "%",
    description:
      "All agricultural and industrial processing wastewater is safely captured, purified, and repurposed",
    icon: Droplet,
  },
  {
    id: "2",
    title: "Dams Constructed & Rehabilitated",
    value: 3,
    unit: "",
    description:
      "Ecosystem Micro-Dams engineered to stabilize water tables and secure local smallholder agricultural irrigation.",
    // icon: 'Droplets',
    icon: Dam,
    // trend: "stable",
  },
  {
    id: "3",
    title: "Total Recycled Volume",
    value: 100,
    unit: "%",
    description:
      "Water utilized across our operational processing packhouses is routed through closed-loop recycling networks",
    icon: Droplet,
  },
];

{
  /* The Eli Hadassa Renewable Energy & Low-Carbon Footprint Metrics*/
}
const renewablenergyandlowcarbonfootprintsustainabilityMetrics = [
  {
    id: "1",
    title: "Renewable Energy Usage",
    value: 100,
    unit: "%",
    description:
      "Eli Haddasa localized storage facilities, processing hubs, and sports camps run completely off-grid",
    icon: UtilityPole,
  },
  {
    id: "2",
    title: "Clean Operations",
    value: 4,
    unit: "",
    description:
      "Major Facilities powered directly by our on-site solar micro-grid infrastructures.",
    icon: Zap,
  },
  {
    id: "3",
    title: "Carbon Emissions Reduction",
    value: 42,
    unit: "%",
    description:
      "Reduction in projected operational CO₂ emissions compared to traditional, grid-tied industrial and logistics frameworks since initial site planning.",
    icon: Cloud,
  },
];

{
  /* The Eli Hadassa Sports Infrastructure & Tribal Peace Accords*/
}
const sportsinfrastructureandtribalpeaceaccordssustainabilityMetrics = [
  {
    id: "1",
    title: "Stadiums & Eco-Arenas Built",
    value: 1,
    unit: "",
    description:
      "Flagship Multi-Sport Indoor Eco-Complex successfully launched to host regional futsal and tennis tournaments.",
    icon: Building,
  },
  {
    id: "2",
    title: "Tribal Restorations & Accords",
    value: 2,
    unit: "",
    description:
      "Bordering Communities Stabilized. By bringing traditional councils together into joint-venture equity structures, we have permanently replaced historic boundary disputes with shared corporate profits.",
    icon: Handshake,
  },
];

{
  /* The Eli Hadassa Humanitarian Protection & Land Renewal*/
}

const humanitarianprotectionandlandRenewalsustainabilityMetrics = [
  {
    id: "1",
    title: "Shelters Provided",
    value: 1,
    unit: "",
    description:
      "Safe Haven Village Anchor fully constructed, providing secure physical, psychological, and vocational sanctuary slots for survivors of abuse.",
    icon: House,
  },
  {
    id: "2",
    title: "Lands Renewed & Rehabilitated",
    value: 1500,
    unit: "",
    description:
      "Hectares of degraded, over-farmed, or neglected soil actively restored into highly productive agro-industrial parks and organic food zones.",
    icon: Trees,
  },
  {
    id: "3",
    title: "Total Habitat Restored",
    value: 250,
    unit: "",
    description:
      "Hectares of core boundary land re-established exclusively as natural, secure wildlife habitats and indigenous sanctuaries.",
    icon: Turtle,
  },
];

{
  /* The Eli Hadassa Localised Employment & Community Investment*/
}

const localisedemploymentandcommunityinvestmentsustainabilityMetrics = [
  {
    id: "1",
    title: "Local Workforce Percentage",
    value: 88,
    unit: "%",
    description:
      "Of our total operational workforce is hired directly from the immediate township and rural communities surrounding our project nodes.",
    icon: Construction,
  },
  {
    id: "2",
    title: "Rural Communities Developed",
    value: 3,
    unit: "",
    description:
      "Key Municipal Zones systematically advanced through solar electrification, digital tech labs, and wastewater infrastructure.",
    icon: Computer,
  },
  {
    id: "3",
    title: "Community Investment Margin",
    value: 10,
    unit: "%",
    description:
      "Corporate Gross Equity permanently ring-fenced inside our independent local Community Trusts.",
    icon: Coins,
  },
];

const environmentalCommitments = [
  {
    title: "Net-Zero Industrial Circularity Plan",
    description:
      "Eliminating raw manufacturing waste across all localized processing and storage loops by transforming 100% of cosmetic organic byproducts into essential cosmetic oil compounds.",
    progress: 75,
    target: "2030",
  },
  {
    title: "Closed-Loop Regional Water Security Mandate",
    description:
      "Deploying decentralized wastewater networks across our out-grower agricultural lines to guarantee that zero synthetic industrial runoff ever touches Limpopo’s natural groundwater table.",
    progress: 85,
    target: "2030",
  },
  {
    title: "Solar Grid SADC Scaling Initiative",
    description:
      "Replicating our off-grid solar micro-grid blueprints across 10 separate transit corridors over the next 36 months to provide clean utility backup for global storage-as-a-service (STaaS) clients.",
    progress: 35,
    target: "2030",
  },
  //   {
  //     title: 'Full Mine Site Rehabilitation',
  //     description: 'Restoring all mining sites to natural ecosystems with native species and sustainable land use.',
  //     progress: 100,
  //     target: 'Ongoing',
  //   },
];

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="group relative flex flex-col overflow-hidden border border-white/10 transition-colors duration-300 hover:border-sky-500/50">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={`${project.name} — ${project.category} project in ${project.location}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/10 to-transparent" />

        <span className="absolute left-4 top-4 border border-white/20 bg-ink-900/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest2 text-bone backdrop-blur-sm">
          {project.category}
        </span>

        <span className="absolute right-4 top-4 flex h-9 w-9 -translate-y-2 items-center justify-center border border-white/20 bg-ink-900/70 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4 text-sky-500" strokeWidth={2} />
        </span>

        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="font-display text-lg font-bold text-bone">
            {project.name}
          </h3>
          <div className="mt-1.5 flex items-sky-500 gap-1.5 font-mono text-[11px] uppercase tracking-wide text-bone-dim">
            <MapPin className="h-8 w-8 text-sky-500" />
            {project.location} &middot;{project.projectactvity}
          </div>
        </div>
      </div>
      <div className="max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:border-white/10 group-hover:opacity-100">
        <p className="p-5 text-[13px] leading-relaxed text-bone-dim">
          {project.impact}
        </p>
      </div>
      {/*Environment Type*/}
      <div className="max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:border-white/10 group-hover:opacity-100">
        <p className="p-5 text-[13px] leading-relaxed text-bone-dim">
          {project.environment_type}
        </p>
      </div>
      {/*Land Size in Hectares */}
      <div className="flex items-stretch gap-1 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4 max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-80 group-hover:border-white/10 group-hover:opacity-100">
        <h4 className="ml-2 text-sm font-semibold text-bone">
          Land Size in Hectares
        </h4>
        <div className="text-[13px] leading-none text-bone-dim mb-4 p-5 space-y-1">
          {project.land_size_hectares}
        </div>
      </div>
      {/*Project Activity*/}
      <div className="flex items-stretch gap-1 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4 max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-80 group-hover:border-white/10 group-hover:opacity-100">
        <h4 className="ml-2 text-sm font-semibold text-bone">
          Project Activity
        </h4>
        <div className="text-[13px] leading-none text-bone-dim mb-4 p-5 space-y-1">
          {project.projectactvity}
        </div>
      </div>
      {/*Social Impact*/}
      <div className="flex items-stretch gap-1 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4 max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-80 group-hover:border-white/10 group-hover:opacity-100">
        <h4 className="ml-2 text-sm font-semibold text-bone">Social Impact</h4>
        <div className="text-[13px] leading-none text-bone-dim mb-4 p-5 space-y-1">
          {project.social_impact}
        </div>
      </div>
      {/*Core Infrastractures*/}
      <div className="flex items-stretch gap-1 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4 max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-80 group-hover:border-white/10 group-hover:opacity-100">
        <h4 className="ml-2 text-sm font-semibold text-bone">
          Core Infrastractures
        </h4>
        <div className="text-[13px] leading-none text-bone-dim mb-4 p-5 space-y-1">
          {project.core_infrastructure}
        </div>
      </div>
      {/*Sustainability Metrics*/}
      <div className="flex items-center gap-4 ease-premium group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:col-span-4 max-h-0 overflow-hidden border-t border-white/0 opacity-0 transition-all duration-300 group-hover:max-h-60 group-hover:border-white/10 group-hover:opacity-100">
        <h4 className="ml-2 text-sm font-semibold text-bone">
          Sustainability Metrics
        </h4>
        <div className="space-y-1 mb-4 mt-4 p-5">
          {project.sustainability_metrics.slice(0, 5).map((spec, idx) => (
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
    </article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="sustainability" className="bg-ink-900 py-24 md:py-32">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            index="06"
            eyebrow="Sustainability"
            title="Our Sustainability Metrics."
            description="We are committed to creating projects that transform traditional
            business models, and create a cross-generational impact that
            permanently elevates rural, urban, and island communities."
          />
        </div>

        <br />
        <h2 className="font-display text-base font-semibold text-bone mb-4">
          Our Environmental Impact
        </h2>
        <p className="text-[13px] text-bone-muted mb-12 max-w-3xl">
          We measure and report our environmental performance transparently,
          driving continuous improvement across all operations.
        </p>
        {/* The Eli Hadassa Circular Water Network*/}
        <h3 className="text-2xl font-semibold text-bone mb-2">
          Circular Water Network
        </h3>
        <br />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {circularWaterNetworksustainabilityMetrics.map((item) => (
            <div
              key={item.title}
              className="group bg-slate-100 p-6 transition-colors duration-300 mt-2 mr-2"
            >
              <item.icon
                className="h-5 w-5 text-sky-500 transition-transform duration-300 group-hover:-translate-y-0.5 mb"
                strokeWidth={1.75}
              />
              <div className="text-4xl font-bold text-gray-900 mb-2 ">
                {item.value}
                {item.unit && (
                  <span className="text-2xl text-sky-500 ml-1">
                    {item.unit}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 ">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm ">{item.description}</p>
            </div>
          ))}
        </div>
        <br />
        {/* The Eli Hadassa Renewable Energy & Low-Carbon Footprint*/}
        <h3 className="mt-5 text-2xl font-semibold text-bone mb-2">
          Renewable Energy & Low-Carbon Footprint
        </h3>
        <br />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renewablenergyandlowcarbonfootprintsustainabilityMetrics.map(
            (item) => (
              <div
                key={item.title}
                className="group bg-slate-100 p-6 transition-colors duration-300 mt-2 mr-2"
              >
                <item.icon
                  className="h-5 w-5 text-sky-500 transition-transform duration-300 group-hover:-translate-y-0.5 mb"
                  strokeWidth={1.75}
                />
                <div className="text-4xl font-bold text-gray-900 mb-2 ">
                  {item.value}
                  {item.unit && (
                    <span className="text-2xl text-sky-500 ml-1">
                      {item.unit}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 ">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm ">{item.description}</p>
              </div>
            )
          )}
        </div>
        <br />
        {/* The Eli Hadassa Sports Infrastructure & Tribal Peace Accords*/}
        <h3 className="mt-5 text-2xl font-semibold text-bone mb-2">
          Sports Infrastructure & Tribal Peace Accords
        </h3>
        <br />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sportsinfrastructureandtribalpeaceaccordssustainabilityMetrics.map(
            (item) => (
              <div
                key={item.title}
                className="group bg-slate-100 p-6 transition-colors duration-300 mt-2 mr-2"
              >
                <item.icon
                  className="h-5 w-5 text-sky-500 transition-transform duration-300 group-hover:-translate-y-0.5 mb"
                  strokeWidth={1.75}
                />
                <div className="text-4xl font-bold text-gray-900 mb-2 ">
                  {item.value}
                  {item.unit && (
                    <span className="text-2xl text-sky-500 ml-1">
                      {item.unit}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 ">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm ">{item.description}</p>
              </div>
            )
          )}
        </div>
        <br />
        {/* Eli Haddasa Humanitarian Protection & Land Renewal*/}
        <h3 className="mt-5 text-2xl font-semibold text-bone mb-2">
          Humanitarian Protection & Land Renewal
        </h3>
        <br />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {humanitarianprotectionandlandRenewalsustainabilityMetrics.map(
            (item) => (
              <div
                key={item.title}
                className="group bg-slate-100 p-6 transition-colors duration-300 mt-2 mr-2"
              >
                <item.icon
                  className="h-5 w-5 text-sky-500 transition-transform duration-300 group-hover:-translate-y-0.5 mb"
                  strokeWidth={1.75}
                />
                <div className="text-4xl font-bold text-gray-900 mb-2 ">
                  {item.value}
                  {item.unit && (
                    <span className="text-2xl text-sky-500 ml-1">
                      {item.unit}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 ">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm ">{item.description}</p>
              </div>
            )
          )}
        </div>
        <br />
        {/* Eli Haddasa Localised Employment & Community Investment*/}
        <h3 className="mt-5 text-2xl font-semibold text-bone mb-2">
          Localised Employment & Community Investment
        </h3>
        <br />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {localisedemploymentandcommunityinvestmentsustainabilityMetrics.map(
            (item) => (
              <div
                key={item.title}
                className="group bg-slate-100 p-6 transition-colors duration-300 mt-2 mr-2"
              >
                <item.icon
                  className="h-5 w-5 text-sky-500 transition-transform duration-300 group-hover:-translate-y-0.5 mb"
                  strokeWidth={1.75}
                />
                <div className="text-4xl font-bold text-gray-900 mb-2 ">
                  {item.value}
                  {item.unit && (
                    <span className="text-2xl text-sky-500 ml-1">
                      {item.unit}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 ">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm ">{item.description}</p>
              </div>
            )
          )}
        </div>
        <br />
        {/* Environmental Commitments */}
        <h2 className="font-display text-base font-semibold text-bone mt-12 mb-4">
          Environmental Commitments
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {environmentalCommitments.map((item) => (
            <div
              key={item.title}
              className="group bg-slate-100 p-6 transition-colors duration-300 mt-2 mr-2"
            >
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 ">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <br />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-semibold text-sky-500">
                    {item.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-green-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
                <div className="text-sm text-gray-500">
                  Target: {item.target}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            index=""
            eyebrow="Our SPV Capital Investment & Impact"
            title="Universal Legacy Projects."
            description="We invest in the communities where we operate, creating lasting
            positive impact through education, healthcare, and economic
            development."
          />
        </div>

        <div
          className="mt-10 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects by category"
        >
          {projectFilters.map((f) => (
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
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
