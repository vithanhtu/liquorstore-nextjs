/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brown-primary": "#a23f25",
        "brown-color": "#b7472a",
      },
      backgroundImage: {
        "navbar-banner": "url('../public/images/bg_2.jpg.webp')",
        slider: "url('../public/images/bg_4.jpg.webp')",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};
