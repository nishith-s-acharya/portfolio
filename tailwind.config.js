/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        RichBlack: "var(--background)",     // Maps to #050505 (Dark) or #ffffff (Light)
        OffWhite: "var(--text-primary)",      // Maps to #ededed (Dark) or #0a0a0a (Light)
        LightGray: "var(--text-secondary)",     // Zinc-400 or Zinc-600
        RoyalBlue: "var(--accent)",     // Midnight Violet
        Surface: "var(--surface)",       // Card background
        SurfaceHighlight: "var(--surface-highlight)",
        MidNightBlack: "var(--background)",
        Snow: "var(--text-primary)",
      },
      fontFamily: {
        'cascadia-normal': ['cascadia-normal'],
        'circular': ['circular-normal', 'sans-serif'],
        'circular-light': ['circular-light', 'sans-serif'],
        'circular-normal': ['circular-normal', 'sans-serif'],
        'circular-medium': ['circular-medium', 'sans-serif'],
        'circular-bold': ['circular-bold', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh': 'radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%)',
      }
    },
  },
  plugins: [],
}