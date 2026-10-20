import { SectionHeading } from "./SectionHeading";

import { FileText, Banknote, Activity, Receipt, Percent } from "lucide-react";
import { Button } from "./Button";

export function Investors() {
  const investorHighlights = [
    {
      title: "Tangible Financial Returns (Insulated Yields)",
      description:
        "We do not build speculative assets. Your capital funds critical, brick-and-mortar infrastructure—such as Solar Micro-Grids, Storage-as-a-Service (STaaS) Warehouses, Circular Wastewater Treatment Plants, and Automated Agri-Processing Packhouses.",
      moreinformation:
        "These facilities generate predictable, everyday commercial revenue through utility energy tariffs, commodity processing fees, and logistical storage rentals. Class-A Preference Shareholders receive a robust, average 6.2% annualized dividend yield paid out quarterly, turning an impact initiative into a genuine profit center for your balance sheet.",
      icon: Banknote,
    },
    {
      title: "Maximum B-BBEE Scorecard Optimization",
      description:
        "Navigating Black Economic Empowerment compliance in South Africa is often treated as a regulatory hurdle. Hadassa structures your investment to serve as a powerful scorecard accelerator.",
      moreinformation:
        "Because our projects are permanently embedded inside rural township corridors and traditional authority lands, 100% of your deployed capital qualifies under Enterprise and Supplier Development (ESD) or Socio-Economic Development (SED) allocations.You claim maximum, audit-proof B-BBEE points while keeping your funds working inside a dividend-yielding asset class that you partially own.",
      icon: Activity,
    },
    {
      title: "Aggressive SARS Tax Windfalls (Section 12BA & 18A)",
      description:
        "We actively align our infrastructure rollout with South Africas most powerful corporate tax incentives to protect your margins.",
      moreinformation:
        "By anchor-funding our Solar Agri-Hubs or Urban Smart Grids, your company can leverage the newly expanded SARS Section 12BA allowance, enabling businesses to claim an immediate 125% upfront tax deduction on the capital expenditure of renewable energy assets.The Humanitarian Offset: For non-profit components like our Abuse Safe Havens or Wildlife Sanctuaries, funding is routed through certified NPO partner networks, issuing your corporate finance team immediate Section 18A tax-deductible certificates.",
      icon: Receipt,
    },
    {
      title: "Bulletproof Risk Mitigation via Ring-Fenced SPVs",
      description:
        "We protect institutional capital with rigid corporate discipline.",
      moreinformation:
        "Isolated Liability: Every project is legally set up as an independent, ring-fenced Special Purpose Vehicle (SPV) company.Your investment is bound strictly to that physical asset and is completely insulated from parent-platform operational liabilities.Every anchor investor receives full access to real-time digital dashboards tracking facility performance, inventory movements, water treatment metrics, and quarterly audited cash-flow sheets.",
      icon: Percent,
    },
  ];

  const documents = [
    {
      id: "1",
      title: "Corporate Capabilities Deck [FY2026/2027]",
      description:
        "A comprehensive overview of our cross-industry business model, and tournament infrastructure pipelines.",
      type: "annual-report",
      date: "2027-03-15",
      fileUrl: "#",
      fileSize: "12.5 MB",
    },
    {
      id: "2",
      title: "2027 Sustainability Report",
      description:
        "Detailed review of environmental, social, and governance performance.",
      type: "sustainability-report",
      date: "2027-03-15",
      fileUrl: "#",
      fileSize: "8.3 MB",
    },
    {
      id: "3",
      title: "Q1 2027 Investor Presentation",
      description:
        "Quarterly results and outlook presentation for investors and analysts.",
      type: "presentation",
      date: "2027-11-01",
      fileUrl: "#",
      fileSize: "5.2 MB",
    },
    //   {
    //     id: '4',
    //     title: '2023 Annual Report',
    //     description: 'Previous year financial and operational review.',
    //     type: 'annual-report',
    //     date: '2023-03-15',
    //     fileUrl: '#',
    //     fileSize: '11.8 MB',
    //   },
    //   {
    //     id: '5',
    //     title: 'Mineral Reserves & Resources Statement',
    //     description: 'Technical report on proven and probable reserves across all operations.',
    //     type: 'fact-sheet',
    //     date: '2024-02-01',
    //     fileUrl: '#',
    //     fileSize: '3.7 MB',
    //   },
    //   {
    //     id: '6',
    //     title: 'Corporate Governance Guidelines',
    //     description: 'Board structure, policies, and governance framework.',
    //     type: 'policy',
    //     date: '2024-01-15',
    //     fileUrl: '#',
    //     fileSize: '1.2 MB',
    //   },
    //   {
    //     id: '7',
    //     title: 'Environmental Policy Statement',
    //     description: 'Company-wide environmental management and sustainability commitments.',
    //     type: 'policy',
    //     date: '2023-12-01',
    //     fileUrl: '#',
    //     fileSize: '850 KB',
    //   },
    //   {
    //     id: '8',
    //     title: 'Q3 2024 Investor Presentation',
    //     description: 'Third quarter financial results and operational update.',
    //     type: 'presentation',
    //     date: '2024-08-10',
    //     fileUrl: '#',
    //     fileSize: '4.8 MB',
    //   },
  ];

  return (
    <section id="investors" className="bg-ink-800 py-24 md:py-32">
      <div className="section-shell">
        <SectionHeading
          index="07"
          eyebrow="Investor Relations"
          title="Sustainable Value."
          align="left"
          description="We operate a sophisticated cross-industry framework that shifts
          corporate capital from a charitable expense to a dividend-yielding
          asset class."
        />

        {/* Investment Highlights */}
        <section className="py-20">
          <div className="container-custom">
            <h3 className="text-2xl font-semibold text-bone mb-2">
              Why Invest in Eli Haddasa Projects
            </h3>
            <h2 className="text-2xl font-display text-sky-500 mb-6">
              The Paradigm Shift: From Charity to High-Yield Social Assets.
            </h2>
            <p className="text-lg text-bone mb-12 max-w-3xl">
              Traditional Corporate Social Responsibility (CSI/CSR) treats
              community development as an outright expense—money leaves your
              balance sheet, fulfills a compliance checkbox, and vanishes.
            </p>
            <br />
            <h2 className="text-2xl font-display text-sky-500 mb-6">
              Eli Haddasa fundamentally renovates this system.
            </h2>
            <p className="text-lg text-bone mb-12 max-w-3xl">
              Named after the ancient Ge'ez word for renewal, restoration, and
              repair, we merge high-octane corporate entertainment,
              international trade optimization, and institutional project
              finance into an unassailable ecosystem. When you back an Eli
              Haddasa project, you are deploying capital into highly lucrative,
              ring-fenced infrastructure that actively repairs communities while
              delivering compounding commercial yields back to your business.
            </p>
            <br />
            <h3 className="text-2xl font-semibold text-bone mb-2">
              The Eli Haddasa Four Pillars of Investment
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {investorHighlights.map((item) => (
                <div
                  key={item.title}
                  className="group bg-slate-100 p-6 transition-colors duration-300 mt-2 mr-2"
                >
                  <item.icon
                    className="h-5 w-5 text-sky-500 transition-transform duration-300 group-hover:-translate-y-0.5 mb"
                    strokeWidth={1.75}
                  />

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 ">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm ">{item.description}</p>
                </div>
              ))}
            </div>
            <br />
            <h2 className="text-2xl font-display text-sky-500 mb-6 mt-8">
              The Ultimate Corporate Legacy (Cinematic PR)
            </h2>
            <p className="text-lg text-bonemb-12 max-w-3xl">
              Beyond the spreadsheets, Hadassa offers a brand equity asset that
              traditional investments cannot replicate:
            </p>
            <p className="text-lg text-bone mb-12 max-w-3xl">
              Naming Rights: Titanium-tier investors secure permanent title
              naming rights to landmark facilities (e.g., Solar Grids, Iconic
              Sports Facilities, Circular Water Network").
            </p>
            <p className="text-lg text-bone mb-12 max-w-3xl">
              Executive Cinematic Positioning: If your C-suite executives
              compete in our signature Eli Haddasa Capital Tournaments, our
              high-end film crews document their 12-week athletic
              transformation. This premium "Gladiator-to-Humanitarian"
              mini-documentary serves as world-class PR for your personal brand,
              internal staff morale, and recruitment marketing.
            </p>
          </div>
          <h2 className="text-4xl font-display font-bold text-white mb-12">
            Reports, Presentations & Downloads
          </h2>
          <h2 className="text-2xl font-display text-whitemb-6">
            Institutional Briefings & Resource Center
          </h2>
          <p className="text-lg text-bone mb-12 max-w-3xl mt-4">
            Access our official audited filings, strategic market outlooks, and
            corporate slide decks. All documentation is prepared in compliance
            with International Financial Reporting Standards (IFRS).
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {documents.map((item) => (
              <div
                key={item.title}
                className="group bg-slate-100 p-6 transition-colors duration-300 mt-2 mr-2"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-sky-600" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    {item.type.replace("-", " ")}
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {item.date} • {item.fileSize}
                    </div>
                    <Button as="a" href="#" variant="primary">
                      {/* <Download className="h-4 w-4 mr-2" /> */}
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <h2 className="text-4xl font-display font-bold text-white mb-6 mt-12">
            Governance, Leadership & Shareholder Rights
          </h2>
          <p className="text-lg text-bone mb-8 max-w-3xl">
            We maintain the highest standards of corporate governance,
            transparency, and ethical business practices.
          </p> */}
        </section>

        {/* <div
          ref={revealRef}
          className="reveal-stagger mt-14 grid grid-cols-1 gap-px bg-white/10 md:grid-cols-3"
        >
          <div className="group flex flex-col justify-between bg-ink-800 p-8 transition-colors duration-300 hover:bg-ink-700 md:col-span-2 md:p-10">
            <div>
              <LeadIcon
                className="h-6 w-6 text-sky-500 transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.75}
              />
              <h3 className="mt-5 font-display text-2xl font-bold text-bone">
                {lead.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-bone-dim">
                {lead.description}
              </p>
            </div>
            {lead.metric && (
              <div className="mt-10 flex items-baseline gap-3 border-t border-white/10 pt-6">
                <span className="font-display text-5xl font-black text-sky-500">
                  {lead.metric}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest2 text-bone-muted">
                  {lead.metricLabel}
                </span>
              </div>
            )}
          </div>

          {(() => {
            const [first] = rest;
            const Icon = first.icon;
            return (
              <div className="group flex flex-col justify-between bg-ink-800 p-8 transition-colors duration-300 hover:bg-ink-700">
                <div>
                  <Icon
                    className="h-5 w-5 text-sky-500 transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.75}
                  />
                  <h3 className="mt-4 font-display text-base font-semibold text-bone">
                    {first.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-bone-dim">
                    {first.description}
                  </p>
                </div>
                {first.metric && (
                  <p className="mt-6 font-mono text-xs text-sky-500">
                    {first.metric}{" "}
                    <span className="text-bone-muted">{first.metricLabel}</span>
                  </p>
                )}
              </div>
            );
          })()}
        </div> */}

        {/* <div
          ref={gridRef}
          className="reveal-stagger mt-1 grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {rest.slice(1).map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-ink-800 p-8 transition-colors duration-300 hover:bg-ink-700"
              >
                <Icon
                  className="h-5 w-5 text-amp transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.75}
                />
                <h3 className="mt-4 font-display text-base font-semibold text-bone">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-bone-dim">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
}
