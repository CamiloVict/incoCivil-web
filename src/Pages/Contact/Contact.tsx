import React from 'react';
import MapComponent from '../../../src/Components/Map';

import ServiceForm from '../../Components/ServiceForm';
import { ContactContainer, MapContainer, ServiceFormContainer } from './contact.styled';

const Contact = () => {
  return (
    <ContactContainer>
      <ServiceFormContainer>
        <ServiceForm fields={[]} />
      </ServiceFormContainer>
      <MapContainer>
        <MapComponent />
      </MapContainer>
    </ContactContainer>
  );
};

export default Contact;
