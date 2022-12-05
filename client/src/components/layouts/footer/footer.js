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
        <footer className='flex flex-col'>
            <div className="flex justify-center sm:justify-between items-center gap-8 flex-wrap py-8 px-4 bg-yellow-400">
                <p className='text-xl text-center'>Get connected with us on social media</p>
                <ul className="flex items-center justify-center text-2xl">
                    <li className='mr-4'><i class="fa-brands fa-facebook-f"></i></li>
                    <li className='mr-4'><i class="fa-brands fa-twitter"></i></li>
                    <li className='mr-4'><i class="fa-brands fa-instagram"></i></li>
                    <li><i class="fa-brands fa-linkedin"></i></li>
                </ul>
            </div>
            <div className="px-4 py-8 grid grid-rows-2 grid-cols-[40%_10%_10%_10%_20%] gap-8">
                <div className="flex flex-col items-start row-span-full">
                    <img src={footerLogo} alt="V Expert" />
                    <p> Our mission is to provide our clients with the best possible services at the most competitive cost without compromising quality, safety and the environment. With respect to our services, we make sure we keep that in mind </p>
                </div>
                <ul className="row-span-full">
                    <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">Services</h6>
                    {links.map((link)=>{return (<FooterLink name={link}/>)})}    
                </ul>
                <ul className="row-span-full">
                    <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">Packages</h6>
                    {packages.map((link)=>{return (<FooterLink name={link}/>)})}
                </ul>
                <div className="row-span-full">
                    <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">Useful Links</h6>
                    <p className="mb-1"><a href="#about" className="">About</a></p>
                    <p className="mb-1"><a href="#package" className="">Packages</a></p>
                    <p className="mb-1"><a href="#service" className="">Services</a></p>
                    <p><a href="#!" className="">Help</a></p>
                </div>
                <div className="row-span-full">
                    <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">Contact</h6>
                    <p className="flex items-center justify-center md:justify-start mb-4">534,536, 5th Floor Business village, Deira clock tower - Deira Dubai, UAE.</p>
                    <p className="flex items-center justify-center md:justify-start mb-4">cs@vexpert.ae</p>
                    <p className="flex items-center justify-center md:justify-start mb-4">+971 508446765, +971 508446737</p>
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