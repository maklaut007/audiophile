import styled from 'styled-components';
import Image from 'next/image';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 5%;
  text-align: center;
`;
export const CompanyInfoImageWrap = styled.div`
  width: 90vw;
  height: 90vw;
  position: relative;
`;
export const CompanyInfoImage = styled(Image)`
  border-radius: 8px;
`;
export const CompanyInfoTitle = styled.h1`
  font-size: 28px;
  font-weight: 400;
  margin: 40px 20px;
`;
export const CompanyInfoTitleHighlight = styled.span`
  color: ${(props) => props.theme.colors.orange};
`;
export const CompanyInfoText = styled.p`
  margin: 0 5px;
  font: ${(props) => props.theme.text.body.font};
  opacity: 50%;
`;
