import React from 'react';

// *Components
import { ContainerIcon } from './WhatsappIcon.styled';

export const WhatsappIcon = () => {
  const phoneNumber = '+57 3172121142'; // Replace with the phone number you want to send a message to
  const message = 'Hola, estoy interesad@ en uno de los servicios brindados por ustedes'; // Replace with the message you want to send
  const source = 'www.incocivil.com'; // Replace with the source of the message

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}&source=${source}`;

  return (
    <ContainerIcon href={whatsappUrl} target='_blank'>
      <img src='/images/whatsapp.png' alt='WhatsApp Icon' />
    </ContainerIcon>
  );
};
