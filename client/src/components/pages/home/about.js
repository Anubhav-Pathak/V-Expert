import React from 'react';
import aboutImg from '../../../assests/images/About.jpg';
import V1 from '../../../assests/images/V1.svg';
import V2 from '../../../assests/images/V2.svg';
import V4 from '../../../assests/images/V4.svg';
const About = () => {
    return (
        <section id="About" className='py-12 px-4 flex flex-col gap-8 md:flex-row max-w-[1400px] items-center justify-center mx-auto'>
            <div className='about-img max-w-[500px]'><img src={aboutImg} alt="About Us" /></div>
            <article className='max-w-[500px] md:max-w-[800px]'>
                <p className='flex items-center text-xl mt-3'><p>Welcome to V-Expert</p><span className='w-[50px] md:w-[150px] h-1 bg-yellow-400 ml-4 mt-2'></span></p>
                <h1 className='text-5xl sm:text-6xl'>High standard trusted & professional services</h1>
                <p className='text-md sm:text-lg mt-8'>V-Expert Technical Services Est is a diversified contract, subcontract and general maintenance services organization operating throughout the United Arab Emirates. We pride ourselves on providing industry-leading turnkey services. Our goal is to provide quality, honesty and customer satisfaction with the utmost respect.</p>
                <ul className='flex flex-col gap-6 mt-8 text-lg'>
                    <li className='flex items-center'><img src={V1} alt="24-hours" width={"30px"} className="mr-2"/>24-hour Customer Services available</li>
                    <li className='flex items-center'><img src={V2} alt="24-hours" width={"30px"} className="mr-2"/>Response time of less than 4 hours</li>
                    <li className='flex items-center'><img src={V4} alt="24-hours" width={"30px"} className="mr-2"/>100% Customer Satisfaction</li>
                </ul>
            </article>
        </section>
    )
}

export default About