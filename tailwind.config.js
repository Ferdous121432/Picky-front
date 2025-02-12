/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["0.75rem", "1rem"], // 12px, 16px
      sm: ["0.875rem", "1.25rem"], // 14px, 20px
      md: ["1rem", "1.21875rem"], // 16px, 19.5px
      lg: ["1.125rem", "1.37125rem"], // 18px, 21.94px
      xl: ["1.25rem", "1.52375rem"], // 20px, 24.38px
      "2xl": ["1.5rem", "1.82875rem"], // 24px, 29.26px
      "3xl": ["1.75rem", "3.125rem"], // 28px, 50px
      "4xl": ["3rem", "3.625rem"], // 48px, 58px
      "8xl": ["6rem", "7rem"], // 6rem, 7rem
    },
    extend: {
      fontFamily: {
        assistant: ["Assistant", "sans-serif"],
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        "yellow-primary": "#ca8a04",
        "yellow-secondary": "#fde047",
        "yellow-tertiary": "#fefce8",
        "white-primary": "#f8fafc",
        "white-secondary": "#e2e8f0",
        "black-primary": "#0f172a",
        "black-secondary": "#334155",
        "emarald-primary": "#065f46",
        "emarald-secondary": "#059669",
        "emarald-trans": "rgba(6, 95, 70, .01)",
        "red-primary": "#9f1239",
        "red-secondary": "#e11d48",

        transparent: "transparent",
        current: "currentColor",
        black: require("tailwindcss/colors").black,
        white: require("tailwindcss/colors").white,
        emerald: require("tailwindcss/colors").emerald,
        indigo: require("tailwindcss/colors").indigo,
        yellow: require("tailwindcss/colors").yellow,
        stone: require("tailwindcss/colors").warmGray,
        sky: require("tailwindcss/colors").lightBlue,
        neutral: require("tailwindcss/colors").trueGray,
        gray: require("tailwindcss/colors").gray,
        slate: require("tailwindcss/colors").slate,
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        xs: "500px",
        // => @media (min-width: 375px) { ... }
        sm: "645px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1030px",
        // => @media (min-width: 1024px) { ... }

        xl: "1285px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1540px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
