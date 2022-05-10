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
import 'swiper/css/pagination';

import styles from './styles.module.css'
import {Box, Text, Image, Divider} from "@chakra-ui/react";
import { ComponentSwiper } from "./SwiperSlide";

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
          <ComponentSwiper href={"/africa"} image={"/Continentes/Africa.png"} Continente={"Africa"}
            ContinentInfo={"O continente africano é o terceiro maior do mundo"}
          />
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <ComponentSwiper href={"/europa"} image={"/Continentes/Europa.png"} Continente={"Europa"}
            ContinentInfo={"O continente mais antigo"}
          />
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <ComponentSwiper href={"/asia"} image={"/Continentes/asia.jpg"} Continente={"Asia"}
            ContinentInfo={"A Ásia é o maior dos continentes, tanto em área como em população."}
          />
        </SwiperSlide>

      </Swiper>
    </>
  );
};