import React from 'react';

// *Components
import { Carousel } from '../../../src/Components/Carousel/Carousel';
import { CarouselContainer } from './home.style';
import { CardDescription } from '../../Components/CardDescription/CardDescription';
import { BsCheck2Circle } from 'react-icons/bs';
import { FaWpforms } from 'react-icons/fa';
import { IoMdAttach } from 'react-icons/io';
import { HiOutlineLightBulb } from 'react-icons/hi';
import Jumbotron from '../../../src/Components/Jumbotron';
import { Banner } from '../../../src/Components/Banner/Banner';

// * Hooks
import { useWindowSize } from '../../../src/hooks/useWindowSize';

export default function HomePage() {
  const size = useWindowSize();

  const items = [
    {
      src: 'images/Cocina.jpeg',
      description: 'ESPECIALISTAS EN SUPERFICIES COMPACTAS',
    },
    {
      src: 'images/PISO-MARMOL.jpg',
      description: 'MANTENIMIENTO DE TODO TIPO DE SUPERFICIES',
    },
    {
      src: 'images/Piscina.jpg',
      description: 'TODO TIPO DE APLICACIÓNES ARQUITECTONICAS',
    },
    {
      src: 'images/cocina-blanca.jpg',
      description: 'ASESORIA PERMANENTE PARA TU REMODELACIÓN',
    },
  ];

  const budgedItems = [
    {
      icon: <BsCheck2Circle size={size >= 475 ? 80 : 60} />,
      description: 'Selecciona el tipo de servicio que deseas presupuestar',
    },
    {
      icon: <FaWpforms size={size >= 475 ? 80 : 60} />,
      description: 'Dejanos tus datos de contacto y la ubicación donde se requiere el servicio ',
    },
    {
      icon: <IoMdAttach size={size >= 475 ? 80 : 60} />,
      description: 'Descríbenos los detalles. Adjunta fotos y documentos necesarios para poder realizar una propuesta.',
    },
    {
      icon: <HiOutlineLightBulb size={size >= 475 ? 80 : 60} />,
      description:
        'Y listo...Esta información es suficiente para entregarte en 24 horas tu presupuesto. De no ser así, nos pondremos en contacto contigo para aclarar dudas.',
    },
  ];

  const importItems = [
    {
      icon: <BsCheck2Circle size={size >= 475 ? 80 : 60} />,
      description: 'Selecciona el tipo de material, calibre, formato y cantidad.',
    },
    {
      icon: <FaWpforms size={size >= 475 ? 80 : 60} />,
      description: 'Dejanos tus datos de contacto y la ubicación donde se requiere el servicio ',
    },
    {
      icon: <HiOutlineLightBulb size={size >= 475 ? 80 : 60} />,
      description:
        'Y listo...Esta información es suficiente para entregarte en 24 horas tu presupuesto. De no ser así, nos pondremos en contacto contigo para aclarar dudas.',
    },
  ];
  return (
    <>
      <CarouselContainer>
        <Carousel arrayItems={items} />
      </CarouselContainer>
      <Jumbotron title={'Cotiza ya!'} />
      <CardDescription items={budgedItems} />
      <Banner />
      <Jumbotron title={'Importa con nosotros!'} />
      <CardDescription items={importItems} />
    </>
  );
}
