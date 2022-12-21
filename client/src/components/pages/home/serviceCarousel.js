import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"
import "swiper/css/navigation"

import { services } from "../../../data/data";

const ServiceSlide = (props) => {
    return (
        <a href={`/services/${props.path}`} className='flex flex-col relative bg-blue border-2 border-blue rounded-lg overflow-hidden'>
            <img src={props.img} alt="Service" className='absolute top-0 left-0' height="150px" />
            <div className='relative bg-white z-10 mt-[120px] mb-4 mx-4 text-center p-4 rounded h-[200px]'>
                <i class={`fa-solid ${props.icon} fa-lg absolute top-[-30px] left-0 bg-gold w-[40px] h-[40px] flex items-center justify-center rounded-full`}></i>
                <h4 className='mb-2 text-2xl lg:text-lg font-semibold'>{props.name}</h4>
                <p className='text-sm lg:text-xs'>{props.description}</p>
            </div>
        </a>
    )
}

const ServiceCarousel = (props) => {
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
                services.map((service)=>{
                    return (<SwiperSlide><ServiceSlide path={service.path} img={service.img} icon={service.icon} name={service.name} description={service.description}/></SwiperSlide>)
                })
            }
            </Swiper>
        </>
    )
}
export default ServiceCarousel;