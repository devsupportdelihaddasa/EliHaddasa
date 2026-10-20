interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col ${
        isCenter ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <div className={`flex items-center gap-3 ${isCenter ? "" : ""}`}>
        <span className="font-mono text-[11px] text-sky-500">{index}</span>
        <span className="h-px w-8 bg-sky-500/50" />
        <span className={`eyebrow ${light ? "text-sky-500" : ""}`}>
          {eyebrow}
        </span>
      </div>
      <h2
        className={`mt-5 max-w-2xl font-display text-clamp-h2 font-bold leading-[1.05] tracking-tight ${
          light ? "text-ink-900" : "text-sky-500"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-xl text-[15px] leading-relaxed ${
            light ? "text-ink-700" : "text-bone-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
