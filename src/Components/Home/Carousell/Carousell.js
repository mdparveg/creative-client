import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import c1 from '../../../images/c1.png'
import c2 from '../../../images/c2.png'
import c3 from '../../../images/c3.png'
import c4 from '../../../images/c4.png'
import c5 from '../../../images/c5.png'
import './Carousell.css'

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


const Carousell = () => {
    return (
        <div className="carousell">
            <h4 className="text-center text-light pt-5 pb-5">Here some of our <span style={{color: '#7AB259'}}>works</span></h4>
<Swiper 
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img className="img-fluid" src={c1} alt=""/></SwiperSlide>
      <SwiperSlide><img className="img-fluid" src={c2} alt=""/></SwiperSlide>
      <SwiperSlide><img className="img-fluid"src={c3} alt=""/></SwiperSlide>
      <SwiperSlide><img className="img-fluid"src={c5} alt=""/></SwiperSlide>
      <SwiperSlide><img className="img-fluid"src={c4} alt=""/></SwiperSlide>
    </Swiper>
        </div>
        
    );
};

export default Carousell;