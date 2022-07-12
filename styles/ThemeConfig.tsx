import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    orange: "#D87D4A",
    orangeHover: "#FBAF85",
    backgroundWhite: "#F1F1F1",
    textWhite: "#FAFAFA",
    white: "#FFF",
    black: "#000",
    backgroundBlack: "#101010",
  },
  text: {
    headerOne: {
      font: "small-caps 700 56px/58px Manrope, sans-serif",
      letterSpacing: "2px",
    },
    headerTwo: {
      font: "small-caps 700 40px/44px Manrope, sans-serif",
      letterSpacing: "1.5px",
    },
    headerThree: {
      font: "small-caps 700 32px/36px Manrope, sans-serif",
      letterSpacing: "1.15px",
    },
    headerFour: {
      font: "small-caps 700 28px/38px Manrope, sans-serif",
      letterSpacing: "2px",
    },
    headerFive: {
      font: "small-caps 700 24px/33px Manrope, sans-serif",
      letterSpacing: "1.7px",
    },
    headerSix: {
      font: "small-caps 700 18px/24px Manrope, sans-serif",
      letterSpacing: "1.3px",
    },
    overline: {
      font: "small-caps 400 14px/19px Manrope, sans-serif",
      letterSpacing: "10px",
    },
    subTitle: {
      font: "small-caps 700 13px/25px Manrope, sans-serif",
      letterSpacing: "1px",
    },
    body: {
      font: "500 15px/25px Manrope, sans-serif",
    },
  },
};

export const GlobalStyles = createGlobalStyle`
  body {
  }
`;
