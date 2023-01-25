import React, { useEffect, useState } from 'react';
import ServiceForm from '../../../../../src/Components/ServiceForm';
import { ServiceTypes } from 'utils/types/Services';
import { services } from '../../../../../utils/constants';
import { ServiceContainer } from './service.styled';

const Service = () => {
  const [serviceInfo, setServiceInfo] = useState<ServiceTypes>({
    name: '',
    image: '',
    link: '',
    extraFields: [],
  });

  useEffect(() => {
    const path = window.location.pathname;
    const serviceLink = path.split('/').filter((service) => service.length !== 0)[2];
    const pageService = Object.values(services).filter((service) => service.link === serviceLink);

    setServiceInfo(pageService[0]);
  }, []);

  return (
    <ServiceContainer>
      <h3>{serviceInfo.name}</h3>
      <ServiceForm fields={serviceInfo.extraFields} />
    </ServiceContainer>
  );
};

export default Service;
