module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" },
        },
        bounceUp: {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(0deg)" },
          "100%": { transform: "translateY(0) rotate(0deg)" },
        },
        smileCurve: {
          "0%": { opacity: "0", transform: "translateX(-5px) translateY(0)" },
          "100%": { opacity: "1", transform: "translateX(0) translateY(0)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "bounce-up": "bounceUp 0.5s ease-in-out",
        "smile-curve": "smileCurve 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
