import { useState } from "react";
import * as Styled from "./navbar.styles";
import HamburgerIcon from "./HamburgerIcon";
import ProductTypes from "../ProductTypes";
import Cart from "../Cart";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <Styled.Header isOpen={menuOpen || cartOpen}>
      <Styled.HeaderPanel>
        <Styled.MenuButton onClick={toggleMenu}>
          <HamburgerIcon open={menuOpen} />
        </Styled.MenuButton>
        <Styled.Logo>audiophile</Styled.Logo>
        <Styled.Cart>
          <Styled.CartImg
            onClick={toggleCart}
            src="/assets/shared/desktop/icon-cart.svg"
            alt="cart icon"
          />
          <Cart isOpen={cartOpen} />
        </Styled.Cart>
      </Styled.HeaderPanel>
      <Styled.Menu isOpen={menuOpen}>
        <ProductTypes />
      </Styled.Menu>
    </Styled.Header>
  );
}
