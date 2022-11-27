// import {Link} from "react-router-dom";
import React from "react";
import "../../assests/css/tailwind/output.css";
import "../../assests/css/header.css";
import logo from "../../assests/images/img.png";

const Header = () => {
    const [header, setHeader] = React.useState(true);
    const toggleHeader = () => {
        setHeader(!header);
    }
    return(
        <>
            <header className={`hidden lg:static p-4 lg:p-0 lg:py-3 lg:px-4 lg:flex lg:flex-row lg:items-center lg:top-0 lg:justify-end lg:bg-stone-900 lg:text-white text-[12px] lg:text-[14px]`}>
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
            </header>
            <nav id="nav" className="w-[100vw] fixed py-2 lg:py-0 pl-4 flex items-center justify-between lg:justify-start bg-yellow-400">
                <a href="/" className="mr-8"><img src={logo} alt="V-Expert" className="w-[100px] sm:w-[150px] h-auto" /></a>
                <div className="lg:hidden pr-4 relative">
                    <i id="address" className="fa-xl fa-solid fa-address-book cursor-pointer" onClick={toggleHeader}></i>
                    <div className={`${header ? "hidden" : ""} flex-col absolute top-10 right-0 bg-white text-black z-10 p-4 text-[12px]`}>
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
                        <div className="dropdown py-2 px-4 mr-4 inline-block relative">
                            <a className="dropdown" href="/packages">Packages</a>
                            <i className="fa-sharp fa-solid fa-caret-down"></i>
                            <div className="dropdown-menu absolute min-w-[100px] hidden flex-col top-10">
                                <a href="/packages/economy" className="py-1 hover:bg-neutral-300 pl-2">Economy</a>
                                <a href="/packages/business" className="py-1 hover:bg-neutral-300 pl-2">Business</a>
                                <a href="/packages/first" className="py-1 hover:bg-neutral-300 pl-2">First</a>
                            </div>
                        </div>
                        <div className="dropdown py-2 px-4 mr-4 inline-block relative">
                            <a className="dropdown" href="/services">Services</a>
                            <i className="fa-sharp fa-solid fa-caret-down"></i>
                            <div className="dropdown-menu absolute min-w-[150px] hidden flex-col top-10">
                                <a href="/services" className="py-1 hover:bg-neutral-300 pl-2">Air Conditioning</a>
                                <a href="/services" className="py-1 hover:bg-neutral-300 pl-2">Plumbing</a>
                                <a href="/services" className="py-1 hover:bg-neutral-300 pl-2">Electrical</a>
                                <a href="/services" className="py-1 hover:bg-neutral-300 pl-2">Plaster</a>
                                <a href="/services" className="py-1 hover:bg-neutral-300 pl-2">Floor / Wall Tiling</a>
                                <a href="/services" className="py-1 hover:bg-neutral-300 pl-2">Water Heaters</a>
                                <a href="/services" className="py-1 hover:bg-neutral-300 pl-2">False Ceiling</a>
                                <a href="/services" className="py-1 hover:bg-neutral-300 pl-2">Carpentry</a>
                            </div>
                        </div>
                        <a href="#Contact" className="py-2 px-4 mr-4">Contact</a>
                    </div>
                    <div>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <a href="/login" className="mx-4 px-4 py-2 text-white bg-stone-900 border-2 border-stone-900 rounded-md hover:bg-white hover:text-black">Register</a>
                        <div className="login inline">
                            <i className="fa-solid fa-user"></i>
                            <a href="/login">Login</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Header;