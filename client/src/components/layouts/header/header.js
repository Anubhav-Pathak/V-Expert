// import {Link} from "react-router-dom";
import React from "react";
import "../../../assests/css/tailwind/output.css";
import "../../../assests/css/header.css";
import Navbar from "./navbar";
const Header = () => {
    return(
        <>
            <header className={`hidden lg:static p-4 lg:p-0 lg:py-3 lg:px-4 lg:flex lg:flex-row lg:items-center lg:top-0 lg:justify-end lg:bg-blue lg:text-white text-[14px] lg:text-[16px]`}>
                <div className="flex items-center lg:justify-center">
                    <i className="fa-solid fa-phone"></i>
                    <a href='tel:+971508446765' className="ml-1">+971 508446765, +971 508446737</a>
                </div>
                <div className="flex items-center justify-start lg:justify-center lg:mx-8 py-4 lg:py-0">
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:cs@vexpert.ae" className="ml-1">cs@vexpert.ae</a>
                </div>
                <div className="flex items-center lg:justify-center">
                    <i className="fa-solid fa-location-dot"></i>
                    <p className="ml-1 leading-4">Dubai, UAE</p>
                </div>
            </header>
            <Navbar />
        </>
    );
}
export default Header;