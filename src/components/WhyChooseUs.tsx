// import { features } from '../data/features';
// import { SectionHeading } from './SectionHeading';
// import { useScrollReveal } from '../hooks/useScrollReveal';

// export function WhyChooseUs() {
//   const revealRef = useScrollReveal<HTMLDivElement>();
//   const gridRef = useScrollReveal<HTMLDivElement>();
//   const [lead, ...rest] = features;
//   const LeadIcon = lead.icon;

//   return (
//     <section id="why-us" className="bg-ink-800 py-24 md:py-32">
//       <div className="section-shell">
//         <SectionHeading
//           index="03"
//           eyebrow="Why Choose Us"
//           title="Standards that hold up under inspection."
//           align="left"
//         />

//         <div ref={revealRef} className="reveal-stagger mt-14 grid grid-cols-1 gap-px bg-white/10 md:grid-cols-3">
//           <div className="group flex flex-col justify-between bg-ink-800 p-8 transition-colors duration-300 hover:bg-ink-700 md:col-span-2 md:p-10">
//             <div>
//               <LeadIcon
//                 className="h-6 w-6 text-amp transition-transform duration-300 group-hover:scale-110"
//                 strokeWidth={1.75}
//               />
//               <h3 className="mt-5 font-display text-2xl font-bold text-bone">{lead.title}</h3>
//               <p className="mt-3 max-w-md text-sm leading-relaxed text-bone-dim">{lead.description}</p>
//             </div>
//             {lead.metric && (
//               <div className="mt-10 flex items-baseline gap-3 border-t border-white/10 pt-6">
//                 <span className="font-display text-5xl font-black text-amp">{lead.metric}</span>
//                 <span className="font-mono text-[11px] uppercase tracking-widest2 text-bone-muted">
//                   {lead.metricLabel}
//                 </span>
//               </div>
//             )}
//           </div>

//           {(() => {
//             const [first] = rest;
//             const Icon = first.icon;
//             return (
//               <div className="group flex flex-col justify-between bg-ink-800 p-8 transition-colors duration-300 hover:bg-ink-700">
//                 <div>
//                   <Icon
//                     className="h-5 w-5 text-amp transition-transform duration-300 group-hover:scale-110"
//                     strokeWidth={1.75}
//                   />
//                   <h3 className="mt-4 font-display text-base font-semibold text-bone">{first.title}</h3>
//                   <p className="mt-2 text-[13px] leading-relaxed text-bone-dim">{first.description}</p>
//                 </div>
//                 {first.metric && (
//                   <p className="mt-6 font-mono text-xs text-amp">
//                     {first.metric} <span className="text-bone-muted">{first.metricLabel}</span>
//                   </p>
//                 )}
//               </div>
//             );
//           })()}
//         </div>

//         <div ref={gridRef} className="reveal-stagger mt-1 grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
//           {rest.slice(1).map((item) => {
//             const Icon = item.icon;
//             return (
//               <div key={item.id} className="group bg-ink-800 p-8 transition-colors duration-300 hover:bg-ink-700">
//                 <Icon
//                   className="h-5 w-5 text-amp transition-transform duration-300 group-hover:scale-110"
//                   strokeWidth={1.75}
//                 />
//                 <h3 className="mt-4 font-display text-base font-semibold text-bone">{item.title}</h3>
//                 <p className="mt-2 text-[13px] leading-relaxed text-bone-dim">{item.description}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
