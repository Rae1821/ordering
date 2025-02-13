/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        cartConfirm: {
          '0%': {},
          '100%': { backgroundColor: '#7CFC00' },
        },
        fadeIn: {
          '0%': {transform: 'translate(0px, 50px)'},
          '100%': {opacity: '1', transform: 'translate(0px, 0px)'}
        },
        scale: {
          '0%': { transform: 'scale(1.0)' },
          '100%': {transform: 'scale(1.1)'}
        },
        slidein: {
          '0%': { transform: 'translate(-500px, 0px)' },
          '100%': {transform: 'translate(0px, 0px)', opacity: '1'}
        },
      },
      animation: {
        'cart-confirm-200': 'cartConfirm 200ms ease-in-out forwards',
        'fade-in-200': 'fadeIn 200ms ease-in-out forwards',
        'fade-in-300': 'fadeIn 300ms ease-in-out forwards',
        'fade-in-400': 'fadeIn 400ms ease-in-out forwards',
        'fade-in-500': 'fadeIn 500ms ease-in-out forwards',
        'fade-in-600': 'fadeIn 600ms ease-in-out forwards',
        'fade-in-700': 'fadeIn 700ms ease-in-out forwards',
        'fade-in-800': 'fadeIn 800ms ease-in-out forwards',
        'fade-in-900': 'fadeIn 900ms ease-in-out forwards',
        'fade-in-1000': 'fadeIn 1000ms ease-in-out forwards',
        'fade-in-1100': 'fadeIn 1100ms ease-in-out forwards',
        'fade-in-1200': 'fadeIn 1200ms ease-in-out forwards',
        'fade-in-1300': 'fadeIn 1300ms ease-in-out forwards',
        'fade-in-1400': 'fadeIn 1400ms ease-in-out forwards',
        'fade-in-1500': 'fadeIn 1500ms ease-in-out forwards',
        'fade-in-1600': 'fadeIn 1600ms ease-in-out forwards',
        'fade-in-1700': 'fadeIn 1700ms ease-in-out forwards',
        'fade-in-1800': 'fadeIn 1800ms ease-in-out forwards',
        'fade-in-1900': 'fadeIn 1900ms ease-in-out forwards',
        'fade-in-2000': 'fadeIn 2000ms ease-in-out forwards',
        'fade-in-2100': 'fadeIn 2100ms ease-in-out forwards',
        'fade-in-2200': 'fadeIn 2200ms ease-in-out forwards',
        'scale-200': 'scale 200ms ease-in-out forwards',
        'pulse-400': 'pulse 400ms cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-600': 'pulse 600ms cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-800': 'pulse 800ms cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-1000': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-1200': 'pulse 1200ms cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-1400': 'pulse 1400ms cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-1600': 'pulse 1600ms cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-1800': 'pulse 1800ms cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-2200': 'pulse 2200ms cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-2400': 'pulse 2400ms cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-2600': 'pulse 26000ms cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slidein-200': 'slidein 200ms cubic-bezier(.22,.68,0,1) forwards',
        'slidein-300': 'slidein 300ms cubic-bezier(.22,.68,0,1) forwards',
        'slidein-400': 'slidein 400ms cubic-bezier(.22,.68,0,1) forwards',
        'slidein-500': 'slidein 500ms cubic-bezier(.22,.68,0,1) forwards',
        'slidein-600': 'slidein 600ms cubic-bezier(.22,.68,0,1) forwards',
        'slidein-700': 'slidein 700ms cubic-bezier(.22,.68,0,1) forwards',
        'slidein-800': 'slidein 800ms cubic-bezier(.22,.68,0,1) forwards',
        'slidein-900': 'slidein 900ms cubic-bezier(.22,.68,0,1) forwards',
        'slidein-1000': 'slidein 1000ms cubic-bezier(.22,.68,0,1) forwards',
        'slidein-1200': 'slidein 1200ms cubic-bezier(.22,.68,0,1) forwards',
        'slidein-1400': 'slidein 1400ms ease-in forwards',
        'slidein-1400': 'slidein 1400ms ease-in forwards',
        'slidein-1600': 'slidein 1600ms ease-in forwards',
        'slidein-1700': 'slidein 1700ms ease-in forwards',
        'slidein-1800': 'slidein 1800ms ease-in forwards',
        'slidein-1900': 'slidein 1900ms ease-in forwards',
        'slidein-2000': 'slidein 2000ms ease-in forwards',
        'slidein-2200': 'slidein 2200ms ease-in forwards',
        'slidein-2400': 'slidein 2400ms ease-in forwards',
        'slidein-2600': 'slidein 2600ms ease-in forwards',
        'slidein-2800': 'slidein 2800ms ease-in forwards',
        'slidein-3000': 'slidein 3000ms ease-in forwards',
        'slidein-3200': 'slidein 3200ms ease-in forwards',
        'slidein-3400': 'slidein 3400ms ease-in forwards',
        'slidein-3600': 'slidein 3600ms ease-in forwards',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
  },
};
