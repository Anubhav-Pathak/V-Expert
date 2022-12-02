import ServiceCarousel from "./service-carousel"
import ServiceCarouselResponsive from "./serviceCarouselResponsive";
import "../../../assests/css/home.css"
import Hero from "./hero";
import Stats from "./stats";
import Package from "./package";

const Home = () => {
    return(
        <main>
            <Hero />
            <Stats />
            <Package />
            <section id={"section-services"}>
                <div className={"service-content"}>
                    <h3 className={"section-begin"}>Our Services</h3>
                    <h1 className={"section-heading"}>What We Offer</h1>
                    <p className={"section-para"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <ServiceCarousel />
                <ServiceCarouselResponsive />
            </section>
        </main>
    );
}
export default Home;