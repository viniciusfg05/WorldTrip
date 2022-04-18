import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

// import "./styles.css";

import styles from './styles.module.css'
import {Box, Text, Image, Divider} from "@chakra-ui/react";

export function CompSwiper() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <Image src='Europa.jpg' alt='' filter='auto' brightness='60%'/>
          <Box pos="absolute" color="#fff" >
            <Text fontWeight="bold" fontSize="48px">Europa</Text>
            <Text fontWeight="bold" fontSize="24px">O continente mais antigo</Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image src='Africa.jpg' alt=''/>
        </SwiperSlide>

      </Swiper>
    </>
  );
};