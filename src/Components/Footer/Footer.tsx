import React from 'react';
import { LogoContainer } from '../Header/header.style';

// *Icons
import { FaInstagramSquare, FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa'
import { BsTelephonePlusFill } from 'react-icons/bs'

// * Components
import { FirstSection, FooterContainer, SocialMediaContainer, TitleFooter, Icon, PhoneSection } from './footer.style';

// TODO ask client how he wanna see the footer

export const Footer = () => {
  return (
    <FooterContainer>
      <FirstSection >
        <Icon href='/'>
          <img src='/images/LOGO-FOOTER.png' />
        </Icon>
        <SocialMediaContainer >
          <Icon href='www.instagram.com'>
            <FaInstagramSquare size={60} color={'black'} />
          </Icon>
          <Icon href='www.instagram.com'>
            <FaTwitterSquare size={60} color={'black'} />
          </Icon>
          <Icon href='www.instagram.com'>
            <FaFacebookSquare size={60} color={'black'} />
          </Icon>
        </SocialMediaContainer>
        <PhoneSection>
          <Icon>
            <BsTelephonePlusFill size={60} color={'black'} />
          </Icon>
          <h5>+57 3136955846</h5>
        </PhoneSection>
      </FirstSection>
      <h5 style={{color: 'black', paddingLeft: '10px', marginBottom: 0}}>
        <p>Copyright © 2020 IncoCivil S.A.S</p>
      </h5>
    </FooterContainer>
  );
};

export default Footer;
