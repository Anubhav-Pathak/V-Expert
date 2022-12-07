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

const ServiceSlide = (props) => {
    return (
        <a href={`/${props.path}`} className='flex flex-col relative bg-yellow-400 rounded-lg overflow-hidden'>
            <img src={props.img} alt="Service" className='absolute top-0 left-0' height="150px" />
            <div className='relative bg-white z-10 mt-[120px] mb-4 mx-4 h-full text-center p-4 rounded min-h-[175px]'>
                <i class={`fa-solid ${props.icon} fa-2xl absolute top-[-40px] left-0 p-4 py-8 bg-yellow-400 rounded-full`}></i>
                <h4 className='mb-2 text-2xl lg:text-lg font-semibold'>{props.name}</h4>
                <p className='text-sm lg:text-xs'>{props.description}</p>
            </div>
        </a>
    )
}

const ServiceCarousel = (props) => {

    const Services = [
        {
            path: "air-conditioning",
            img: airCond,
            icon: "fa-screwdriver",
            name: "Air Conditioning",
            description: "The installation, testing& commissioning, maintenance of the air conditioning and ventilation system shall be carried out by a specialist in order to ensure proper operation."
        },
        {
            path: "plumbing",
            img: plumbing,
            icon: "fa-hammer",
            name: "Plumbing",
            description: "The installation, testing& commissioning, maintenance of the Plumbing system shall be carried out by a specialist in order to ensure proper operation"
        },
        {
            path: "electrical",
            img: electrical,
            icon: "fa-screwdriver",
            name: "Electrical",
            description: "The installation, testing& commissioning, maintenance of the Electrical & ELV system shall be carried out by a specialist in order to ensure proper operation."
        },
        {
            path: "plaster",
            img: plastering,
            icon: "fa-hammer",
            name: "Plaster",
            description: "We have tremendous experience and expertise in the field and are able to deliver outstanding plaster services. We undertake both official and residential requirements."
        },
        {
            path: "floor-tiling",
            img: electrical,
            icon: "fa-hammer",
            name: "Floor Tiling",
            description: "We specialize in tiles, marble, stone masonry, fill and all kinds of decorating. We cater to all types of domestic, commercial or business tiling services."
        },
        {
            path: "false-ceiling",
            img: falseCeiling,
            icon: "fa-hammer",
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