import React from 'react'
import { packageDetails } from '../../../data/data'

const Details = ({packageType}) => {
  return (
    <section className='text-md p-4 text-blue mt-12 bg-white border-2 border-blue rounded-md mx-4 xl:mx-auto max-w-[1400px]'>
        <h2 className='text-3xl mb-8'>Package Details</h2>
        <h3 className='text-xl mb-4 font-bold'> Preventive Measures - {packageType.pm} Visits</h3>
        <ul className='list-disc'>
            {packageDetails.pm.description}
            {packageDetails.pm.details.map((feature)=><li className='ml-8'>{feature}</li>)}
        </ul>
        <h3 className='text-xl my-4 font-bold'> Regular Service Callouts - {packageType.rsc} Visits</h3>
        <h3 className='text-xl mb-4 font-bold'> Handyman Services - {packageType.hs} Visits</h3>
        <p>{packageDetails.hs}</p>
    </section>
  )
}

export default Details