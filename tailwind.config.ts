import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1417px ",
      },
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        just: ["var(--font-just)"],
        geomanist: ["var(--font-geomanist)"],
        din: ["var(--font-din)"],
      },
      backgroundImage: {
        "gradient-yellow": "linear-gradient(0deg, #EEAF00 0%, #FFDB00 100%)",
      },
      borderColor: {
        gray: "#e2e4e5",
        "blue-secondary": "#029FC8",
        "blue-quaternary": "#B4E3EF",
        "black": "#34414d"
      },
      backgroundColor: {
        "blue-quaternary": "#b4e3ef",
        "blue-secondary": "#029FC8",
        yellow: "#F1B701",
        "blue-light": "#eef7ff",
      },
      textColor: {
        "blue-primary": "#05728E",
        "blue-secondary": "#029FC8",
        "blue-tertiary": "#60B3D7",
        "blue-quaternary": "#B4E3EF",
        "black-btn": "#002833",
        "black-text": "#34414D",
        "black-checkbox": "#242426",
        yellow: "#F1B701",
        "gray-text": "#989898",
        "gray-placeholder": "#7f7f7f",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
      },
      animation: {
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  safelist: ["text-yellow"],
};
export default config;
