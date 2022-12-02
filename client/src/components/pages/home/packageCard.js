import React from 'react'
const PackageCard = (props) => {
    return (
        <article className='package-card flex flex-col items-center gap-4 text-left px-8 py-4 h-[220px] lg:h-[300px] relative'>
            <h3 className='text-xl'>{props.type}</h3>
            <div>
                <p className='text-xs'>Annual Package</p>
                <h1 className='text-4xl text-center'>{props.price}<strong className='text-sm ml-2'>AED / year</strong></h1>
            </div>
            <ul className='text-sm leading-relaxed'>
                {(props.pm) ? <li>Preventive Maintenance - {props.pm}</li> : ""}
                {(props.rsc) ? <li>Regular Service Callout - {props.rsc}</li> : ""}
                {(props.hs) ? <li>Handyman Services - {props.hs}</li> : ""}
            </ul>
            <a href='/' className='py-2 px-4 bg-yellow-400 absolute bottom-8'>Book Now</a>
        </article>
    )
}
export default PackageCard;
