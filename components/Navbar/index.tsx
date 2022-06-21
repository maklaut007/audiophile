import * as Styled from "./navbar.styles";

export default function Navbar() {
  return (
    <Styled.Navbar>
      <Styled.Logo>audiophile</Styled.Logo>
      <Styled.Cart>
        <Styled.CartImg />
      </Styled.Cart>
    </Styled.Navbar>
  )
}