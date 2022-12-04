import React from 'react'
import footerLogo from "../../../assests/images/Footer-Logo.png";
const Footer = () => {
    return (
        <footer className="text-center lg:text-left bg-yellow-400">
            <div className="flex justify-center items-center lg:justify-between p-6 border-b bg-white text-black">
                <div className="mr-12 hidden lg:block">
                <span>Get connected with us on social networks:</span>
                </div>
                <div className="flex justify-center">
                <a href="#!" className="mr-6 ">
                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f"
                    className="w-2.5" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512">
                    <path fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                    </path>
                    </svg>
                </a>
                <a href="#!" className="mr-6 ">
                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter"
                    className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                    </path>
                    </svg>
                </a>
                {/* <a href="#!" className="mr-6 ">
                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in"
                    className="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512">
                    <path fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                    </path>
                    </svg>
                </a> */}
                </div>
            </div>
            <div className="mx-6 py-10 text-center md:text-left ">
                <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-black">
                <div className="">
                    <img src={footerLogo} alt="V Expert" />
                    <p> Our mission is to provide our clients with the best possible services at the most competitive cost without compromising quality, safety and the environment. With respect to our services, we make sure we keep that in mind </p>
                </div>
                <div className="">
                    <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">Services</h6>
                    <p className="mb-1"><a href="/services" className="">Air Conditioning</a></p>
                    <p className="mb-1"><a href="/services" className="">Plumbing</a></p>
                    <p className="mb-1"><a href="/services" className="">Electrical</a></p>
                    <p className="mb-1"><a href="/services" className="">Plaster</a></p>
                    <p className="mb-1"><a href="/services" className="">Floor Tiling</a></p>
                    <p><a href="/services" className="">False Ceiling</a></p>
                    
                </div>
                <div className="">
                    <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">Packages</h6>
                    <p className="mb-1"><a href="/services" className="">First</a></p>
                    <p className="mb-1"><a href="/services" className="">Business</a></p>
                    <p className="mb-1"><a href="/services" className="">Economy</a></p>                    
                </div>
                <div className="">
                    <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">Useful Links</h6>
                    <p className="mb-1"><a href="#about" className="">About</a></p>
                    <p className="mb-1"><a href="#package" className="">Packages</a></p>
                    <p className="mb-1"><a href="#service" className="">Services</a></p>
                    <p><a href="#!" className="">Help</a></p>
                </div>
                
                <div className="">
                    <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">Contact</h6>
                    <p className="flex items-center justify-center md:justify-start mb-4">
                        534,536, 5th Floor Business village, Deira clock tower - Deira Dubai, UAE.
                    </p>
                    <p className="flex items-center justify-center md:justify-start mb-4">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
                            className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path fill="currentColor"
                            d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                            </path>
                        </svg>
                        cs@vexpert.ae
                    </p>
                    <p className="flex items-center justify-center md:justify-start mb-4">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone"
                            className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path fill="currentColor"
                            d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
                            </path>
                        </svg>
                        +971 508446765, +971 508446737
                    </p>
                </div>
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