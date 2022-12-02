import React from 'react'

const About = () => {
    return (
        <section className='py-12 px-4'>
            <div className='about-img'></div>
            <article>
                <p className='flex items-center text-xl md:text-4xl mt-3'><p>Years</p><span className='w-[50px] md:w-[150px] h-1 bg-yellow-400 ml-4 mt-2'></span></p>
                <h1>High standard trusted & professional services</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam omnis minus alias rem dolorum excepturi sed? Minima iusto ex architecto ipsam quibusdam harum est porro illum cumque, quas praesentium exercitationem?</p>
                <ul>
                    <li>24-hour Customer Services available</li>
                    <li>Response time of less than 4 hours</li>
                    <li>Feature 3</li>
                    <li>Feature 4</li>
                </ul>
            </article>
        </section>
    )
}

export default About