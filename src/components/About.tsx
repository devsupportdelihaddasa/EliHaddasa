import {
  Target,
  Flower2,
  Container,
  Shield,
  Trees,
  Award,
  Zap,
  House,
  LandPlot,
  Flower,
  Droplet,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useScrollReveal } from "../hooks/useScrollReveal";

const elihaddasaMeaning = [
  {
    icon: Flower2,
    title: "Renew",
    text: "with an elevated spirit what has grown stale and forgotten.",
  },
  {
    icon: Shield,
    title: "Restore",
    text: "under Gods guidance the broken dignity of vulnerable lives and survivors.",
  },
  {
    icon: Container,
    title: "Renovate",
    text: "outdated, friction-heavy global supply chains into cooperative local economies.",
  },
  {
    icon: Target,
    title: "Re-establish",
    text: "a higher standard of ecological peace and harmony across scarred landscapes.",
  },
  {
    icon: Trees,
    title: "Repair",
    text: " the structural, societal, and digital divides separating humanity from its true potential.",
  },

  //   {
  //     icon: ShieldCheck,
  //     title: "Engineering-first safety",
  //     text: "Every design is load-calculated and risk-assessed before a single cable is run.",
  //   },
  //   {
  //     icon: Target,
  //     title: "Built for reliability",
  //     text: "Systems engineered to perform under continuous, real-world operating conditions.",
  //   },
  //   {
  //     icon: Award,
  //     title: "Recognized standards",
  //     text: "Work carried out and certified to current national electrical codes.",
  //   },
];

/* Company Core Values  */

const companycoreValues = [
  {
    title: "Elevate (Leadership & Ambition)",
    description:
      "We push executive wellness, high-performance athletic duels, and corporate networking to their absolute peak. We believe true leadership ascends when it takes on a higher social responsibility.",
    icon: Award,
  },
  {
    title: "Renew (Infrastructure & Utility)",
    description:
      "We introduce decentralized solar micro-grids and modern agri-processing hubs, bringing a fresh, clean energy dawn to underfunded rural, urban, and island corridors.",
    icon: Zap,
  },
  {
    title: "Restore (Dignity & Protection)",
    description:
      "We fund the construction of highly secure Safe Havens and Rehabilitation Centers to restore total physical, emotional, and economic autonomy to survivors of human trafficking and abuse.",
    icon: House,
  },

  {
    title: "Renovate (Trade & Systems):",
    description:
      "We renovate rigid international supply chains. By utilizing our land-leasing facilities and domestic entity status, we help global partners bypass high tariffs and seamlessly adapt to domestic markets.",
    icon: LandPlot,
  },
  {
    title: "Re-establish (Ecosystems & Coexistence)",
    description:
      "We re-establish natural balance. Through our Conflict-to-Cultivation peace gardens and state-of-the-art wildlife sanctuaries, we revive degraded landscapes and protect endangered life.",
    icon: Flower,
  },
  {
    title: "Repair (Circularity & Future)",
    description:
      "We structurally repair societal divides. From closed-loop wastewater treatment plants ensuring regional water security to solar-powered digital STEM labs for youth, we mend the modern structural gaps in our world.",
    icon: Droplet,
  },
];

