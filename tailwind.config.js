module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff", A700_b2: "#ffffffb2", A700_19: "#ffffff19" },
        red: { A700: "#e71316" },
        gray: {
          100: "#f5f5f5",
          500: "#97999c",
          800: "#4a4a4a",
          900: "#222222",
          "900_b2": "#222222b2",
          "900_7f": "#2222227f",
          "900_cc": "#222222cc",
        },
        teal: { 700: "#00677f", "100_4c": "#9bd3dd4c" },
        black: { 900: "#00081b" },
        lime: { 700: "#b5bd00" },
      },
      boxShadow: { xs: "0px 6px 10px 0px #00000019" },
      fontFamily: { helveticaneueltwg: "Helvetica Neue LT W1G" },
      backgroundImage: { gradient: "linear-gradient(to right #5b59594f,#cccccc00)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
