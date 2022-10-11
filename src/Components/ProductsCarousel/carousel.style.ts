import styled from 'styled-components';

// *Swiper Library
import { Swiper, SwiperSlide } from 'swiper/react';
// *Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const ContainerCarousel = styled.div`
  width: 90vw;
  height: 300px;
  background-color: #eaebed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid blue;
`;

export const SwiperContainer = styled(Swiper)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid red;
  height: 350px;
`;

export const SwiperContent = styled(SwiperSlide)`
  width: 300px;
  height: 300px;
  /* background-color: azure; */
`;
