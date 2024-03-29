import styled, { css } from 'styled-components';
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
  -webkit-box-shadow: 0px -1px 5px 1px rgba(92, 90, 92, 0.49);
  -moz-box-shadow: 0px -1px 5px 1px rgba(92, 90, 92, 0.49);
  box-shadow: 0px -1px 5px 1px rgba(92, 90, 92, 0.49);
`;

export const FirstSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding-top: 15px;
  height: 70px;
  @media screen and (max-width: ${sizes.mobileS}) {
    transform: scale(0.83);
  }
`;
export const ContainerContact = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100px;
  width: max-content;
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

  @media screen and (max-width: ${sizes.mobileL}) {
    transform: scale(0.83);
    display: none;
  }
`;
