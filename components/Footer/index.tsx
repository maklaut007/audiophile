import React from "react";
import * as Styled from "./Footer.styled";
import Link from "next/link";

function Footer(): JSX.Element {
  return (
    <Styled.Footer>
      <Styled.Title>audiophile</Styled.Title>
      <Styled.LinksList>
        <Styled.LinksListItem>
          <Link href="/">
            <Styled.Link>HOME</Styled.Link>
          </Link>
        </Styled.LinksListItem>
        <Styled.LinksListItem>
          <Link
            href={{
              pathname: "/category/[type]",
              query: { type: "headphones" },
            }}
          >
            <Styled.Link>HEADPHONES</Styled.Link>
          </Link>
        </Styled.LinksListItem>
        <Styled.LinksListItem>
          <Link
            href={{
              pathname: "/category/[type]",
              query: { type: "speakers" },
            }}
          >
            <Styled.Link>SPEAKERS</Styled.Link>
          </Link>
        </Styled.LinksListItem>
        <Styled.LinksListItem>
          <Link
            href={{
              pathname: "/category/[type]",
              query: { type: "earphones" },
            }}
          >
            <Styled.Link>EARPHONES</Styled.Link>
          </Link>
        </Styled.LinksListItem>
      </Styled.LinksList>
      <Styled.Description>
        Audiophile is an all in one stop to fulfill your audio needs. We&apos;re
        a small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </Styled.Description>
      <Styled.Description>
        Copyright 2021. All Rights Reserved
      </Styled.Description>
      <Styled.Socials>
        <Styled.SocialsLink>1</Styled.SocialsLink>
        <Styled.SocialsLink>2</Styled.SocialsLink>
        <Styled.SocialsLink>3</Styled.SocialsLink>
      </Styled.Socials>
    </Styled.Footer>
  );
}

export default Footer;
