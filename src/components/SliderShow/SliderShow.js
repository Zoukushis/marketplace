import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import weabove from '../../assets/weabovepp.avif'
import weabovelogo from '../../assets/weabove.webp'
import verified from '../../assets/verified.png'
import { Mousewheel, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import '../SliderShow/slideShow.scss';
import "swiper/css/pagination";



// import required modules
import { Navigation } from "swiper";

export default function App() {
  return (
    <>
     < Swiper
        direction={"horizontal"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper__slide">
            <div className="img__container">
                <img src={weabove} className='swiper__img'></img>
                <img src={weabovelogo} className="swiper__logo"></img>
                <h2>WeAbove Prime</h2>
                <span className="creator">By WeAboveOfficial <img src={verified} className='verified'/></span>
                <span className="volume">1,550 items * 1.34467 ETH </span>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
            <div className="img__container">
                <img src={weabove} className='swiper__img'></img>
                <img src={weabovelogo} className="swiper__logo"></img>
                <h2>WeAbove Prime</h2>
                <span className="creator">By WeAboveOfficial <img src={verified} className='verified'/></span>
                <span className="volume">1,550 items * 1.34467 ETH </span>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
            <div className="img__container">
                <img src={weabove} className='swiper__img'></img>
                <img src={weabovelogo} className="swiper__logo"></img>
                <h2>WeAbove Prime</h2>
                <span className="creator">By WeAboveOfficial <img src={verified} className='verified'/></span>
                <span className="volume">1,550 items * 1.34467 ETH </span>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

