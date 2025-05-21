module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/(app)/**/*.{js,jsx,ts,tsx}",
    "./app/(tabs)/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./features/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      borderRadius: {
        xxl: "23px",
      },
      colors: {
        primary: "#2DC7EA",
      },
    },
  },
  plugins: [],
};
