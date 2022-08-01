import styled from "styled-components";
interface openStatus {
  isOpen: boolean;
}

export const Header = styled.header<openStatus>`
  background-color: ${(props) => props.theme.colors.backgroundBlack};
  color: ${(props) => props.theme.colors.textGray};
  position: fixed;
  width: 100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  box-shadow: ${(props) =>
    props.isOpen ? "0 0 0 10000px rgba(0,0,0,.50);" : "none"};
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
  display: flex;
`;
export const MenuButton = styled.div``;

export const Menu = styled.div<openStatus>`
  background-color: ${(props) => props.theme.colors.white};
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

export const Cart = styled.div`
  width: 23px;
  height: 20px;
  cursor: pointer;
`;

export const CartImg = styled.img``;
