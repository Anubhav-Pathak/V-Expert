import React from 'react'
import footerLogo from "../../../assests/images/Footer-Logo.png";
const FooterLink = (props) => {
    return (
        <li><a className='mb-4' href={`/${props.name.toLowerCase()}/${props.name.toLowerCase().replace(/ /g , "-")}`} >{props.name}</a></li>
    )
}
const Footer = () => {
    const links = ["Air Conditioning","Plumbing","Electrical","Plaster","Floor Tiling","Water Heaters","False Ceiling"];
    const packages = ["First","Business","Economy"];
    return (
        <footer id="Contact" className='flex flex-col'>
            <div className="flex justify-center sm:justify-between items-center gap-8 flex-wrap py-8 px-4 bg-yellow-400">
                <p className='text-xl text-center'>Get connected with us on social media</p>
                <ul className="flex items-center justify-center text-2xl">
                    <li className='mr-4'><i class="fa-brands fa-facebook-f"></i></li>
                    <li className='mr-4'><i class="fa-brands fa-twitter"></i></li>
                    <li className='mr-4'><i class="fa-brands fa-instagram"></i></li>
                    <li><i class="fa-brands fa-linkedin"></i></li>
                </ul>
            </div>
            <div className="px-4 py-8 flex flex-wrap items-start justify-center gap-8 mx-auto">

                <div className="flex flex-col items-start justify-center md:justify-start max-w-[400px]">
                    <img src={footerLogo} alt="V Expert" />
                    <p> Our mission is to provide our clients with the best possible services at the most competitive cost without compromising quality, safety and the environment. With respect to our services, we make sure we keep that in mind </p>
                </div>
                <div className='flex gap-8'>
                    <ul className="lg:row-span-full">
                        <h6 className="uppercase text-yellow-500 font-semibold mb-4 flex">Services</h6>
                        {links.map((link)=>{return (<FooterLink name={link}/>)})}    
                    </ul>

                    <ul className="lg:row-span-full">
                        <h6 className="uppercase text-yellow-500 font-semibold mb-4 flex">Packages</h6>
                        {packages.map((link)=>{return (<FooterLink name={link}/>)})}
                    </ul>

                    <ul className="lg:row-span-full">
                        <h6 className="uppercase text-yellow-500 font-semibold mb-4 flex">Useful Links</h6>
                        <li><a href="#about" className="">About</a></li>
                        <li><a href="#package" className="">Packages</a></li>
                        <li><a href="#service" className="">Services</a></li>
                    </ul>
                </div>

                <div className="max-w-[300px]">
                    <h6 className="uppercase text-yellow-500 font-semibold mb-4 flex">Contact</h6>
                    <p className="flex items-center"><i class="fa-solid fa-location-dot mr-2"></i>534,536, 5th Floor Business village, Deira clock tower - Deira Dubai, UAE.</p>
                    <p className="flex items-center"><i class="fa-regular fa-envelope mr-2"></i>cs@vexpert.ae</p>
                    <p className="flex items-center"><i class="fa-solid fa-phone mr-2"></i>+971 508446765, +971 508446737</p>
                </div>

            </div>
            <div className="text-center p-6 bg-stone-900 text-white">
                <span>© 2022 Copyright:</span>
                <a className=" font-semibold" href="https://tailwind-elements.com/">V Expert</a>
            </div>
        </footer>
    )
}

export default Footer