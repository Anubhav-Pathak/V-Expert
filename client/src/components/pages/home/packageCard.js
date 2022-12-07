import React from 'react'
const PackageCard = (props) => {
    return (
        <article className='package-card flex flex-col items-center gap-4 text-left px-8 py-4 relative h-[400px] justify-center'>
            <h3 className='text-2xl absolute top-4'>{props.type}</h3>
            <div className='mb-6'>
                <p className='text-md'>Annual Package</p>
                <h1 className='text-6xl text-center'>{props.price}<strong className='text-sm ml-2'>AED / year</strong></h1>
            </div>
            <ul className='text-md leading-relaxed'>
                {(props.pm) ? <li>Preventive Maintenance - {props.pm}</li> : ""}
                {(props.rsc) ? <li>Regular Service Callout - {props.rsc}</li> : ""}
                {(props.hs) ? <li>Handyman Services - {props.hs}</li> : ""}
            </ul>
            <a href='/package' className='py-4 px-6 bg-yellow-400 absolute bottom-4 rounded-md text-xl'>Book Now</a>
        </article>
    )
}
export default PackageCard;
