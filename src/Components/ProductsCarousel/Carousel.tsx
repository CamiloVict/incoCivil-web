// * React dependencies
import React, { useEffect, useState } from 'react';

// * import Swiper core and required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// *Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// * Hooks
import { useWindowSize } from '../../hooks/useWindowSize';
import Product from '../Product/Product';
import { ContainerCarousel, SwiperContainer, SwiperContent } from './carousel.style';

// tslint:disable-next-line:variable-name
export const ProductsCarousel = (props: any): JSX.Element => {
  // *States
  const [quantity, setQuantity] = useState(4);
  // *Hook
  const withState: number = useWindowSize();

  const renderItems = () => {
    return props.items.map((item: any, indexItem: number) => {
      return (
        <SwiperSlide key={indexItem}>
          <Product item={item} />
        </SwiperSlide>
      );
    });
  };

  return (
    // <ContainerCarousel>
    <SwiperContainer
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      direction={'horizontal'}
      navigation={true}
      pagination={true}
      centeredSlides={true}
      slidesPerView={4}
      preventClicksPropagation
    >
      {renderItems()}
    </SwiperContainer>
    // </ContainerCarousel>
  );
};

export default ProductsCarousel;
