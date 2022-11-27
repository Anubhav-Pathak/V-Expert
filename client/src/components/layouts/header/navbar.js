import React from 'react'
import logo from "../../../assests/images/img.png";
import Dropdown from './dropdown';
const Navbar = () => {
    const [header, setHeader] = React.useState(true);
    const toggleHeader = () => {
        setHeader(!header);
    }
    return (
        <nav id="nav" className="w-[100%] z-10 sticky top-0 py-2 lg:py-0 pl-4 flex items-center justify-between lg:justify-start bg-yellow-400 text-[16px]">
            <a href="/" className="mr-8"><img src={logo} alt="V-Expert" className="w-[150px] md:w-[200px] h-auto" /></a>
            <div className="lg:hidden pr-4 relative">
                <i id="address" className="fa-xl fa-solid fa-address-book cursor-pointer" onClick={toggleHeader}></i>
                <div className={`${header ? "hidden" : ""} flex-col absolute top-10 right-0 w-[250px] bg-white text-black p-4 text-[16px]`}>
                    <div className="flex items-center lg:justify-center">
                        <i className="fa-solid fa-phone"></i>
                        <p className="ml-1">+971 508446765, +971 508446737</p>
                    </div>
                    <div className="flex items-center justify-start lg:justify-center lg:mx-8 py-4 lg:py-0">
                        <i className="fa-solid fa-envelope"></i>
                        <p className="ml-1">cs@vexpert.ae</p>
                    </div>
                    <div className="flex items-center lg:justify-center">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="ml-1 leading-4">Dubai, UAE</p>
                    </div>
                </div>
                <i className="fa-xl fa-solid fa-magnifying-glass mx-4"></i>
                <i className="fa-xl fa-solid fa-bars"></i>
            </div>
            <div className="navlinks hidden lg:mt-4 lg:pl-6 lg:pr-4 lg:py-2 lg:flex-grow lg:flex lg:items-center lg:justify-between lg:rounded-tl-full lg:bg-white">
                <div className="flex">
                    <a href="/" className="py-2 px-4 mr-4 hover:text-yellow-400">Home</a>
                    <a href="#About" className="py-2 px-4 mr-4">About</a>
                    <Dropdown name="Packages" links={["Economy","Business","First"]}/>
                    <Dropdown name="Packages" links={["Air Conditioning","Plumbing","Electrical","Plaster","Floor Tiling","Water Heaters","False Ceiling","Carpentry"]}/>
                    <a href="#Contact" className="py-2 px-4 mr-4">Contact</a>
                </div>
                <div>
                    <i className="fa-lg fa-solid fa-magnifying-glass"></i>
                    <a href="/cart" className="ml-4 mr-2"><i className="fa-lg fa-sharp fa-solid fa-cart-shopping"></i></a>
                    <a href="/login" className="mx-4 px-4 py-2 text-white bg-stone-900 border-2 border-stone-900 rounded-md hover:bg-white hover:text-black">Register</a>
                    <a href="/login"><i className="fa-lg fa-solid fa-user"></i>&nbsp;Login</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar