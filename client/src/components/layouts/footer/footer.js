import React from 'react'
import footerLogo from "../../../assests/images/Footer-Logo.png";
import {services, packages} from "../../../data/data.js"
const FooterLink = (props) => {
    return (
        <li><a className='mb-4' href={`/${props.name.toLowerCase()}/${props.link.path}`} >{props.link.name}</a></li>
    )
}
const Footer = () => {
    return (
        <footer id="Contact" className='flex flex-col bg-blue text-white'>
            <div className="flex justify-center sm:justify-between items-center gap-8 flex-wrap py-8 px-4 border-b-2 border-b-gold">
                <p className='text-xl text-center'>Get connected with us on social media</p>
                <ul className="flex items-center justify-center text-2xl">
                    <li className='mr-4'><a href='https://www.facebook.com/VETS2022'><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li className='mr-4'><a href='/'><i class="fa-brands fa-twitter"></i></a></li>
                    <li className='mr-4'><a href='/'><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href='https://linkedin.com/in/v-expert-technical-services-est-329887259'><i class="fa-brands fa-linkedin"></i></a></li>
                </ul>
            </div>
            <div className="px-4 py-8 flex flex-wrap items-start justify-center gap-8 mx-auto">

                <div className="flex flex-col items-start justify-center md:justify-start max-w-[400px]">
                    <img src={footerLogo} alt="V Expert" />
                    <p> Our mission is to provide our clients with the best possible services at the most competitive cost without compromising quality, safety and the environment. With respect to our services, we make sure we keep that in mind </p>
                </div>
                <div className='flex gap-8'>
                    <ul className="lg:row-span-full">
                        <h6 className="uppercase text-yellow-400 font-bold mb-4 flex text-gold">Services</h6>
                        {services.map((link)=>{return (<FooterLink name={"services"} link={link}/>)})}    
                    </ul>

                    <ul className="lg:row-span-full">
                        <h6 className="uppercase text-yellow-400 font-bold mb-4 flex text-gold">Packages</h6>
                        {packages.map((link)=>{return (<FooterLink name={"packages"} link={link}/>)})}
                    </ul>

                    <ul className="lg:row-span-full">
                        <h6 className="uppercase text-yellow-400 font-bold mb-4 flex text-gold">Useful Links</h6>
                        <li><a href="/#about" className="">About</a></li>
                        <li><a href="/#package" className="">Packages</a></li>
                        <li><a href="/#service" className="">Services</a></li>
                    </ul>
                </div>

                <div className="max-w-[300px]">
                    <h6 className="uppercase text-yellow-400 font-bold mb-4 flex text-gold">Contact</h6>
                    <p className="flex items-center"><i class="fa-solid fa-location-dot mr-2"></i>534,536, 5th Floor Business village, Deira clock tower - Deira Dubai, UAE.</p>
                    <p className="flex items-center"><i class="fa-regular fa-envelope mr-2"></i>cs@vexpert.ae</p>
                    <p className="flex items-center"><i class="fa-solid fa-phone mr-2"></i>+971 508446765, +971 508446737</p>
                </div>

            </div>
            <div className="text-center p-6 bg-yellow-400 text-white bg-blue border-t-2 border-t-gold">
                <a className="font-bold" href='/'><span className='font-light'>© 2022 Copyright </span>V Expert</a>
            </div>
        </footer>
    )
}

export default Footer