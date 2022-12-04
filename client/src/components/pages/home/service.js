import React from 'react'
import ServiceCarousel from './serviceCarousel'

const Service = () => {
    return (
        // <section className='px-2 service min-h-screen w-screen overflow-hidden flex items-center justify-center'>
        //     <div className='py-12 px-4 md:grid md:grid-cols-[30%_70%] md:gap-8 w-full md:place-items-center mx-auto'>
        //         <div className='text-white'>
        //             <p className='flex items-center text-xl mt-3'><p>Our Services</p><span className='w-[50px] md:w-[150px] h-1 bg-yellow-400 ml-4 mt-2'></span></p>
        //             <h1 className='text-5xl sm:text-6xl'>What we Offer</h1>
        //             <p className='text-md sm:text-lg mt-8'>V-expert is established by professional engineers who have 15+ years of experience in UAE construction field and We provide best quality of the work in each and every installations and ensure the satisfaction of customers</p>
        //         </div>
        //         <div className={"service-carousel hidden lg:block"}>
        //             <ServiceCarousel count={3} />
        //         </div>
        //         <div className={"service-carousel service-carousel-responsive"}>
        //             <ServiceCarousel count={2} />
        //         </div>
        //     </div>
        // </section>

        <section id={"section-services"} className={'service'}>
            <div className={"service-content"}>
                <h3 className={"section-begin"}>Our Services</h3>
                <h1 className={"section-heading"}>What We Offer</h1>
                <p className={"section-para"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            <div className={"service-carousel"}>
                <ServiceCarousel count={3} />
            </div>

            <div className={"service-carousel-mid"}>
                <ServiceCarousel count={2} />
            </div>

            <div className={"service-carousel-mob"}>
                <ServiceCarousel count={1} />
            </div>

        </section>
    )
}

export default Service