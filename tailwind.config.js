module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        giphyExporerTheme: {
          "primary": "#3abff8",
          "secondary": "#36d399",
          "accent": "#fbbd23",
          "neutral": "#f87272",
          "base-100": "#1d232a",
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
}