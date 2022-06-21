/* eslint-disable react/require-default-props */
import React from 'react';
import * as Styled from './SeeProductButton.styled';

interface ButtonProps {
  address: string,
  border?: string,
  background?: string,
  textColor?: string,
}

function SeeProductButton({
  address = '#', border = 'none', background = '#D87D4A', textColor = '#fff',
}: ButtonProps): JSX.Element {
  return (
    <Styled.Wrapper border={border} background={background} textColor={textColor} href={address}>
      SEE PRODUCT
    </Styled.Wrapper>
  );
}

export default SeeProductButton;
