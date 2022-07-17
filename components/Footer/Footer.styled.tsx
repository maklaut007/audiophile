import styled from "styled-components";
import headerImage from "/assets/mobile/image-header.jpg";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.backgroundBlack}; ;
`;

export const Title = styled.h1`
  font: ${(props) => props.theme.text.headerFive.font};
  font-variant: normal;
  margin: 40px 0 20px;
`;
export const LinksList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
`;
export const LinksListItem = styled.li`
  font: ${(props) => props.theme.text.body.font};
  margin: 10px;
  cursor: pointer;
`;

export const Link = styled.a``;
export const Description = styled.p`
  margin: 24px;
  font: ${(props) => props.theme.text.body.font};
  opacity: 50%;
  text-align: center;
`;

export const Socials = styled.div`
  margin: 30px 0;
`;
export const SocialsLink = styled.a`
  margin: 0 10px;
`;
