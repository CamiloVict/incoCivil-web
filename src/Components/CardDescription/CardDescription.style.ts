import styled from 'styled-components';

import { sizes } from '../../../utils/screenSizes';
export const CardContainer = styled.section`
  height: 500px;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 2;
  @media screen and (max-width: ${sizes.tablet}) {
    height: 900px;
  }

  @media screen and (max-width: ${sizes.mobileL}) {
    height: max-content;
  }
`;

export const CardDescription = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 400px;
  width: 200px;
  padding: 0 20px;
  transition: ease-in-out 0.2s;
  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: ${sizes.mobileS}) {
    transform: scale(0.9);
  }

  @media screen and (max-width: ${sizes.mobileS}) {
    height: 300px;
    width: 150px;
    margin: 0;
  }
`;

export const Description = styled.p`
  text-align: center;
  font-size: 16px;
  @media screen and (max-width: ${sizes.mobileL}) {
    width: 100%;
    height: 152px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }
`;
