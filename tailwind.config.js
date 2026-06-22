/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1A1A1A',
        },
        navy: {
          900: '#071B34', // primary
          800: '#0B2545', // secondary
          950: '#08111F', // darkest sections
        },
        gold: {
          DEFAULT: '#D4AF37',
          soft: '#E7CC74',
          deep: '#A9842A',
        },
        paper: '#FFFFFF',
        mist: '#F6F8FB',
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      maxWidth: {
        wide: '1240px',
      },
      boxShadow: {
        lift: '0 30px 80px -30px rgba(7, 27, 52, 0.45)',
        console: '0 40px 120px -40px rgba(4, 12, 26, 0.85)',
        gold: '0 0 0 1px rgba(212, 175, 55, 0.35), 0 18px 50px -20px rgba(212, 175, 55, 0.35)',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(220%)' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseDot: {
          '0%,100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.4, transform: 'scale(0.7)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.6s ease-in-out infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        pulseDot: 'pulseDot 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
