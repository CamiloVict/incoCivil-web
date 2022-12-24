import React from 'react'

// *Components
import { ContainerIcon } from './WhatsappIcon.styled'

export const WhatsappIcon = () => {

  const phoneNumber = '+57 3172121142'; // Replace with the phone number you want to send a message to
  const message = 'Hello, how are you?, this a test using the whatsapp icon on incocivil.com'; // Replace with the message you want to send
  const source = 'www.incocivil.com'; // Replace with the source of the message

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}&source=${source}`;

  // window.open(whatsappUrl);

  return (
    <ContainerIcon href={whatsappUrl} target='_blank'>
      <img src="public/images/whatsapp.png" alt="" />
    </ContainerIcon>
  )
}

