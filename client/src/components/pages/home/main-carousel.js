import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"
import "swiper/css/navigation"

import image1 from "../../../assests/images/img_1.png"
import image2 from "../../../assests/images/pexels-anete-lusina-4792713.jpg"
import image3 from "../../../assests/images/pexels-field-engineer.jpg"
import image4 from "../../../assests/images/pexels-kindel-media-9875405.jpg"

const MainCarousel = () => {
    return (
        <div className={"main-carousel"}>
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
                <SwiperSlide><div className={"main-carousel-card"} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image1})`}}></div></SwiperSlide>
                <SwiperSlide><div className={"main-carousel-card"} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image2})`}}></div></SwiperSlide>
                <SwiperSlide><div className={"main-carousel-card"} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image3})`}}></div></SwiperSlide>
                <SwiperSlide><div className={"main-carousel-card"} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image4})`}}></div></SwiperSlide>
            </Swiper>
        </div>
    )
}
export default MainCarousel;