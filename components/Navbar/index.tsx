import { useState } from "react";
import * as Styled from "./navbar.styles";
import HamburgerIcon from "./HamburgerIcon";
import ProductTypes from "../ProductTypes";
import Cart from "../Cart";
import Image from "next/image";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    if (!menuOpen) {
      setCartOpen(false);
    }
    setMenuOpen(!menuOpen);
  };
  const toggleCart = () => {
    setCartOpen(!cartOpen);
    if (!cartOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <Styled.Header isOpen={menuOpen || cartOpen}>
      <Styled.HeaderPanel>
        <Styled.MenuButton onClick={toggleMenu}>
          <HamburgerIcon open={menuOpen} />
        </Styled.MenuButton>
        <Styled.Logo>
          <Image
            alt="logo"
            src="/assets/shared/desktop/logo.svg"
            height={25}
            width={143}
          />
        </Styled.Logo>
        <Styled.Cart>
          <Styled.CartImg
            onClick={toggleCart}
            src="/assets/shared/desktop/icon-cart.svg"
            alt="cart icon"
          />
          <Cart isOpen={cartOpen} />
        </Styled.Cart>
      </Styled.HeaderPanel>
      <Styled.Menu isOpen={menuOpen} onClick={toggleMenu}>
        <ProductTypes />
      </Styled.Menu>
    </Styled.Header>
  );
}
