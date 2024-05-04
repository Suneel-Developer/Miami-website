/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary": "rgb(183, 139, 27)",
        "background-primary": "rgb(21, 21, 21)",
        "color-text-primary": "rgb(255, 255, 255)",
        "background-secondary": "rgb(29, 29, 29)",
        "input-border-color": "rgb(255, 255, 255)",
        // "divide-color": "rgb(255, 255, 255)",
        // "badge-color": "rgb(0, 0, 0)"
      }
    },
  },
  plugins: [],
};
