import type { Config } from 'tailwindcss';

// /** @type {import('tailwindcss').Config} */
// module.exports = {
// };

export enum Colors {
  azure = '#0062FF',
  'spring-green' = '#62F783',
  amethyst = '#A162F7',
  'mango-tango' = '#FF8743',
  'zinc-yellow' = '#FFF736',
  'persian-blue' = '#4807EA',
  'sea-green' = '#15FFAB',
  magenta = '#E80FE9',
  'strawberry-red' = '#DB3031',
  'dark-amber' = '#FE7E07',
  'alizarin-red' = '#FD4438',
  'frosty-sky' = '#06D7F6',
  'wild-strawberry' = '#FF5CAA',
  verdepom = '#24CA49',
  'shiny-orange' = '#FFB443',
  thistle = '#C2B7CD',
  'red-orange' = '#FF7A2F',
  aquamarine = '#3DD598',
}

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        //** Light Palette */
        g0: '#FFF',
        g1: '#F2F3F7',
        g2: '#E2E2EA',
        g3: '#C6CBD9',
        g4: '#9A9AAF',
        g5: '#7E7E8F',
        g6: '#656575',
        g7: '#535362',
        g8: '#2E2E3A',
        g9: '#262631',
        g10: '#16161E',
        g11: '#07070C',

        //** Dark Palette */
        dg0: '#FFF',
        dg1: '#F5F5FF',
        dg2: '#D0D0DA',
        dg3: '#A9A9B7',
        dg4: '#8A8A98',
        dg5: '#70707C',
        dg6: '#5B5B65',
        dg7: '#40404A',
        dg8: '#2C2C35',
        dg9: '#1E1E24',
        dg10: '#0F0F13',
        dg11: '#000',

        azure: '#0062FF',
        'spring-green': '#62F783',
        amethyst: '#A162F7',
        'mango-tango': '#FF8743',
        'zinc-yellow': '#FFF736',
        'persian-blue': '#4807EA',
        'sea-green': '#15FFAB',
        magenta: '#E80FE9',
        'strawberry-red': '#DB3031',
        'dark-amber': '#FE7E07',
        'alizarin-red': '#FD4438',
        'frosty-sky': '#06D7F6',
        'wild-strawberry': '#FF5CAA',
        verdepom: '#24CA49',
        'shiny-orange': '#FFB443',
        thistle: '#C2B7CD',
        'red-orange': '#FF7A2F',
        aquamarine: '#3DD598',

        /** Shadcn */
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
