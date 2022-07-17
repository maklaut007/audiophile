/* eslint-disable react/require-default-props */
import React from "react";
import * as Styled from "./SeeProductButton.styled";
import Link from "next/link";

interface ButtonProps {
  address: string;
  border?: string;
  background?: string;
  textColor?: string;
}

function SeeProductButton({
  address = "#",
  border = "none",
  background = "#D87D4A",
  textColor = "#fff",
}: ButtonProps): JSX.Element {
  return (
    <Link href={address}>
      <Styled.Wrapper
        border={border}
        background={background}
        textColor={textColor}
      >
        SEE PRODUCT
      </Styled.Wrapper>
    </Link>
  );
}

export default SeeProductButton;
