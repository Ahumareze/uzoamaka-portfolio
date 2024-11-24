import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-white': '#FFFDF2',
        'primary-black': '#222229'
      },
      fontFamily: {
        gelica: ['var(--font-gelica)'],
        eculid: ['var(--font-eculid)']
      }
    },
  },
  plugins: [],
} satisfies Config;
