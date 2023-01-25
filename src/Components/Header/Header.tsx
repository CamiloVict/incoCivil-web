import React, { useState } from 'react';
import { useEffect } from 'react';
import { HeaderContainer, TitleHeader, Link, Menu, LogoContainer, MobileMenu, HamburgerMenu } from './header.style';

const Header = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  let activeStyle: { color: 'red' } = {
    color: 'red',
  };

  const handleClick = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  useEffect(() => {
    if (isMobileNavActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileNavActive]);

  const linksContainer = () => {
    return (
      <>
        <Link to={'servicios'}>
          <TitleHeader>Servicios</TitleHeader>
        </Link>

        <Link to={'importaciones'}>
          <TitleHeader>Importaciones</TitleHeader>
        </Link>

        <Link to={'contacto'}>
          <TitleHeader>Contacto</TitleHeader>
        </Link>
      </>
    );
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <a href='/'>
          <img src='/images/logo.svg'></img>
        </a>
      </LogoContainer>
      <Menu>{linksContainer()}</Menu>

      <HamburgerMenu onClick={handleClick}>
        <section>
          <div></div>
          <div></div>
          <div></div>
        </section>
      </HamburgerMenu>

      <MobileMenu isActive={isMobileNavActive}>
        <div className='exit-menu--container' onClick={handleClick}>
          <div>&#x2715;</div>
        </div>
        <section className='links--container'>{linksContainer()}</section>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
