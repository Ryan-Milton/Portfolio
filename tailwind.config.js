import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "0.04" },
          "50%": { opacity: "0.08" },
        },
      },
      animation: {
        "glow-pulse": "glow-pulse 8s ease-in-out infinite",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.zinc.700"),
            "--tw-prose-headings": theme("colors.zinc.900"),
            "--tw-prose-links": theme("colors.zinc.900"),
            "--tw-prose-bold": theme("colors.zinc.900"),
            "--tw-prose-code": theme("colors.zinc.900"),
            "--tw-prose-pre-bg": theme("colors.zinc.50"),
            "--tw-prose-pre-code": theme("colors.zinc.800"),
            "--tw-prose-th-borders": theme("colors.zinc.200"),
            "--tw-prose-td-borders": theme("colors.zinc.100"),
            h2: {
              marginTop: "2em",
              marginBottom: "0.75em",
            },
            h3: {
              marginTop: "1.6em",
              marginBottom: "0.6em",
            },
            a: {
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              textDecorationColor: theme("colors.zinc.300"),
              "&:hover": {
                textDecorationColor: theme("colors.zinc.500"),
              },
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            code: {
              fontWeight: "400",
              backgroundColor: theme("colors.zinc.100"),
              borderRadius: theme("borderRadius.md"),
              padding: "0.2em 0.4em",
              fontSize: "0.875em",
            },
            "ul > li::marker": {
              color: theme("colors.zinc.400"),
            },
            "ol > li::marker": {
              color: theme("colors.zinc.400"),
            },
            hr: {
              borderColor: theme("colors.zinc.200"),
              marginTop: "2.5em",
              marginBottom: "2.5em",
            },
            blockquote: {
              borderLeftColor: theme("colors.zinc.300"),
              fontStyle: "normal",
            },
            table: {
              fontSize: "0.875em",
            },
            thead: {
              borderBottomColor: theme("colors.zinc.200"),
            },
            "thead th": {
              fontWeight: "600",
              padding: "0.75em 1em",
            },
            "tbody td": {
              padding: "0.75em 1em",
            },
          },
        },
        invert: {
          css: {
            "--tw-prose-body": theme("colors.zinc.300"),
            "--tw-prose-headings": theme("colors.zinc.100"),
            "--tw-prose-links": theme("colors.zinc.100"),
            "--tw-prose-bold": theme("colors.zinc.100"),
            "--tw-prose-code": theme("colors.zinc.100"),
            "--tw-prose-pre-bg": theme("colors.zinc.900"),
            "--tw-prose-pre-code": theme("colors.zinc.200"),
            "--tw-prose-th-borders": theme("colors.zinc.700"),
            "--tw-prose-td-borders": theme("colors.zinc.800"),
            a: {
              textDecorationColor: theme("colors.zinc.600"),
              "&:hover": {
                textDecorationColor: theme("colors.zinc.400"),
              },
            },
            code: {
              backgroundColor: theme("colors.zinc.800"),
            },
            hr: {
              borderColor: theme("colors.zinc.700"),
            },
            blockquote: {
              borderLeftColor: theme("colors.zinc.600"),
            },
            "ul > li::marker": {
              color: theme("colors.zinc.500"),
            },
            "ol > li::marker": {
              color: theme("colors.zinc.500"),
            },
          },
        },
      }),
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography"), nextui()],
};
