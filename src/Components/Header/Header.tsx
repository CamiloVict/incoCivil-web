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
          <Link to={'services'}>Servicios</Link>
        </TitleHeader>

        <TitleHeader>
          <Link to={'importations'}>Importaciones</Link>
        </TitleHeader>

        <TitleHeader>
          <Link to={'contact'}>Contacto</Link>
        </TitleHeader>
        
        <TitleHeader>
          <Link to={'nosotros'}>¿Porqué IncoCivil?</Link>
        </TitleHeader>

      </Menu>
    </HeaderContainer>
  );
};

export default Header;
