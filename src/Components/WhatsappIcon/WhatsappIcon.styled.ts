import styled from 'styled-components';

export const ContainerIcon = styled.a`
  img {
    width: 70px;
    height: 70px;
  }
  position: fixed;
  bottom: 80px;
  right: 20px;
  z-index: 3;
  cursor: pointer;
  transition: ease-out 0.2s;
  &:hover{
    transform: scale(1.1);
  }
`;
