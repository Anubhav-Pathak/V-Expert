import "../../../assests/css/home.css"
import Hero from "./hero";
import Stats from "./stats";
import Package from "./package";
import About from "./about";
import Service from "./service";
import Whatsapp from "../../layouts/whatsapp";
import Testimony from "../../layouts/testimony"

const Home = () => {
    return(
        <main className="home">
            <Hero />
            <Stats />
            <Package />
            <About />
            <Service />
            <Testimony />
            <Whatsapp />
        </main>
    );
}
export default Home;