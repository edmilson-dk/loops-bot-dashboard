import { createStitches, globalCss } from "@stitches/react";

export function getRem(px: number) {
  return `${px / 16}rem`;
}

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },
  html: {
    fontSize: "100%",
  },
  "html, input, button, select, a": {
    fontFamily: "Inter, sans-serif",
  },
  "::-webkit-scrollbar-track ": {
    "-webkit-box-shadow": "inset 0 0 6px rgba(0, 0, 0, 0.3)",
    borderRadius: "10px",
    backgroundColor: "#f5f5f5",
  },
  "::-webkit-scrollbar": {
    width: "12px",
    backgroundColor: "#f5f5f5",
  },

  "::-webkit-scrollbar-thumb": {
    borderRadius: "10px",
    "-webkit-box-shadow": "inset 0 0 6px rgba(0, 0, 0, 0.3)",
    backgroundColor: "#caced8",
  },
  img: {
    maxWidth: "100%",
    display: "block",
    objectFit: "contain",
    objectPosition: "center",
  },
  "a, a:visited": {
    color: "inherit",
  },
  a: {
    textDecoration: "none",
  },
  button: {
    cursor: "pointer",
  },
  "button, input": {
    border: 0,
    outline: 0,
  },
  ".modal-default-wrapper-overlay": {
    zIndex: 99999,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(65, 105, 225, 0.2)",
  },

  ".modal-default-wrapper": {
    zIndex: 99999,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    minHeight: "fit-content",
    width: "fit-content",
    backgroundColor: "var(--pure-white)",
    boxShadow: "0px 0px 6px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "15px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#11121A",
  },
  "div.alert": {
    width: "100%",
    padding: "$1 $3",
    height: "$5",
    backgroundColor: "$bgPrimary",
    border: "1px solid $secondary",
    borderRadius: "$default",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  "div.alert > strong": {
    color: "$secondary",
    fontSize: "$body",
    fontWeight: "$body",
    textAlign: "left",
  },
});

export const Stitches = createStitches({
  theme: {
    colors: {
      primary: "#219E47",
      primaryLight: "#55BD74",
      secondary: "#CA7B1D",
      purple: "#833FB8",
      purpleDark: "#2C193A",
      blue: "#00B2E3",
      blueDark: "#002855",
      red: "#EF2E39",
      redDark: "#511619",
      white: "#FFFFFF",
      gray100: "#A9ADC1",
      gray400: "#4B4C53",
      gray600: "#2E3039",
      bgPrimary: "#11121A",
      bgSecondary: "#14151F",
    },
    space: {
      1: getRem(10),
      2: getRem(15),
      3: getRem(20),
      4: getRem(25),
      5: getRem(30),
      6: getRem(35),
      7: getRem(40),
      8: getRem(45),
      9: getRem(50),
    },
    sizes: {
      1: getRem(30),
      2: getRem(40),
      3: getRem(45),
      4: getRem(50),
      5: getRem(60),
      iconSmall: getRem(20),
      iconMedium: getRem(22),
      iconLarge: getRem(24),
    },
    fontSizes: {
      title: getRem(22),
      subtitle: getRem(18),
      body: getRem(16),
      large: getRem(46),
      medium: getRem(26),
      small: getRem(14),
    },
    fontWeights: {
      medium: 500,
      semiBold: 600,
      body: 400,
    },
    radii: {
      default: getRem(10),
    },
    borderWidths: {
      default: getRem(1),
      2: getRem(2),
    },
    shadows: {
      default: "0px 0px 4px 4px rgba(0, 0, 0, 0.15)",
      strong: "0px 6px 4px rgba(0, 0, 0, 0.7)",
    },
  },
});
