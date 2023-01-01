import React from 'react'
import { services } from '../../../data/data'

const ServiceCard = ({service}) => {
  return (
    <div className='flex flex-col w-[250px] border-2 rounded-md p-2 bg-white relative'>
      <img src={service.img} alt={service.name} className="h-[175px]"/>
      <h3 className='text-xl'>{service.name}</h3>
      <hr className='my-2'/>
      <p>Base Price: 100 AED</p>
        <a href={`/services/${service.path}`} className='text-center mt-8 mb-2 px-4 py-2 bg-blue text-white hover:bg-white hover:text-blue border-2 border-blue rounded-sm'>Details</a>
        </div>
  )
}

const More = () => {
  return (
    <section>
      <h1 className='text-2xl mb-4 text-center'>More Services</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        {
          services.map((service)=> {
            return localStorage.getItem(service.name) ? <></> : <ServiceCard service={service}/>
          })
        }
      </div>
    </section>
  )
}

export default More