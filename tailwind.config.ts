import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        black: "#0E0E0E",
        white: "#FAFAFA",
        accent: "#32C5FF",
        gray: {
          100: "rgba(240, 240, 240, 1)",
          200: "rgba(230, 230, 230, 1)",
          300: "rgba(200, 200, 200, 1)",
          400: "rgba(150, 150, 150, 1)",
          500: "rgba(120, 120, 120, 1)",
          600: "rgba(90, 90, 90, 1)",
          700: "rgba(60, 60, 60, 1)",
          800: "rgba(40, 40, 40, 1)",
          900: "rgba(25, 25, 25, 1)",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        float: "float 18s infinite ease-in-out",
        pulse: "pulse 8s infinite ease-in-out",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in-right": "fadeInRight 0.8s ease-out forwards",
        "fade-in-left": "fadeInLeft 0.8s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0) translateX(0) scale(1)" },
          "25%": { transform: "translateY(-10px) translateX(5px) scale(1.02)" },
          "50%": { transform: "translateY(5px) translateX(-5px) scale(0.98)" },
          "75%": { transform: "translateY(-5px) translateX(-10px) scale(1.01)" },
          "100%": { transform: "translateY(0) translateX(0) scale(1)" },
        },
        pulse: {
          "0%": { opacity: "0.2" },
          "50%": { opacity: "0.7" },
          "100%": { opacity: "0.2" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
