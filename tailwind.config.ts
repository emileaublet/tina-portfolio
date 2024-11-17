import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  safelist: ["dark"],
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          "50": "#feffe7",
          "100": "#faffc1",
          "200": "#f8ff87",
          "300": "#fcff42",
          "400": "#fff70f",
          "500": "#edda02",
          "600": "#cfae00",
          "700": "#a57d03",
          "800": "#88610b",
          "900": "#744f0f",
          "950": "#442a04",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
