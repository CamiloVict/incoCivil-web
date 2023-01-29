import styled, { css } from 'styled-components';
import { sizes } from '../../../utils/screenSizes';

export const ImportsContainer = styled.div<{ isOpen: boolean }>`
  width: 90vw;
  margin: auto;
  display: flex;

  ${(props) =>
    props.isOpen &&
    css`
      @media screen and (max-width: ${sizes.tablet}) {
        height: 280px;
      }
    `}
`;

export const InfoContainer = styled.div<{ isOpen: boolean }>`
  width: 70%;

  .imports--info {
    display: flex;
    justify-content: center;
    gap: 10%;
  }

  form {
    display: flex;
    justify-content: center;
    width: 60%;
    flex-direction: column;
  }

  label {
    margin-top: 10px;
  }

  img {
    width: 30%;
    height: 100%;
    margin-top: 10px;
  }

  h2 {
    margin: 0;
  }

  @media screen and (max-width: ${sizes.tablet}) {
    width: 100% !important;
    overflow: auto;
    visibility: visible;
    text-overflow: clip;
    ${(props) =>
      props.isOpen &&
      css`
        overflow: hidden;
        visibility: hidden;
        width: 0% !important;
      `}
  }

  @media screen and (max-width: ${sizes.mobileL}) {
    .imports--info {
      flex-direction: column;
    }

    form {
      width: 100%;
    }

    img {
      width: 100%;
    }
  }
`;
