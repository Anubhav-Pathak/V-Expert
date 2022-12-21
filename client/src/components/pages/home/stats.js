import React from 'react'

const Stats = () => {
  return (
    <section className='flex flex-wrap-reverse gap-8 items-center justify-center lg:justify-between max-w-[1400px] mx-auto px-4 py-8 relative z-10 bg-white'>
        <article className='grid grid-cols-[35%_65%] grid-rows-3 gap-x-4 text-blue'>
            <h1 className='row-span-full text-7xl md:text-9xl flex items-center justify-center'>15+</h1>
            <p className='flex items-center text-xl md:text-4xl mt-3'><p>Years</p><span className='w-[50px] md:w-[150px] h-1 bg-gold ml-4 mt-2'></span></p>
            <p className='text-xl md:text-4xl'>Professional Engineers</p>
            <p className='text-xs md:text-lg'>Enable the comfortness in your home</p>
        </article>
        <article className='flex gap-12 bg-blue text-white px-8 lg:px-16 py-7 lg:py-14 stats-clip lg:absolute right-0 top-[-50px]'>
            <div>
                <h1 className='text-5xl sm:text-7xl'>900<span className='text-xl sm:text-4xl text-gold'>+</span></h1>
                <p>Clients Served</p>
            </div>
            <div>
                <h1 className='text-5xl sm:text-7xl'>49<span className='text-xl sm:text-4xl text-gold'>+</span></h1>
                <p>Projects Completed</p>
            </div>
        </article>
    </section>
  )
}

export default Stats