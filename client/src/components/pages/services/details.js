import React from 'react'

const Details = ({service}) => {
  return (
    <section className='text-lg p-4 text-blue mt-12 bg-white border-2 border-blue rounded-md mx-4 md:mx-auto max-w-[1400px]'>
        <h2 className='text-3xl mb-8'>Service Details</h2>
        <p className='mb-4'>{service.details.para1}</p>
        <p className='mb-4'>{service.details.para2}</p>
        <ul className='list-disc'>
            {service.details.label}
            {service.details.features.map((feature)=><li className='ml-8'>{feature}</li>)}
        </ul>
    </section>
  )
}

export default Details