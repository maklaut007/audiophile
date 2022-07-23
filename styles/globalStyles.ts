import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
a {
  color: inherit;
  text-decoration: none;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: none;
}

h1 {
  font: small-caps 500 56px/58px Manrope, sans-serif;
  letter-spacing: "2px";
}
h2 {
  font: small-caps 500 40px/44px Manrope, sans-serif;
  letter-spacing: "1.5px";
}
h3 {
  font: small-caps 500 32px/36px Manrope, sans-serif;
  letter-spacing: "1.15px";
}
h4 {
  font: small-caps 500 28px/38px Manrope, sans-serif;
  letter-spacing: "2px";
}
h5 {
  font: small-caps 500 24px/33px Manrope, sans-serif;
  letter-spacing: "1.7px";
}
h6 {
  font: small-caps 500 18px/24px Manrope, sans-serif;
  letter-spacing: "1.3px";
}
p {
  font: 400 15px/25px Manrope, sans-serif;
  opacity: 50%;
}
`;
