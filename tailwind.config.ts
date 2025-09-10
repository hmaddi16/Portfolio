import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      colors: {
        'color-dark': "#04152d",
        'color-primary': "#0b2447",
        'color-secondary': "#576cbc"
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
      },
      animation: {
        'move-left': 'move-left 1s linear infinite',
        'move-right': 'move-right 1s linear infinite',
      },
      keyframes: {
        "move-left": {
          '0%': {
            transform: 'translateX(0%)',
          },          
          '100%': {
            transform: 'translateX(-50%)',
          }
        },
        "move-right": {
          '0%': {
            transform: 'translateX(-50%)',
          },          
          '100%': {
            transform: 'translateX(0%)',
          }
        }
      },
    },
  },
  plugins: [],
};
export default config;
