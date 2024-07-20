import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        'inner-shadow-light-and-dark': 'inset 6.67px -6.67px 6.67px rgba(165, 165, 165, 0.1), inset -6.67px 6.67px 6.67px rgba(255, 255, 255, 0.1)',
      },
      keyframes: {
        sumir: {
          '0%': {opacity: '1'},
          '100%': {opacity: '0'}
        }
      },
      animation: {
        sumir: 'sumir 2s cubic-bezier(0.42, 0, 1.0, 1.0) 5s'
      }
    },
  },
  plugins: [],
};
export default config;
