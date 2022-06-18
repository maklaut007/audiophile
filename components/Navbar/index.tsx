import * as Styled from "./navbar.styles";

export default function Navbar() {
  return (
    <Styled.Navbar>
      <Styled.NavLink>Home</Styled.NavLink>
      <Styled.NavLink>Headphones</Styled.NavLink>
      <Styled.NavLink>Speakers</Styled.NavLink>
      <Styled.NavLink>Earphones</Styled.NavLink>
    </Styled.Navbar>
  )
}