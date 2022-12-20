import React from 'react';

// *Components
import { Carousel } from '../../../src/Components/Carousel/Carousel';
import { CarouselContainer } from './home.style';

export default function HomePage() {

  const items = [
    {
      src: 'public/images/Cocina.jpeg',
      description: 'ESPECIALISTAS EN SUPERFICIES COMPACTAS'
    },
    {
      src: 'public/images/PISO-MARMOL.jpg',
      description: 'MANTENIMIENTO DE TODO TIPO DE SUPERFICIES'
    },
    {
      src: 'public/images/Piscina.jpg',
      description: 'TODO TIPO DE APLICACIÓNES ARQUITECTONICAS'
    },
    {
      src: 'public/images/cocina-blanca.jpg',
      description: 'ASESORIA PERMANENTE PARA TU REMODELACIÓN'
    },
  ]

  return (
    <CarouselContainer>
      <Carousel arrayItems={items} />
    </CarouselContainer>
  );
}
