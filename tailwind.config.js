module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        giphyExporerTheme: {
          "--rounded-btn": "0.25rem"
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
}