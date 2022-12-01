import ServiceCarousel from "./service-carousel"
import ServiceCarouselResponsive from "./serviceCarouselResponsive";
import "../../../assests/css/home.css"
import Hero from "./hero";
import Stats from "./stats";

const Home = () => {
    return(
        <main>
            <Hero />
            <Stats />
            <section id={"section-services"}>
                <div className={"service-content"}>
                    <h3 className={"section-begin"}>Our Services</h3>
                    <h1 className={"section-heading"}>What We Offer</h1>
                    <p className={"section-para"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <ServiceCarousel />
                <ServiceCarouselResponsive />
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
                    </div>
                </div>
                <div className={"plans-about-container"}>
                    <h3 className={"section-begin"}>Our Services</h3>
                    <h1 className={"section-heading"}>What We Offer</h1>
                    <p className={"section-para"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </section>
        </main>
    );
}
export default Home;