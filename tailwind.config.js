/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        black: "var(--black)",
        "pink-400": "var(--pink-400)",
        "pink-500": "var(--pink-500)",
        "violet-50": "var(--violet-50)",
        "violet-500": "var(--violet-500)",
        "violet-600": "var(--violet-600)",
        white: "var(--white)",
        "zinc-100": "var(--zinc-100)",
        "zinc-300": "var(--zinc-300)",
        "zinc-400": "var(--zinc-400)",
        "zinc-50": "var(--zinc-50)",
        "zinc-500": "var(--zinc-500)",
        "zinc-600": "var(--zinc-600)",
        "zinc-800": "var(--zinc-800)",
        "zinc-900": "var(--zinc-900)",
        "zinc-950": "var(--zinc-950)",
      },
    },
  },
  plugins: [],
};
