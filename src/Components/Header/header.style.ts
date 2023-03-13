import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { sizes } from '../../../utils/screenSizes';

// * Location from react router

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gainsboro;
  /* position: relative; */
  -webkit-box-shadow: 0px -1px 5px 1px rgba(92, 90, 92, 0.49);
  -moz-box-shadow: 0px -1px 5px 1px rgba(92, 90, 92, 0.49);
  box-shadow: 0px -1px 5px 1px rgba(92, 90, 92, 0.49);
`;

export const Link = styled(NavLink)`
  width: fit-content;
  font-weight: normal;
  text-decoration: none;
  color: black;
  cursor: pointer;
  transition: all ease-in-out 300ms;
  &:hover {
    color: #9f1f00;
  }
`;

export const TitleHeader = styled.h1`
  font-size: 18px;
  font-weight: normal;

  @media screen and (max-width: ${sizes.tablet}) {
    margin: 16px;
    &:hover {
      color: #9f1f00;
    }
  }
`;

export const Menu = styled.nav`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;

  @media screen and (max-width: ${sizes.tablet}) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  width: 30%;
  padding: 10px 20px;
  img {
    height: 60px;
    width: 200px;
    object-fit: cover;
  }

  @media screen and (max-width: ${sizes.tablet}) {
    width: 50%;
    padding: 5px;
  }
`;

export const MobileMenu = styled.div<{ isActive: boolean }>`
  position: fixed;
  width: 0;
  height: 100vh;
  z-index: 999;
  top: 0;
  right: 0;
  background-color: white;
  transition: all ease-in-out 500ms;
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.5);
  visibility: hidden;

  ${(props) =>
    props.isActive &&
    css`
      width: 80vw;
      visibility: visible;
    `}

  .exit-menu--container {
    height: 78px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 25px;
    cursor: pointer;

    > div {
      width: 100px;
      display: flex;
      justify-content: center;
      visibility: visible;
      transition: all ease-in-out 400ms;
      ${(props) =>
        !props.isActive &&
        css`
          visibility: hidden;
        `}
    }
  }

  li {
    display: block;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    cursor: pointer;
    border-radius: 10px;
    transition: all 200ms;

    :hover {
      background-color: rgb(159, 31, 0);
      color: white !important;
    }
  }

  .links--container {
    width: 95%;
    margin: auto;
    border-radius: 10px;
  }
`;

export const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100px;

  section {
    cursor: pointer;
  }

  div {
    width: 25px;
    height: 2px;
    background-color: black;
    margin-bottom: 5px;
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
`;
