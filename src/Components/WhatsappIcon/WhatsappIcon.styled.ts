import styled from 'styled-components';
import { sizes } from '../../../utils/screenSizes';

export const ContainerIcon = styled.a`
  img {
    width: 70px;
    height: 70px;
  }
  position: fixed;
  bottom: 130px;
  right: 20px;
  z-index: 3;
  cursor: pointer;
  transition: ease-out 0.2s;
  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: ${sizes.tablet}) {
    img {
      width: 50px;
      height: 50px;
    }
  }


  @media screen and (max-width: ${sizes.mobileL}) {
    img {
      width: 40px;
      height: 40px;
    }
  }

`;
