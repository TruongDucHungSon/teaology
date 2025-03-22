/** @type {import('tailwindcss').Config} */
export default {
  prefix: "vt-", // This is the default prefix
  content: ["./**/*.{liquid,json,js}", "./dist/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        width: "100%",
        maxWidth: "1876px",
        screens: {
          small: "450px",
          // => @media (min-width: 640px) { ... }

          medium: "750px",
          // => @media (min-width: 768px) { ... }

          wide: "990px",
          // => @media (min-width: 990px) { ... }

          wider: "1400px",
          // => @media (min-width: 1280px) { ... }

          "max-wide": "989px",
          // => @media (max-width: 989px) { ... }
        },
      },
      colors: {
        primary: "#1c3c36",
      },
    },
  },
  plugins: [],
};
