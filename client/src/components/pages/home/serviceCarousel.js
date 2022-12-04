import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"
import "swiper/css/navigation"

import electrical from "../../../assests/images/services/electrical.jpg"
import plumbing from "../../../assests/images/services/plumbing.jpg"
import plastering from "../../../assests/images/services/plastring.jpg"
import airCond from "../../../assests/images/services/airCond.jpg"
import falseCeiling from "../../../assests/images/services/falseCeling.jpg"
// import image2 from "../../../assests/images/pexels-anete-lusina-4792713.jpg"
// import image3 from "../../../assests/images/pexels-field-engineer.jpg"
// import image4 from "../../../assests/images/pexels-kindel-media-9875405.jpg"
import ServiceSlide from "./serviceSlide";

const ServiceCarousel = (props) => {

    const Services = [
        {
            path: "air-conditioning",
            img: airCond,
            icon: "fa-light fa-air-conditioner",
            name: "Air Conditioning",
            description: "The installation, testing& commissioning, maintenance of the air conditioning and ventilation system shall be carried out by a specialist in order to ensure proper operation."
        },
        {
            path: "plumbing",
            img: plumbing,
            icon: "fa-light fa-air-conditioner",
            name: "Plumbing",
            description: "The installation, testing& commissioning, maintenance of the Plumbing system shall be carried out by a specialist in order to ensure proper operation"
        },
        {
            path: "electrical",
            img: electrical,
            icon: "fa-light fa-air-conditioner",
            name: "Electrical",
            description: "The installation, testing& commissioning, maintenance of the Electrical & ELV system shall be carried out by a specialist in order to ensure proper operation."
        },
        {
            path: "plaster",
            img: plastering,
            icon: "fa-light fa-air-conditioner",
            name: "Plaster",
            description: "We have tremendous experience and expertise in the field and are able to deliver outstanding plaster services. We undertake both official and residential requirements."
        },
        {
            path: "floor-tiling",
            img: electrical,
            icon: "fa-light fa-air-conditioner",
            name: "Floor Tiling",
            description: "We specialize in tiles, marble, stone masonry, fill and all kinds of decorating. We cater to all types of domestic, commercial or business tiling services."
        },
        {
            path: "false-ceiling",
            img: falseCeiling,
            icon: "fa-light fa-air-conditioner",
            name: "False Ceiling",
            description: "We specialize in installing false (suspended) ceilings and partitioning covering all commercial and domestic areas across."
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