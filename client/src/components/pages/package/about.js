import React from 'react'
import Form from './form';

const About = ({packageType}) => {
  return (
    <section className="mt-12 bg-white flex items-center justify-evenly flex-wrap-reverse gap-8 shadow-lg shadow-black mx-4 p-4 xl:mx-auto max-w-[1400px]">
        <article className='text-blue package-card flex flex-col items-center gap-4 text-left px-8 py-4 relative h-[300px] lg:h-[350px] justify-center'>
            <h3 className='text-3xl absolute top-4'>{packageType.name}</h3>
            <div className='mb-6'>
                <p className='text-kg'>Annual Package</p>
                <h1 className='text-6xl text-center text-gold'>{packageType.price}<strong className='text-sm ml-2 text-blue'>AED / year</strong></h1>
            </div>
            <ul className='text-lg leading-relaxed'>
                {(packageType.pm) ? <li>Preventive Maintenance - {packageType.pm}</li> : ""}
                {(packageType.rsc) ? <li>Regular Service Callout - {packageType.rsc}</li> : ""}
                {(packageType.hs) ? <li>Handyman Services - {packageType.hs}</li> : ""}
            </ul>
        </article>
        <Form packageType={packageType}/>
    </section>
  )
}

export default About;