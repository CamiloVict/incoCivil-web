import React from 'react';

// *Components
import ProductsCarousel from '../../Components/ProductsCarousel/Carousel';
import ProfessionalCarousel from '../../Components/ProfessionalCarousel/ProfessionalCarousel';
import Pharalax from '../../Components/Pharalax/Pharalax';

// *Styled Components
import { CarouselContainer } from './home.style';

export default function HomePage() {
  const defaultValues = [
    {
      img: 'IMAGEN',
      description: 'description',
    },
    {
      img: 'IMAGEN',
      description: 'description',
    },
    {
      img: 'IMAGEN',
      description: 'description',
    },
    {
      img: 'IMAGEN',
      description: 'description',
    },
    {
      img: 'IMAGEN',
      description: 'description',
    },
    {
      img: 'IMAGEN',
      description: 'description',
    },
    {
      img: 'IMAGEN',
      description: 'description',
    },
    {
      img: 'IMAGEN',
      description: 'description',
    },
  ];

  // !Functions to implement render props
  // const renderItems = () => {
  //   return defaultValues.map((item, indexItem) => {
  //     console.log('33  >>>>>>>>> ', item);
  //     return (<div key={indexItem}>
  //       <Product item={item} />
  //     </div>)
  //   })
  // }

  return (
    <>
      <>
        <Pharalax />
      </>
      <CarouselContainer>
        {/* <ProductsCarousel title={'Tipos de Marmol'} items={defaultValues} /> */}
        {/* <ProfessionalCarousel /> */}
      </CarouselContainer>
    </>
  );
}
