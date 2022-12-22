import React from 'react';

// *Icons
import { FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa'
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
          <Icon href='https://instagram.com/incocivilco'>
            <FaInstagramSquare size={40} color={'black'} />
          </Icon>
          <Icon href='https://www.facebook.com/incocivilco'>
            <FaFacebookSquare size={40} color={'black'} />
          </Icon>
        </SocialMediaContainer>
        <PhoneSection>
          <Icon>
            <BsTelephonePlusFill size={40} color={'black'} />
          </Icon>
          <h5>+57 3172121142</h5>
        </PhoneSection >
      </FirstSection>

      <h5 style={{color: 'black', paddingLeft: '10px', margin: 0}}>
        <p>Copyright © 2020 IncoCivil S.A.S</p>
      </h5>
    </FooterContainer>
  );
};

export default Footer;
