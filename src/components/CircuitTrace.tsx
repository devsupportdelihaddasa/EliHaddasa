interface CircuitTraceProps {
  className?: string;
  variant?: 'hero' | 'divider';
}

/**
 * The site's signature visual motif: a right-angled circuit trace with
 * junction nodes, echoing PCB trace routing. Reused across the hero,
 * process timeline, and section dividers as the one recurring device
 * that ties the "engineered" identity together.
 */
export function CircuitTrace({ className = '', variant = 'hero' }: CircuitTraceProps) {
  if (variant === 'divider') {
    return (
      <svg
        className={className}
        viewBox="0 0 1440 40"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 20 H540 L570 4 L610 4 L640 20 H900 L930 36 L970 36 L1000 20 H1440"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.35"
        />
        <circle cx="570" cy="4" r="2.5" fill="currentColor" opacity="0.6" />
        <circle cx="930" cy="36" r="2.5" fill="currentColor" opacity="0.6" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 800 800"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="#F3C623" strokeWidth="1" opacity="0.55">
        <path
          d="M0 120 H220 L260 160 L260 260 L320 320 H520 L560 280 H800"
          strokeDasharray="1200"
          strokeDashoffset="1200"
          className="animate-dash"
        />
        <path
          d="M0 480 H160 L200 520 V620 L260 680 H460 L520 620 L520 480 H800"
          strokeDasharray="1400"
          strokeDashoffset="1400"
          className="animate-dash"
          style={{ animationDelay: '0.4s' }}
        />
        <path
          d="M700 0 V140 L660 180 H560"
          strokeDasharray="400"
          strokeDashoffset="400"
          className="animate-dash"
          style={{ animationDelay: '0.8s' }}
        />
      </g>
      <g fill="#F3C623">
        <circle cx="260" cy="160" r="3.5" opacity="0.9" className="motion-safe:animate-pulseSoft" />
        <circle
          cx="320"
          cy="320"
          r="3.5"
          opacity="0.9"
          className="motion-safe:animate-pulseSoft"
          style={{ animationDelay: '0.6s' }}
        />
        <circle
          cx="200"
          cy="520"
          r="3.5"
          opacity="0.9"
          className="motion-safe:animate-pulseSoft"
          style={{ animationDelay: '1.2s' }}
        />
        <circle
          cx="460"
          cy="680"
          r="3.5"
          opacity="0.9"
          className="motion-safe:animate-pulseSoft"
          style={{ animationDelay: '1.8s' }}
        />
        <circle
          cx="660"
          cy="180"
          r="3.5"
          opacity="0.9"
          className="motion-safe:animate-pulseSoft"
          style={{ animationDelay: '0.3s' }}
        />
      </g>
    </svg>
  );
}