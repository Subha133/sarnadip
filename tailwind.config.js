/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#7C3AED',
          light: '#A78BFA',
          muted: '#EDE9FE',
          dark: '#5B21B6',
          glow: '#7C3AED40',
          cyan: '#06B6D4',
        },
        surface: {
          DEFAULT: '#0D0D12',
          secondary: '#13131A',
          dark: '#08080C',
          card: '#16161F',
          elevated: '#1C1C27',
        },
        text: {
          primary: '#F0EEFF',
          secondary: '#9B97C0',
          muted: '#5D5A7E',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'ping-slow': 'ping 2s cubic-bezier(0,0,0.2,1) infinite',
        'spin-slow': 'spin 30s linear infinite',
        'spin-reverse': 'spin-reverse 20s linear infinite',
        'blink': 'blink 1s step-end infinite',
        marquee: "marquee var(--duration,25s) linear infinite",
        "marquee-reverse": "marquee-reverse var(--duration,25s) linear infinite"
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-33.333%)" }
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-33.333%)" },
          "100%": { transform: "translateX(0%)" }
        }
      },
      boxShadow: {
        card: '0 2px 20px rgba(13,13,18,0.5)',
        'card-hover': '0 8px 40px rgba(124,58,237,0.20)',
        accent: '0 4px 24px rgba(124,58,237,0.45)',
        cyan: '0 4px 24px rgba(6,182,212,0.35)',
      },
    },
  },
  plugins: [],
}
