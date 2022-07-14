import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  html
a {
  color: inherit;
  text-decoration: none;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  font: small-caps 700 56px/58px Manrope, sans-serif;
  letter-spacing: "2px";
}
h2 {
  font: small-caps 700 40px/44px Manrope, sans-serif;
  letter-spacing: "1.5px";
}
h3 {
  font: small-caps 700 32px/36px Manrope, sans-serif;
  letter-spacing: "1.15px";
}
h4 {
  font: small-caps 700 28px/38px Manrope, sans-serif;
  letter-spacing: "2px";
}
h5 {
  font: small-caps 700 24px/33px Manrope, sans-serif;
  letter-spacing: "1.7px";
}
h6 {
  font: small-caps 700 18px/24px Manrope, sans-serif;
  letter-spacing: "1.3px";
}
p {
  font: 500 15px/25px Manrope, sans-serif;
  opacity: 50%;
}
`;
