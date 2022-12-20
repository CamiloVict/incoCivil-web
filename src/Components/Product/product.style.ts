import styled from 'styled-components';

export const ProductContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Description = styled.h2`
  position: absolute;
  right: 0;
  height: 100%;
  padding: 40px;
  width: 40%;
  background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(5,1,45,1));
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;
