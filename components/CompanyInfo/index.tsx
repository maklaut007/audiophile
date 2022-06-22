import React from 'react';
import * as Styled from './CompanyInfo.styled';

function CompanyInfo(): JSX.Element {
  return (
    <Styled.Wrapper>
      <Styled.CompanyInfoImageWrap> 
        <Styled.CompanyInfoImage layout='fill' src='/assets/shared/mobile/image-best-gear.jpg' />
      </Styled.CompanyInfoImageWrap>
      
      <Styled.CompanyInfoTitle>
        BRINGING YOU THE
        <Styled.CompanyInfoTitleHighlight> BEST </Styled.CompanyInfoTitleHighlight>
        AUDIO GEAR
      </Styled.CompanyInfoTitle>
      <Styled.CompanyInfoText>
        Located at the heart of New York City, Audiophile is the premier store for high end
        headphones, earphones, speakers, and audio accessories. We have a large showroom and
        luxury demonstration rooms available for you to browse and experience a wide range of
        our products. Stop by our store to meet some of the fantastic people who make Audiophile
        the best place to buy your portable audio equipment.
      </Styled.CompanyInfoText>
    </Styled.Wrapper>
  );
}

export default CompanyInfo;
