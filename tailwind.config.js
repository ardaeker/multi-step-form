/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["var(--font-ubuntu)"],
      },
      colors: {
        white: "#FFFFFF",
        "background-color": "#EFF5FF",
        "border-color": "#D6D9E6",
        denim: "#022959",
        grey: "#9699AA",
        "light-blue": "#ABBCFF",
        "light-grey": "#D6D9E6",
        orange: "#FFAF7E",
        pink: "#F9818E",
        purple: "#483EFF",
        "red-errors": "#EE374A",
        "sky-blue": "#BEE2FD",
        "very-light-grey": "#F8F9FF",
        "hover-color": "#164A8A",
        "hover-confirm": "#928CFF",
      },
      content: {
        checkbox: 'url("/images/icon-checkmark.svg")',
      },
    },
  },
  plugins: [],
};
