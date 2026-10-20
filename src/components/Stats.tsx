import { stats } from "../data/stats";
import { useCountUp } from "../hooks/useCountUp";
import type { StatItem } from "../types";

function StatCounter({ stat, isLast }: { stat: StatItem; isLast: boolean }) {
  const { ref, value } = useCountUp<HTMLDivElement>(stat.value);

  return (
    <div
      ref={ref}
      className={`flex flex-1 flex-col items-start px-8 py-10 md:py-12 ${
        !isLast ? "border-b border-white/10 md:border-b-0 md:border-r" : ""
      }`}
    >
      <p className="font-display text-4xl font-bold tabular-nums text-bone md:text-5xl">
        {value}
        <span className="text-sky-500">{stat.suffix}</span>
      </p>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-widest2 text-bone-muted">
        {stat.label}
      </p>
    </div>
  );
}

export function Stats() {
  return (
    <section id="stats" className="border-y border-white/10 bg-ink-800">
      <div className="section-shell">
        <div className="flex flex-col md:flex-row">
          {stats.map((stat, i) => (
            <StatCounter
              key={stat.id}
              stat={stat}
              isLast={i === stats.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
