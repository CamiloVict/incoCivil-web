import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 30vh;
  background-color: #05012d;
  margin: 0;
  position: absolute;
  bottom: 0;
  z-index: 2;
`;

export const FirstSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  margin-right: 25px;
  padding-top: 15px;

`;

export const SocialMediaContainer = styled.div`
  height: 90%;

`;

export const TitleFooter = styled.h5`
  font-size: 18px;
  font-weight: Bold;
  color: white;
`;

export const Icon = styled.a`
  margin-right: 25px;
  img{
    width: 200px;
  }
`;
export const PhoneSection = styled.div`
  display: flex;
  align-items: center;
`;
