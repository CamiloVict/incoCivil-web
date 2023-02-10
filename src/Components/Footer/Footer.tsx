import React from 'react';

// *Icons
import { FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa';
import { BsTelephonePlusFill } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md'

// * Components
import { FirstSection, FooterContainer, SocialMediaContainer, Icon, PhoneSection, ContainerContact } from './footer.style';
// *Hook
import { useWindowSize } from '../../../src/hooks/useWindowSize';


export const Footer = () => {
  const size = useWindowSize();

  return (
    <FooterContainer>
      <FirstSection>
        <Icon href='/'>
          <img src='/images/logoAzul.png' />
        </Icon>
        <SocialMediaContainer>
          <Icon href='https://instagram.com/incocivilco'>
            <FaInstagramSquare size={size >= 475 ? 40 : 30} color={'black'} />
          </Icon>
          <Icon href='https://www.facebook.com/incocivilco'>
            <FaFacebookSquare size={size >= 475 ? 40 : 30} color={'black'} />
          </Icon>
        </SocialMediaContainer>

        <ContainerContact>
          <PhoneSection>
            <Icon>
              <BsTelephonePlusFill size={size >= 475 ? 30 : 25} color={'black'} />
            </Icon>
            <p style={{ width: 'max-content' }}>+57 3172121142</p>
          </PhoneSection>
          <PhoneSection>
            <Icon>
              <MdAlternateEmail size={size >= 475 ? 30 : 25} color={'black'} />
            </Icon>
            <p>ventas@incocivil.com</p>
          </PhoneSection>
        </ContainerContact>
      </FirstSection>

      <div style={{ color: 'black', paddingLeft: '10px', margin: 0 }}>
        <p>Copyright © 2023 IncoCivil S.A.S</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
