import React from 'react';
// import Swiper core and required modules
import SwiperCore, {
    Keyboard, Navigation, Pagination
} from 'swiper';
import "swiper/css";
// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from '../../hooks/useFetch';
import './Slider.css';






// install Swiper modules
SwiperCore.use([Keyboard, Pagination, Navigation]);


const Slider = () => {
    const [services] = useFetch()
    return (
        <Swiper slidesPerView={3} spaceBetween={30} keyboard={{
            "enabled": true
        }} pagination={{
            "clickable": true
        }} navigation={true} className="mySwiper">
            {services.map(item => (
                <SwiperSlide>
                    <img className="w-36" src={item.img} alt={item.name} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Slider
