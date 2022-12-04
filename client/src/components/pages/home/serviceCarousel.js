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
import ServiceSlide from "./serviceSlide";

const ServiceCarousel = (props) => {

    const Services = [
        {
            path: "air-conditioning",
            img: image1,
            icon: "fa-light fa-air-conditioner",
            name: "Air Conditioning",
            description: "Lorem ipsum dolor sit amet consecutur adispiscis. Lorem dis ador la adispicsic Olympus"
        },
    ];

    return (
        <>
            <Swiper
                loop={true}
                slidesPerView={props.count}
                spaceBetween={30}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Pagination, Navigation,]}
                className={"mySwiper"}
            >
            {
                Services.map((service)=>{
                    return (<SwiperSlide><ServiceSlide path={service.path} img={service.img} icon={service.icon} name={service.name} description={service.description}/></SwiperSlide>)
                })
            }
            </Swiper>
        </>
    )
}
export default ServiceCarousel;