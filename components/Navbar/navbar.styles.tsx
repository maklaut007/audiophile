import styled from 'styled-components';
export const Navbar = styled.nav`
  background-color: ${props => props.theme.colors.backgroundBlack};
  color: ${props => props.theme.colors.textGray};
  height: 80px;
  position: fixed;
  width: 100%;
  border-bottom: 1px solid rgba(255,255,255, 0.2);
  z-index: 1;
`

export const NavLink = styled.a`
  
`
export const Logo = styled.a`

`
export const Cart = styled.a`
  width: 23px;
  height: 20px;
  cursor: pointer;
`;

export const CartImg = styled.img`

`