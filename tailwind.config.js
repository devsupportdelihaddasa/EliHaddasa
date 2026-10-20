/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0C0E',
          900: '#0A0C0E',
          800: '#111417',
          700: '#181C20',
          600: '#22272C',
        },
        bone: {
          DEFAULT: '#F4F3EE',
          dim: '#C9CAC6',
          muted: '#8B8F91',
        },
        amp: {
          DEFAULT: '#F3C623',
          dim: '#B8931A',
          soft: 'rgba(243,198,35,0.12)',
        },
      },
      fontFamily: {
        display: ['"Archivo"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'clamp-hero': 'clamp(2.75rem, 6.5vw, 6.25rem)',
        'clamp-h2': 'clamp(2rem, 4.2vw, 3.5rem)',
        'clamp-h3': 'clamp(1.5rem, 2.4vw, 2.1rem)',
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(rgba(244,243,238,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(244,243,238,0.05) 1px, transparent 1px)',
      },
      keyframes: {
        dash: {
          to: { strokeDashoffset: '0' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        heroUp: {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        heroReveal: {
          from: { clipPath: 'inset(0 0 100% 0)' },
          to: { clipPath: 'inset(0 0 0% 0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-6px, 8px)' },
        },
        ping2: {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '80%, 100%': { transform: 'scale(2.4)', opacity: '0' },
        },
      },
      animation: {
        dash: 'dash 2.4s ease-out forwards',
        pulseSoft: 'pulseSoft 2.4s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        heroUp: 'heroUp 0.85s cubic-bezier(0.16,1,0.3,1) both',
        heroReveal: 'heroReveal 1.1s cubic-bezier(0.16,1,0.3,1) both',
        drift: 'drift 9s ease-in-out infinite',
        ping2: 'ping2 2.6s cubic-bezier(0,0,0.2,1) infinite',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
};