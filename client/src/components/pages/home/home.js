import "../../../assests/css/home.css"
import Hero from "./hero";
import Stats from "./stats";
import Package from "./package";
import About from "./about";
import Service from "./service";
import Whatsapp from "./whatsapp";

const Home = () => {
    return(
        <main>
            <Hero />
            <Stats />
            <Package />
            <About />
            <Service />
            <Whatsapp />
        </main>
    );
}
export default Home;