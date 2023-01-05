import styled from 'styled-components';
import { sizes } from '../../../utils/screenSizes';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 120px;
  margin: 0;
  z-index: 2;
  margin-top: 20px;
  background-color: white;
  align-items: center;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #ccc;
`;

export const FirstSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  padding-top: 15px;
  height: 70px;
  @media screen and (max-width: ${sizes.mobileL}) {
    transform: scale(0.83);
  }
`;

export const SocialMediaContainer = styled.div`
  height: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.a`
  margin-right: 25px;
  img {
    width: 100px;
  }
`;
export const PhoneSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h5 {
    margin: 0;
  }
`;
