import styled, { css } from 'styled-components';

export const AccordionItemContainer = styled.div`
  ul {
    margin: 0;
    padding: 10px;
  }

  h3 {
    font-size: 16px;
  }
`;

export const AccordionItemHeader = styled.div<{ collapsed: boolean }>`
  height: 50px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px #00000060 solid;
  cursor: pointer;

  img {
    width: 12px;
    height: 12px;
    transition: all ease-in-out 300ms;
    ${(props) =>
      props.collapsed &&
      css`
        transform: rotate(-180deg);
      `};
  }
`;

export const AccordionItemBody = styled.div<{ collapsed: boolean }>`
  width: 300px;
  transition: all ease-in-out 300ms;
  max-height: 0;
  overflow: hidden;
  padding: 0 20px;

  ${(props) =>
    props.collapsed &&
    css`
      max-height: 400px;
      overflow: hidden;
      padding: 20px 20px;
    `};
`;
