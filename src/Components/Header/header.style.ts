import { NavLink } from 'react-router-dom';
import styled, { AnyStyledComponent } from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid gainsboro;
`;

export const Link = styled(NavLink)`
  width: fit-content;
  font-weight: normal;
  text-decoration: none;
  /* color: black; */
  cursor: pointer;
  /* &:hover {
    color: #3b7197;
  } */
`;

export const TitleHeader = styled.li`
  font-size: 18px;
  font-weight: normal;
  color: black;
`;

export const Menu = styled.nav`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: inherit;
`;
