import styled from 'styled-components';

export const CardContainer = styled.section`
  height: 500px;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
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
  &:hover{
    transform: scale(1.05 );
  }
`;

export const Description = styled.p`
  text-align: center;
  font-size: 16px;
`