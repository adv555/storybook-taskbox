const REM_SIZE = 16;
const pxToRem = (px) => `${px / REM_SIZE}rem`;

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      fontSize: {
        h1: pxToRem(64),
        h2: pxToRem(48),
        h3: pxToRem(36),
        h4: pxToRem(30),
        h5: pxToRem(24),
        h6: pxToRem(20),
      },
      lineHeight: {
        h1: pxToRem(64),
        h2: pxToRem(48),
        h3: pxToRem(36),
        h4: pxToRem(40),
        h5: pxToRem(36),
        h6: pxToRem(30),
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
