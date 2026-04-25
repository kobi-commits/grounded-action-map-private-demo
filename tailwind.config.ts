import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17212b",
        slatepanel: "#f3f5f7",
        line: "#d8dee5",
        signal: "#315f72",
        clay: "#8a5a44",
        moss: "#55705a"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(23, 33, 43, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
