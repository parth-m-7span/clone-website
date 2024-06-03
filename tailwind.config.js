/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    container: {
      // padding: "2rem",
      center: true,
    },
    fontFamily: {
      body: ["sofia-pro", "area-variable", ...defaultTheme.fontFamily.sans],
      display: ["nagel-variable", ...defaultTheme.fontFamily.sans],
      mono: ["input-mono", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        // Red Shade
        primary: {
          50: "var(--color-primary-50)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
        },

        page: {
          primary: {
            50: "var(--color-page-primary-50)",
            100: "var(--color-page-primary-100)",
            200: "var(--color-page-primary-200)",
            300: "var(--color-page-primary-300)",
            400: "var(--color-page-primary-400)",
            500: "var(--color-page-primary-500)",
            600: "var(--color-page-primary-600)",
            700: "var(--color-page-primary-700)",
            800: "var(--color-page-primary-800)",
            900: "var(--color-page-primary-900)",
          },
          secondary: {
            50: "var(--color-page-secondary-50)",
            100: "var(--color-page-secondary-100)",
            200: "var(--color-page-secondary-200)",
            300: "var(--color-page-secondary-300)",
            400: "var(--color-page-secondary-400)",
            500: "var(--color-page-secondary-500)",
            600: "var(--color-page-secondary-600)",
            700: "var(--color-page-secondary-700)",
            800: "var(--color-page-secondary-800)",
            900: "var(--color-page-secondary-900)",
          },
        },

        // Grey Shade
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        black: "#000000",
        white: "#ffffff",
        twitter: "#1DA1F2",
        dribbble: "#EA4C89",
        behance: "#053EFF",
        youtube: "#FF0000",
        facebook: "#4267B2",
        linkedin: "#004b7c",
        discord: "#5865F2",
        npm: "#CC3534",
      },

      letterSpacing: {
        2: "0.2em",
      },

      borderWidth: {
        3: "3px",
      },

      ringWidth: {
        3: "3px",
      },

      aspectRatio: {
        "3/4": "3 / 4",
        "4/3": "4 / 3",
        "goldenratio-landscape": "1.61803398875",
        "goldenratio-portrait": "0.61803398875",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
