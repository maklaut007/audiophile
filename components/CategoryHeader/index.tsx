import React from 'react';
import * as Styled from './CategoryHeader.styled';
import Link from 'next/link';
interface props {
  name: string
}
function CategoryHeader({name}:props) {
  return (
    <Styled.CategoryHeader>
      <Styled.Title>{name.toUpperCase()}</Styled.Title>
    </Styled.CategoryHeader>
  );
}

export default CategoryHeader;
