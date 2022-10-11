import React from 'react';
import { brotliDecompress } from 'zlib';
import { HeaderContainer, TitleHeader, Link, Menu } from './header.style';

const Header = () => {
  let activeStyle: { color: 'red' } = {
    color: 'red',
  };

  return (
    <HeaderContainer>
      <Menu>
        <TitleHeader>
          <Link to={'products'}>Productos y Servicios</Link>
        </TitleHeader>

        <TitleHeader>
          <Link to={'services'}>Cotizadores Virtuales</Link>
        </TitleHeader>

        <TitleHeader>
          <Link to={'importations'}>Importa con Nosotros</Link>
        </TitleHeader>

        <TitleHeader>
          <Link to={'professional'}>Profesionales</Link>
        </TitleHeader>

        <TitleHeader>
          <Link to={'contact'}>Contacto</Link>
        </TitleHeader>
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
