import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"
import "swiper/css/navigation"

import image1 from "../../../assests/images/img_1.png"
import image2 from "../../../assests/images/pexels-anete-lusina-4792713.jpg"
import image3 from "../../../assests/images/pexels-field-engineer.jpg"
import image4 from "../../../assests/images/pexels-kindel-media-9875405.jpg"

const ServiceCarousel = () => {

    return (
        <>
            <div className={"service-carousel"}>
                <Swiper
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation,]}
                    className={"mySwiper"}
                >
                    <SwiperSlide><div className={"service-carousel-card"}>
                        <div className={"service-carousel-card-img"} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image1})`}}></div>
                        <div className={"service-carousel-card-content"}>
                            <div className={"service-carousel-card-content-info"}>
                                <h2>Ac Repair</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi ipsam, distinctio nemo beatae tempore.</p>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className={"service-carousel-card"}>
                        <div className={"service-carousel-card-img"} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image2})`}}></div>
                        <div className={"service-carousel-card-content"}>
                            <div className={"service-carousel-card-content-info"}>
                                <h2>Ac Repair</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi ipsam, distinctio nemo beatae tempore.</p>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className={"service-carousel-card"}>
                        <div className={"service-carousel-card-img"} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image3})`}}></div>
                        <div className={"service-carousel-card-content"}>
                            <div className={"service-carousel-card-content-info"}>
                                <h2>Ac Repair</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi ipsam, distinctio nemo beatae tempore.</p>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className={"service-carousel-card"}>
                        <div className={"service-carousel-card-img"} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image4})`}}></div>
                        <div className={"service-carousel-card-content"}>
                            <div className={"service-carousel-card-content-info"}>
                                <h2>Ac Repair</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi ipsam, distinctio nemo beatae tempore.</p>
                            </div>
                        </div>
                    </div></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
export default ServiceCarousel;