import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#EBFA9E",
        "green-yellow": "#BFE03E",
        "antique-white": "#F2DDCF",
        "brown": "#51392A",
        "light-cyan": "#CFF2ED",
        "dark-green": "#2A512A",
        "lavender": "#E6CFF2",
        "dark-pruple": "#432A51",
        "army-green": "#2A514C",
        "light-army-green": "#42766F",
        "black": "#1C2436",
        "dark-slate-gray": "#454C5F",
        "light-slate-gray": "#818A9C",
        "ash-gray": "#E8E7EE"
      },
      fontFamily: {
        "vietnam-pro": ["Be Vietnam Pro", "sans-serif"],
        "outfit": ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        "pattern-one": "url('/pattern-1.svg')",
        "pattern-two": "url('/pattern-2.svg')",
        "pattern-three": "url('/pattern-3.svg')",
      }
    },
  },
  plugins: [],
};
export default config;
