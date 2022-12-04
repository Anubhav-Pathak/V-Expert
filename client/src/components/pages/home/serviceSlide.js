import React from 'react'
const ServiceSlide = (props) => {
    return (
        <a href={`/${props.path}`} className='flex flex-col relative h-[300px] bg-yellow-400 hover:scale-105 rounded-lg overflow-hidden'>
            <img src={props.img} alt="Service" className='absolute top-0 left-0' height="150px" />
            <div className='bg-white z-10 mt-[120px] mx-4 h-full text-center p-4 rounded-3xl'>
                <i className="fa-light fa-air-conditioner fa-2xl"></i>
                <h4 className='mb-2 text-2xl font-semibold'>{props.name}</h4>
                <p>{props.description}</p>
            </div>
        </a>
    )
}

export default ServiceSlide