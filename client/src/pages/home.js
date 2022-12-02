import "../assests/css/home.css"
import Carousel from "../components/home/main-carousel";
import BtnFull from "../components/reuse/btn-full";
import ServiceCarousel from "../components/home/service-carousel"

export default () => {
    return(
        <>
            <section id={"section-main"}>
                <Carousel />
                <div className={"hero-content"}>
                    <h1 className={"section-heading"}>We Provide Best <span>Technical</span> Services That You Can Trust</h1>
                    <p className={"section-para"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi ipsam, distinctio nemo beatae tempore.
                        Make Appointment</p>
                    <BtnFull value={'Make Appointment'} color={'yellow'}/>
                </div>
            </section>

            <section id={"section-services"}>
                <div className={"service-content"}>
                    <h3 className={"section-begin"}>Our Services</h3>
                    <h1 className={"section-heading"}>What We Offer</h1>
                    <p className={"section-para"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className={"service-carousel"}>
                    <ServiceCarousel count={2} />
                </div>

                <div className={"service-carousel-responsive"}>
                    <ServiceCarousel count={1} />
                </div>
            </section>

            <section id={"section-products"}>
                <div className={"plans-container"}>
                    <div className={"product-card product-economy"}>
                        <h2 className={"plan-heading"}>Economy</h2>
                        <div className={"plan-content"}>
                            <p className={"plan-year"}>Annual Package</p>
                            <p className={"price-tag"}>1,099 <span>AED/year</span></p>
                        </div>
                        <ul className={"plan-model"}>
                            <li>Preventive Maintenance - 3 visit</li>
                            <li>Regular Service Call Out - 12 visits</li>
                            <li>Handyman Services - 3 visits</li>
                        </ul>
                        <BtnFull value={"purchase"} color={"yellow"}/>
                    </div>
                    <div className={"product-card product-business"}>
                        <h2 className={"plan-heading"}>Business</h2>
                        <div className={"plan-content"}>
                            <p className={"plan-year"}>Annual Package</p>
                            <p className={"price-tag"}>1,099 <span>AED/year</span></p>
                        </div>
                        <ul className={"plan-model"}>
                            <li>Preventive Maintenance - 3 visit</li>
                            <li>Regular Service Call Out - 12 visits</li>
                            <li>Handyman Services - 3 visits</li>
                        </ul>
                        <BtnFull value={"purchase"} color={"yellow"}/>
                    </div>
                    <div className={"product-card product-first"}>
                        <h2 className={"plan-heading"}>First</h2>
                        <div className={"plan-content"}>
                            <p className={"plan-year"}>Annual Package</p>
                            <p className={"price-tag"}>1,099 <span>AED/year</span></p>
                        </div>
                        <ul className={"plan-model"}>
                            <li>Preventive Maintenance - 3 visit</li>
                            <li>Regular Service Call Out - 12 visits</li>
                            <li>Handyman Services - 3 visits</li>
                        </ul>
                        <BtnFull value={"purchase"} color={"yellow"}/>
                    </div>
                </div>
                <div className={"plans-about-container"}>
                    <h3 className={"section-begin"}>Our Services</h3>
                    <h1 className={"section-heading"}>What We Offer</h1>
                    <p className={"section-para"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <BtnFull value={'Learn More'} color={'yellow'}/>
                </div>
            </section>

        </>
    );
}