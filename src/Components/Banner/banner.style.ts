import styled from 'styled-components';
import { sizes } from '../../../utils/screenSizes';

export const BannerContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(5,1,45, 0.9);
  @media screen and (max-width: ${sizes.tablet}) {
    height: 420px;
  }
`;

export const Image = styled.img`
  width: 40vw;
  height: 700px;
  object-fit: cover;
  @media screen and (max-width: ${sizes.tablet}) {
    display: none;
  }
`;

export const ContainerText = styled.div`
  width: 60%;
  margin-right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  @media screen and (max-width: ${sizes.tablet}) {
    width: 100%;
    font-size: 14px;
    text-align: justify;
    margin: 0;
    padding: 10px 0;
  }
`;

export const Text = styled.h2`
  width: 80%;
  padding: 15px;
`;
