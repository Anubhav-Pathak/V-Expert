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
                    <h1>We Provide Best <span>Technical</span> Services That You Can Trust</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi ipsam, distinctio nemo beatae tempore.
                        Make Appointment</p>
                    <BtnFull value={'Make Appointment'} color={'yellow'}/>
                </div>
            </section>

            <section id={"section-services"}>
                <div className={"service-content"}>
                    <h3>Our Services</h3>
                    <h1>What We Offer</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <ServiceCarousel />
            </section>

        </>
    );
}