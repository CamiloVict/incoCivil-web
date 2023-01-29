import React from 'react';
import Jumbotron from '../../../../src/Components/Jumbotron';
import Card from '../../../../src/Components/Card';
import { services } from '../../../../utils/constants';
import { TechnicalServicesContainer, CardsContainer } from './technical-services.styles';

const TechicalServicesPage = () => {
  return (
    <TechnicalServicesContainer>
      <Jumbotron title={'Servicios técnicos'} />
      <CardsContainer>
        {Object.values(services).map((service) => (
          <div className='card--container'>
            <Card header={service.name} image={service.image} redirectLink={service.link} />
          </div>
        ))}
      </CardsContainer>
    </TechnicalServicesContainer>
  );
};

export default TechicalServicesPage;