export function About() {
  const imageRef = useScrollReveal<HTMLDivElement>();
  const staggerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative bg-white py-24 md:py-32">
      <div className="section-shell grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div
            ref={imageRef}
            className="corner-frame relative aspect-[3/4] w-full overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1769798643655-e0f10f62c3fd?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              alt="About our Eli Haddasa and our pillars"
              className="h-full w-full scale-[1.01] object-cover transition-transform duration-[1200ms] ease-premium hover:scale-[1.04] text-black"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
          </div>
          <div className="hairline mt-6 flex items-center justify-between bg-ink-800 px-5 py-4 transition-colors duration-300 hover:border-sky-500/40">
            <span className="font-mono text-[11px] uppercase tracking-widest2 text-sky-500">
              Mobile Arena | Sandbox | Working spaces | Sports Facilities |
              Luxury Glamping Villages | Entertainment
            </span>
            {/* <span className="font-display text-lg font-bold text-sky-500">
              2026
            </span> */}
          </div>
          <br />
          <div
            ref={imageRef}
            className="corner-frame relative aspect-[3/4] w-full overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1670420421505-804c23232098?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              alt="About our Eli Haddasa and our pillars"
              className="h-full w-full scale-[1.01] object-cover transition-transform duration-[1200ms] ease-premium hover:scale-[1.04] text-black"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-8">
          <SectionHeading
            index="01"
            eyebrow="About Eli Haddasa"
            title="Our Story — The Eli Haddasa Heritage - A Sovereign Mandate"
          />
          <br />
          <h3 className="text-3xl font-display font-bold text-gray-900 mb-12">
            An Ancient Mandate for the Modern Boardroom
          </h3>
          <br />
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            The Origin of the Name
          </h3>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-black">
            Long before modern boardrooms, global trade routes, and corporate
            compliance frameworks existed, the Ge&apos;ez language—one of the
            oldest independent languages in human history—coined a word to
            describe the ultimate act of leadership: Haddasa.
          </p>
          <br />
          <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-black">
            But true leadership cannot walk alone on the earth; it requires a
            higher orientation. By grounding our purpose in Eli — the original
            and everlasting name of the Almighty creator of all the Heavens and
            our Earth with a powerful sovereign name meaning the High, the
            Elevated, and the Ascended—our mission transitions from basic
            corporate social responsibility to an ordained, higher calling.
          </p>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-black">
            In its truest sense, Eli Haddasa does not mean a passive wish for
            change. It is an active, heavy-lifting divine mandate to:
          </p>
          <div
            ref={staggerRef}
            className="reveal-stagger mt-12 grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-3"
          >
            {elihaddasaMeaning.map((item) => (
              <div
                key={item.title}
                className="group bg-slate-100 p-6 transition-colors duration-300 hover:bg-ink-800 mt-2 mr-2"
              >
                <item.icon
                  className="h-5 w-5 text-sky-500 transition-transform duration-300 group-hover:-translate-y-0.5"
                  strokeWidth={1.75}
                />
                <h3 className="mt-4 font-display text-sm font-semibold text-sky-500">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-black hover:text-white">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <h3 className="mt-8 text-2xl font-semibold text-gray-900 mb-2">
            The Modern Corporate Arena
          </h3>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-black">
            Today, the global economy is fractured. International businesses
            face crippling trade barriers and rising tariffs. Corporate
            executives face unprecedented professional burnout, operating at
            peak mental strain with no purposeful physical outlet. At the same
            time, rural communities, vulnerable ecosystems, and survivors of
            exploitation are left stranded by traditional, short-term charity
            models.
          </p>
          <br />
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Eli Haddasa was founded to bridge this gap.
          </h3>
          <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-black">
            We realized that the elite grit, competitive hunger, and immense
            capital locked inside the corporate boardroom could be the most
            powerful force for global healing if channelled correctly.
          </p>
          <br />
          <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-black">
            We took the ancient mandate of Eli Haddasa and built it into a
            high-performance business ecosystem. When an international
            enterprise partners with us to localize their supply chain, they are
            renovating trade. When a CEO steps into our athletic arena to sweat,
            train, and compete, they are renewing their personal leadership. And
            when that tournament capital is deployed to build solar grids,waste
            water treatment plants, factories, safe havens, and wildlife
            sanctuaries, we are collectively restoring, re-establishing, and
            repairing our world.
          </p>
          <br />
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            We do not just do business. We fulfill a legacy.
          </h3>
          <br />
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Our values are deeply rooted in the ancient Ge&apos;ez definition of
            our name, serving as the operating system for every industry we
            touch:
          </p>
          {companycoreValues.map((item) => (
            <div
              key={item.title}
              className="group bg-slate-100 p-6 transition-colors duration-300 hover:bg-ink-800 mt-2 mr-2"
            >
              <item.icon
                className="h-5 w-5 text-sky-500 transition-transform duration-300 group-hover:-translate-y-0.5"
                strokeWidth={1.75}
              />
              <h3 className="mt-4 font-display text-sm font-semibold text-sky-500">
                {item.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-black hover:text-white">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
