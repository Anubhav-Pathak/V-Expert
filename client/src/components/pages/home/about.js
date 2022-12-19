import React from 'react';
import aboutImg from '../../../assests/images/services/Painting.jpg';
import V1 from '../../../assests/images/V1.svg';
import V2 from '../../../assests/images/V2.svg';
import V4 from '../../../assests/images/V4.svg';
const About = () => {
    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#031F60" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <section id="About" className='flex items-center justify-center bg-blue'>
            <div className='px-4 flex flex-col gap-8 md:flex-row max-w-[1400px] items-center justify-center mx-auto bg-blue'>
                <div className='about-img max-w-[500px]'><img src={aboutImg} alt="About Us" /></div>
                <article className='max-w-[500px] md:max-w-[800px] text-white'>
                    <p className='flex items-center text-xl mt-3'><p>Welcome to V-Expert</p><span className='w-[50px] md:w-[150px] h-1 bg-gold ml-4 mt-2'></span></p>
                    <h1 className='text-5xl sm:text-6xl'>High standard trusted & professional services</h1>
                    <p className='text-md sm:text-lg mt-8'>V-Expert Technical Services Est is a diversified contract, subcontract and general maintenance services organization operating throughout the United Arab Emirates. We pride ourselves on providing industry-leading turnkey services. Our goal is to provide quality, honesty and customer satisfaction with the utmost respect.</p>
                    <ul className='flex flex-col gap-6 mt-8 text-lg'>
                        <li className='flex items-center'><img src={V1} alt="24-hours" width={"30px"} className="mr-2"/>24-hour Customer Services available</li>
                        <li className='flex items-center'><img src={V2} alt="24-hours" width={"30px"} className="mr-2"/>Response time of less than 4 hours</li>
                        <li className='flex items-center'><img src={V4} alt="24-hours" width={"30px"} className="mr-2"/>100% Customer Satisfaction</li>
                    </ul>
                </article>
            </div>         
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#031F60" fill-opacity="1" d="M0,224L40,218.7C80,213,160,203,240,208C320,213,400,235,480,229.3C560,224,640,192,720,186.7C800,181,880,203,960,197.3C1040,192,1120,160,1200,170.7C1280,181,1360,235,1400,261.3L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
        </>
    )
}

export default About