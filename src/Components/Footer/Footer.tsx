import React from 'react';

// *Icons
import { FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa';
import { BsTelephonePlusFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai'

// * Components
import { FirstSection, FooterContainer, SocialMediaContainer, Icon, PhoneSection, ContainerContact } from './footer.style';
// *Hook
import { useWindowSize } from '../../../src/hooks/useWindowSize';

// TODO ask client how he wanna see the footer

export const Footer = () => {
  const size = useWindowSize();
  const iconColor : string = '05012D';
  return (
    <FooterContainer>
      <FirstSection>
        <Icon href='/'>
          <img src='/images/logoAzul.png' />
        </Icon>
        <SocialMediaContainer>
          <Icon href='https://instagram.com/incocivilco'>
            <FaInstagramSquare size={size >= 475 ? 40 : 30} color={iconColor} />
          </Icon>
          <Icon href='https://www.facebook.com/incocivilco'>
            <FaFacebookSquare size={size >= 475 ? 40 : 30} color={iconColor} />
          </Icon>
        </SocialMediaContainer>

        <ContainerContact>
          <PhoneSection>
            <Icon>
              <BsTelephonePlusFill size={size >= 475 ? 30 : 25} color={iconColor} />
            </Icon>
            <p style={{ width: 'max-content' }}>+57 3172121142</p>
          </PhoneSection>
          <PhoneSection>
            <Icon>
              <AiOutlineMail size={size >= 475 ? 30 : 25} color={iconColor} />
            </Icon>
            <p>ventas@incocivil.com</p>
          </PhoneSection>
        </ContainerContact>
      </FirstSection>

      <div style={{ color: iconColor, paddingLeft: '10px', margin: 0 }}>
        <p>Copyright © 2023 IncoCivil S.A.S</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
