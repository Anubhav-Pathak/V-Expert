import React from 'react'
import HeroCarousel from "./heroCarousel";
const Hero = () => {
  return (
    <section className="relative">
        <HeroCarousel />
        <div className={"hero absolute top-0 left-0 z-10 min-h-full w-full sm:min-w-[50%] sm:max-w-3xl py-4 px-4 sm:px-16 text-white flex flex-col items-center justify-center sm:items-start text-center sm:text-left"}>
            <h1 className="text-5xl sm:text-7xl mb-8">We Provide Best <span className="text-yellow-400">Technical</span> Services That You Can Trust</h1>
            <p className="text-lg lg:text-xl mb-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi ipsam, distinctio nemo beatae tempore.</p>
            <a href="/" className="py-4 px-8 bg-yellow-400 hover:bg-yellow-500 text-black text-xl lg:text-2xl rounded">Make Appointment</a>
        </div>
    </section>
  )
}
export default Hero