import React from 'react'
import {packages} from "../../../data/data"
const PackageCard = (props) => {
    return (
        <article className='text-blue package-card flex flex-col items-center gap-4 text-left px-8 py-4 relative h-[300px] lg:h-[400px] justify-center'>
            <h3 className='text-2xl absolute top-4'>{props.name}</h3>
            <div className='mb-6'>
                <p className='text-md'>Annual Package</p>
                <h1 className='text-6xl text-center text-gold'>{props.price}<strong className='text-sm ml-2 text-blue'>AED / year</strong></h1>
            </div>
            <ul className='text-md leading-relaxed'>
                {(props.pm) ? <li>Preventive Maintenance - {props.pm}</li> : ""}
                {(props.rsc) ? <li>Regular Service Callout - {props.rsc}</li> : ""}
                {(props.hs) ? <li>Handyman Services - {props.hs}</li> : ""}
            </ul>
            <a href={`/packages/${props.path}`} className='py-4 px-6 bg-blue absolute bottom-4 rounded-md text-xl text-white'>Book Now</a>
        </article>
    )
}
const Package = () => {
    return (
        <section id="packages" className='flex flex-col items-center justify-center py-12 px-4 text-blue'>
            <div className='text-center mb-8'>
                <h1 className='text-5xl sm:text-6xl mb-8'>Annual Maintenance Contract Package</h1>
                <p className='text-md max-w-[600px] mx-auto'>Our Maintenance Package ensure a perfect balance of cost, quality and sustainability. We always operate in a transparent and fair manner.</p>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-8'>
                {packages.map((card)=>{
                    return (
                        <PackageCard name={card.name} price={card.price} pm={card.pm} rsc={card.rsc} hs={card.hs} path={card.path}/>
                    )
                })}
            </div>
        </section>
    )
}

export default Package