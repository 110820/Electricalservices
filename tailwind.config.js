/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        darkText: "#0F172A",
        mutedText: "#64748B",
        background: "#F8FAFC",
        cardBg: "#FFFFFF",
        borderColor: "#E2E8F0",
        success: "#22C55E",
        danger: "#EF4444",
      },
    },
  },
  plugins: [],
};
