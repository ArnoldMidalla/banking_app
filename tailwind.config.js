/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#2a63e2",
        secondary: "#f0f0f3",
      },
      fontFamily: {
        dmsans: ["DMSans_400Regular"],
        dmsansMedium: ["DMSans_500Medium"],
        dmsansBold: ["DMSans_700Bold"],
      },
    },
  },

  plugins: [],
};
