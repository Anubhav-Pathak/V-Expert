import React from 'react'
import {useNavigate} from 'react-router-dom'
const Details = ({service}) => {
  const navigate = useNavigate();
  const handleClick = () =>{
    localStorage.setItem(service.name, service.price);
    navigate('/cart');
  }
  return (
    <section className='text-md p-4 text-blue bg-white mx-4 xl:mx-auto max-w-[600px]'>
        <p className={"text-lg mb-8"}> Base Price: <span className={"text-7xl"}>{service.price ? service.price:100}</span><strong>AED</strong></p>
        <h2 className='text-3xl mb-8'>Service Details</h2>
        <p className='mb-4'>{service.details.para1}</p>
        <p className='mb-4'>{service.details.para2}</p>
        <ul className='list-disc'>
            {service.details.label}
            {service.details.features.map((feature)=><li className='ml-8'>{feature}</li>)}
        </ul>
        <div className="flex flex-wrap gap-x-4">
            <button onClick={handleClick} className="cursor-pointer mt-4 border-blue bg-blue text-white border-2 px-8 py-4 rounded-md hover:bg-opacity-90">Add to Cart</button>
            <a href="/cart"  className=" text-center cursor-pointer mt-4 border-blue text-blue border-2 px-8 py-4 rounded-md hover:bg-blue hover:text-white">Go to Cart</a>
        </div>
    </section>
  )
}

export default Details