import React from 'react';
import { HeaderContainer, TitleHeader, Link, Menu } from './header.style';

const Header = () => {
  let activeStyle: { color: 'red' } = {
    color: 'red',
  };

  return (
    <HeaderContainer>
      <Menu>
        <TitleHeader>
          <Link to={'servicios'}>Servicios</Link>
        </TitleHeader>

        <TitleHeader>
          <Link to={'importaciones'}>Importaciones</Link>
        </TitleHeader>

        <TitleHeader>
          <Link to={'contacto'}>Contacto</Link>
        </TitleHeader>
        
        <TitleHeader>
          <Link to={'nosotros'}>¿Porqué IncoCivil?</Link>
        </TitleHeader>

      </Menu>
    </HeaderContainer>
  );
};

export default Header;
