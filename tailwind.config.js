/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        char: "#101211",
        "char-2": "#171917",
        emerald: {
          DEFAULT: "#10B981",
          bright: "#34E8A0",
          dim: "#0B6E4F",
        },
        mist: "#EDEFEC",
        slate: {
          DEFAULT: "#8C948F",
          light: "#B4BAB6",
        },
        line: "rgba(237,239,236,0.08)",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grad-emerald": "linear-gradient(135deg, #050505 0%, #0B6E4F 120%)",
        "grad-glow": "radial-gradient(circle at 50% 0%, rgba(16,185,129,0.18), transparent 60%)",
        "grad-panel": "linear-gradient(180deg, rgba(237,239,236,0.04), rgba(237,239,236,0))",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(16,185,129,0.55)",
        card: "0 20px 60px -30px rgba(0,0,0,0.7)",
      },
      letterSpacing: {
        tightest2: "-0.045em",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "drift-1": {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(6%,8%) scale(1.12)" },
        },
        "drift-2": {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(-8%,-6%) scale(1.08)" },
        },
        "drift-3": {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(4%,-10%) scale(1.15)" },
        },
        "drive-across": {
          "0%": { transform: "translateX(-20%)" },
          "100%": { transform: "translateX(120%)" },
        },
        "wheel-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        "drift-1": "drift-1 22s ease-in-out infinite",
        "drift-2": "drift-2 26s ease-in-out infinite",
        "drift-3": "drift-3 30s ease-in-out infinite",
        "drive-across": "drive-across 14s linear infinite",
        "wheel-spin": "wheel-spin 0.6s linear infinite",
      },
    },
  },
  plugins: [],
};
