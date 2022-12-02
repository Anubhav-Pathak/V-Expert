import ServiceCarousel from "./service-carousel"
import "../../../assests/css/home.css"
import Hero from "./hero";
import Stats from "./stats";
import Package from "./package";
import About from "./about";

const Home = () => {
    return(
        <main>
            <Hero />
            <Stats />
            <Package />
            <About />
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
        </main>
    );
}
export default Home;