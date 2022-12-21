import React from 'react'
const PackageCard = (props) => {
    return (
        <article className='text-blue package-card flex flex-col items-center gap-4 text-left px-8 py-4 relative h-[300px] lg:h-[400px] justify-center'>
            <h3 className='text-2xl absolute top-4'>{props.type}</h3>
            <div className='mb-6'>
                <p className='text-md'>Annual Package</p>
                <h1 className='text-6xl text-center text-gold'>{props.price}<strong className='text-sm ml-2 text-blue'>AED / year</strong></h1>
            </div>
            <ul className='text-md leading-relaxed'>
                {(props.pm) ? <li>Preventive Maintenance - {props.pm}</li> : ""}
                {(props.rsc) ? <li>Regular Service Callout - {props.rsc}</li> : ""}
                {(props.hs) ? <li>Handyman Services - {props.hs}</li> : ""}
            </ul>
            <a href='/package' className='py-4 px-6 bg-blue absolute bottom-4 rounded-md text-xl text-white'>Book Now</a>
        </article>
    )
}
const Package = () => {
    const packageCards = [
        {
            type: "Economy",
            price: "1,099",
            pm: 1,
            rsc: 6
        },
        {
            type: "Buisness",
            price: "2,099",
            pm: 2,
            rsc: 6,
            hs: 2
        },
        {
            type: "First",
            price: "3,099",
            pm: 3,
            rsc: 12,
            hs: 3
        },
    ];
    return (
        <section id="packages" className='flex flex-col items-center justify-center py-12 px-4 text-blue'>
            <div className='text-center mb-8 bg-white p-4 rounded-lg border-2 border-blue'>
                <h1 className='text-5xl sm:text-6xl mb-8'>Annual Maintenance Contract Package</h1>
                <p className='text-md max-w-[600px] mx-auto'>Our Maintenance Package ensure a perfect balance of cost, quality and sustainability. We always operate in a transparent and fair manner.</p>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-8'>
                {packageCards.map((card)=>{
                    return (
                        <PackageCard type={card.type} price={card.price} pm={card.pm} rsc={card.rsc} hs={card.hs} />
                    )
                })}
            </div>
        </section>
    )
}

export default Package