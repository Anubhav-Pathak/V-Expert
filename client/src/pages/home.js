import "../assests/css/home.css"
import Carousel from "../components/home/carousel";
import BtnFull from "../components/reuse/btn-full";

export default () => {
    return(
        <>
            <section className={"section-main"}>
                <Carousel />
                <div className={"hero-content"}>
                    <h1>We Provide Best <span>Technical</span> Services That You Can Trust</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi ipsam, distinctio nemo beatae tempore.
                        Make Appointment</p>
                    <BtnFull value={'Make Appointment'} color={'yellow'}/>
                </div>
            </section>
        </>
    );
}