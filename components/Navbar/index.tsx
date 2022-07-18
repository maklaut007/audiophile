import { useState } from "react";
import * as Styled from "./navbar.styles";
import HamburgerIcon from "./HamburgerIcon";
import ProductTypes from "../ProductTypes";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Styled.Header>
      <Styled.HeaderPanel>
        <Styled.MenuButton onClick={toggleMenu}>
          <HamburgerIcon open={menuOpen} />
        </Styled.MenuButton>
        <Styled.Logo>audiophile</Styled.Logo>

        <Styled.Cart>
          <Styled.CartImg />
        </Styled.Cart>
      </Styled.HeaderPanel>
      <Styled.Menu isOpen={menuOpen}>
        <ProductTypes />
      </Styled.Menu>
    </Styled.Header>
  );
}
