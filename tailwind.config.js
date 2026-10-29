/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pureWhite: '#FFFFFF',
        carbonBlack: '#111111',
        warmIvory: '#EBE2CC',
        softSand: '#DED6C1',
        stoneBeige: '#CFC6B1',
        mutedTaupe: '#B7B09E',
        charcoalGrey: '#414141',
        // Porsche-inspired nuanced functional shades
        surface: {
          50: '#FAF9F6',
          100: '#F4F2EC',
          200: '#EBE2CC',
          300: '#DED6C1',
          400: '#CFC6B1',
          500: '#B7B09E',
        }
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '0',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.15em',
        editorial: '0.2em',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(17, 17, 17, 0.04), 0 1px 2px -1px rgba(17, 17, 17, 0.02)',
        'card': '0 4px 20px -2px rgba(17, 17, 17, 0.05)',
        'lifted': '0 20px 40px -15px rgba(17, 17, 17, 0.08)',
      }
    },
  },
  plugins: [],
}
