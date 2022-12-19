import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"
import "swiper/css/navigation"

import image1 from "../../../assests/images/services/AirConditioning.jpg"
import image2 from "../../../assests/images/services/Plumbing.jpg"
import image3 from "../../../assests/images/services/Painting.jpg"
import image4 from "../../../assests/images/services/FalseCeiling.jpg"

const HeroCarousel = () => {
    return (
        <div className="hero-carousel relative w-full h-[100vh]">
            <Swiper
                loop={true}
                direction={"vertical"}
                pagination={{
                    clickable: true
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                modules={[Pagination, Autoplay]}
                className={"mySwiper"}
            >
                <SwiperSlide><div className={"hero-carousel-card"} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image1})`}}></div></SwiperSlide>
                <SwiperSlide><div className={"hero-carousel-card"} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image4})`}}></div></SwiperSlide>
                <SwiperSlide><div className={"hero-carousel-card"} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image2})`}}></div></SwiperSlide>
                <SwiperSlide><div className={"hero-carousel-card"} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image3})`}}></div></SwiperSlide>
            </Swiper>
        </div>
    )
}
export default HeroCarousel;