import React from 'react'
import HeroCarousel from "./heroCarousel";
const Hero = () => {
  return (
    <section className="relative">
        <HeroCarousel />
        <div className={"hero absolute top-0 left-0 z-10 min-h-full w-full sm:min-w-[50%] sm:max-w-3xl py-4 px-4 sm:px-16 text-white flex flex-col items-center justify-center sm:items-start text-center sm:text-left"}>
            <h1 className="text-5xl sm:text-7xl mb-8">We Provide Best <span className="stroke text-blue">Technical</span> Services That You Can Trust</h1>
            <p className="text-lg lg:text-xl mb-16">Ensuring a perfect balance of cost, quality and sustainability with 100% Customer Satisfaction</p>
            <a href="/cart" className="py-4 px-8 border-2 border-blue bg-blue hover:text-gold hover:border-gold text-white text-xl lg:text-2xl rounded">Make Appointment</a>
        </div>
    </section>
  )
}
export default Hero