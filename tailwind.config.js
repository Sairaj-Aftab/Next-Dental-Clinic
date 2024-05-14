/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-color": "#00bcd4",
      black: "#000000",
      "text-color-black": "rgba(0, 0, 0, 0.8)",
      "text-color-black2": "rgba(0, 0, 0, 0.5)",
      "text-color-white": "#ffffff",
      "secondary-text-color": "#999999",
      "secondary-text-color2": "#aaaaaa",
      "secondary-text-color3": "rgba(255, 255, 255, 0.7)",
      "gray-opacity": "#ebebeb",
      white: "#ffffff",
      inherit: "inherit",
    },
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
