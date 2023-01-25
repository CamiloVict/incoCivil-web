import React from 'react';
import { JumbotronContainer } from './jumbotron.styled';

const Jumbotron = ({ title }: any) => {
  return (
    <JumbotronContainer>
      <h2>{title}</h2>
    </JumbotronContainer>
  );
};

export default Jumbotron;
