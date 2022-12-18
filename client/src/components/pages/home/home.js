import "../../../assests/css/home.css"
import Hero from "./hero";
import Stats from "./stats";
import Package from "./package";
import About from "./about";
import Service from "./service";
import Whatsapp from "./whatsapp";
import Testimonials from "./testimonials";

const Home = () => {
    return(
        <main>
            <Hero />
            <Stats />
            <Package />
            <About />
            <Service />
            <Whatsapp />
            <Testimonials />
        </main>
    );
}
export default Home;