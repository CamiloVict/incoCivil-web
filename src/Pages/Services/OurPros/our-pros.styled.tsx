import styled, { css } from 'styled-components';
import { sizes } from '../../../../utils/screenSizes';

export const OurProsContainer = styled.section<{ isOpen: boolean }>`
  min-height: 60vh;
  display: flex;
  justify-content: center;
  position: relative;
  .trigger {
    display: none;
    height: 21px;
    width: 30px;
    cursor: pointer;
    margin-left: 10px;
    position: absolute;
    top: -10px;
    left: 0;
    margin-bottom: 15px;
    @media screen and (max-width: ${sizes.tablet}) {
      display: block;
    }

    div {
      height: 2px;
      background-color: black;
      margin-bottom: 4px;
      transition: all ease-in-out 300ms;
      &:nth-child(1) {
        width: 80%;
        ${(props) =>
          props.isOpen &&
          css`
            width: 40%;
          `};
      }

      &:nth-child(2) {
        width: 60%;
        ${(props) =>
          props.isOpen &&
          css`
            width: 60%;
          `};
      }

      &:nth-child(3) {
        width: 40%;
        ${(props) =>
          props.isOpen &&
          css`
            width: 80%;
          `};
      }
    }
  }
`;

export const AccordionContainer = styled.div<{ isOpen: boolean }>`
  width: 30%;

  h3{
    color: #9F1F00;
  }

  section {
    padding: 10px;
  }

  @media screen and (max-width: ${sizes.tablet}) {
    section {
      text-align: center;
    }
    width: 0% !important;
    transition: all ease-in-out 300ms;
    background-color: white;
    overflow: hidden;
    visibility: hidden;

    ${(props) =>
      props.isOpen &&
      css`
        overflow: auto;
        width: 100% !important;
        visibility: visible;
      `}
  }
`;

export const ProfessionalsContainer = styled.div<{ isOpen: boolean }>`
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

  .professionals--info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
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
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  img {
    width: 350px;
  }
`;
