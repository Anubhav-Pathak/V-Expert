import React from 'react'
import PackageCard from './packageCard';

const Package = () => {
    const packageCards = [
        {
            type: "Economy",
            price: "1,000",
            pm: 1,
            rsc: 6
        },
        {
            type: "Buisness",
            price: "2,000",
            pm: 2,
            rsc: 6,
            hs: 2
        },
        {
            type: "First",
            price: "3,000",
            pm: 3,
            rsc: 12,
            hs: 3
        },
    ];
    return (
        <section className='flex flex-col items-center justify-center py-12 px-4'>
            <div className='text-center mb-8'>
                <h1 className='text-5xl sm:text-6xl mb-8'>Home Maintenance Package</h1>
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