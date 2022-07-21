import styled from "styled-components";
interface menuStatus {
  isOpen: boolean;
}

export const Header = styled.header`
  background-color: ${(props) => props.theme.colors.backgroundBlack};
  color: ${(props) => props.theme.colors.textGray};
  position: fixed;
  width: 100%;

  z-index: 1;
  display: flex;
  flex-direction: column;
`;

export const HeaderPanel = styled.section`
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Logo = styled.a`
  color: white;
  font-size: 1.8rem;
`;
export const MenuButton = styled.div``;

export const Menu = styled.div<menuStatus>`
  background-color: ${(props) => props.theme.colors.white};
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

export const Cart = styled.a`
  width: 23px;
  height: 20px;
  cursor: pointer;
`;

export const CartImg = styled.img``;
