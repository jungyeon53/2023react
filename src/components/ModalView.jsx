import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper JS
import { Navigation } from 'swiper/modules';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



function Modal() {
    return(
      <>
      <h3>안녕하세요</h3>
      <Swiper navigation={true} modules={[Navigation]}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
      </>
    )
  }



  export default Modal;