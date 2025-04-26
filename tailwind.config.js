module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard-Regular"],
        pretendardExtraLight: ["Pretendard-ExtraLight"],
        pretendardSemiBold: ["Pretendard-SemiBold"],
        pretendardBold: ["Pretendard-Bold"],
        gumi: ["GumiRomanceTTF"],
        ahn: ["KCC-Ahnchangho"],
        dos: ["DOSGothic"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" },
        },
        bounceUp: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
        blindReveal: {
          "0%": {
            clipPath: "inset(100% 0 0 0)",
          },
          "100%": {
            clipPath: "inset(0 0 0 0)",
          },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "bounce-up": "bounceUp 0.5s ease-in-out",
        "blind-reveal": "blindReveal 0.7s ease-in-out forwards",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-stroke": {
          "-webkit-text-stroke": "1px theme('colors.zinc.400')",
        },
        ".text-stroke-white": {
          "-webkit-text-stroke": "1px white",
        },
        ".text-stroke-2": {
          "-webkit-text-stroke": "2px black",
        },
        ".text-stroke-red": {
          "-webkit-text-stroke": "1px red",
        },
      });
    },
  ],
};
