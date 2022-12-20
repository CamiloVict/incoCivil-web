import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import "./styles.css";
import Product from "../Product/Product";
import { Navigation, Pagination } from "swiper";

export const Carousel = (props: any) => {
  const { arrayItems } = props

  const renderItem = () => {
    return arrayItems.map((item: any, indexItem: number) => {
      return <SwiperSlide key={indexItem}>
        <Product {...item} />
      </SwiperSlide>

    })
  }

  return (
    <Swiper
    className="mySwiper"
    allowSlideNext
    allowSlidePrev
    navigation
    pagination
    modules={[Navigation, Pagination]}

    >
      {renderItem()}
    </Swiper>
  );
}