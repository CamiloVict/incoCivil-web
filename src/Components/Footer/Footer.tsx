import React from 'react';

// *Icons
import { FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa'
import { BsTelephonePlusFill } from 'react-icons/bs'

// * Components
import { FirstSection, FooterContainer, SocialMediaContainer, Icon, PhoneSection } from './footer.style';
// *Hook
import { useWindowSize } from '../../../src/hooks/useWindowSize';

// TODO ask client how he wanna see the footer

export const Footer = () => {

  const size = useWindowSize()

  return (
    <FooterContainer>
      <FirstSection >
        <Icon href='/'>
          <img src='/images/logoAzul.png' />
        </Icon>
        <SocialMediaContainer >
          <Icon href='https://instagram.com/incocivilco'>
            <FaInstagramSquare size={size >= 475 ? 40 : 30} color={'black'} />
          </Icon>
          <Icon href='https://www.facebook.com/incocivilco'>
            <FaFacebookSquare size={size >= 475 ? 40 : 30} color={'black'} />
          </Icon>
        </SocialMediaContainer>
        <PhoneSection>
          <Icon>
            <BsTelephonePlusFill size={size >= 475 ? 40 : 25} color={'black'} />
          </Icon>
          <h5 style={{width: 'max-content'}}>+57 3172121142</h5>
        </PhoneSection >
      </FirstSection>

      <h5 style={{color: 'black', paddingLeft: '10px', margin: 0}}>
        <p>Copyright © 2020 IncoCivil S.A.S</p>
      </h5>
    </FooterContainer>
  );
};

export default Footer;
