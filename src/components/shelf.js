import Card from "./card";
import styles from "@/styles/Shelf.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Shelf = () => {
  return (
    <div className={styles.shelf}>
      <Swiper>
        <SwiperSlide>assd</SwiperSlide>
        <SwiperSlide>assdasssds</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Shelf;
