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
        bgGeneral: "#151515",
      },
      fontFamily: {
        display: "Rubik, ui-serif",
      },
      spacing: {
        752: "752px",
      },
      height: {
        400: "400px",
        1020: "1020px",
      },
      gridTemplateColumns: {
        custom: "repeat(auto-fit, minmax(700px, auto))", // Configuración por defecto
        "sm-custom": "repeat(auto-fit, minmax(100%, auto))", // Configuración para pantallas menores a 500px
      },
      fontSize: {
        "7xl": [
          "4.5rem",
          {
            lineHeight: "1.13",
          },
        ],
        //         text-7xl	font-size: 4.5rem; /* 72px */
        // line-height: 1;
      },
    },
  },
  plugins: [],
};
