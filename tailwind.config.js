export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#063f2d",
        leaf: "#0d5a3e",
        gold: "#c98a05",
        cream: "#fbf7ee",
        sage: "#eaf1e8",
        ink: "#102b21",
        purple: "#4e2087",
      },
      fontFamily: {
        serif: ["Playfair Display", "DM Serif Display", "Libre Baskerville", "Georgia", "serif"],
        sans: ["Inter", "Helvetica", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(6, 63, 45, 0.11)",
        card: "0 10px 30px rgba(30, 47, 38, 0.08)",
      },
    },
  },
  plugins: [],
};
