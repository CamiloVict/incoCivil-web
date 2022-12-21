import React from 'react';

// *Components
import { Carousel } from '../../../src/Components/Carousel/Carousel';
import { CarouselContainer } from './home.style';
import { CardDescription } from '../../Components/CardDescription/CardDescription'
import { BsCheck2Circle } from 'react-icons/bs';
import { FaWpforms } from 'react-icons/fa';
import { IoMdAttach } from 'react-icons/io'
import { HiOutlineLightBulb } from 'react-icons/hi'
import Jumbotron from '../../../src/Components/Jumbotron';

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

  const budgedItems = [
    {
      icon: <BsCheck2Circle size={80} />,
      description: 'Selecciona el tipo de servicio que deseas presupuestar'
    },
    {
      icon: <FaWpforms size={80} />,
      description: 'Dejanos tus datos de contacto y la ubicación donde se requiere el servicio '
    },
    {
      icon: <IoMdAttach size={80} />,
      description: 'Descríbenos los detalles. Adjunta fotos y documentos necesarios para poder realizar una propuesta.'
    },
    {
      icon: <HiOutlineLightBulb size={80} />,
      description: 'Y listo...Esta información es suficiente para entregarte en 24 horas tu presupuesto. De no ser así, nos pondremos en contacto contigo para aclarar dudas.'
    }
  ]

  const importItems = [
    {
      icon: <BsCheck2Circle size={80} />,
      description: 'Selecciona el tipo de material, calibre, formato y cantidad.'
    },
    {
      icon: <FaWpforms size={80} />,
      description: 'Dejanos tus datos de contacto y la ubicación donde se requiere el servicio '
    },
    {
      icon: <HiOutlineLightBulb size={80} />,
      description: 'Y listo...Esta información es suficiente para entregarte en 24 horas tu presupuesto. De no ser así, nos pondremos en contacto contigo para aclarar dudas.'
    }
  ]

  return (
    <>
      <CarouselContainer>
        <Carousel arrayItems={items} />
      </CarouselContainer>
      <Jumbotron title={'Cotiza ya!'} />
      <CardDescription items={budgedItems} />
      <Jumbotron title={'Importa con nosotros!'} />
      <CardDescription items={importItems} />
    </>
  );
}
