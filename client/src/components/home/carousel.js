import image1 from "../../assests/images/img_1.png"
import image2 from "../../assests/images/pexels-anete-lusina-4792713.jpg"
import image3 from "../../assests/images/pexels-field-engineer.jpg"
import image4 from "../../assests/images/pexels-kindel-media-9875405.jpg"

export default () => {

    let curSlide = 0;
    let time = 4;

    const moveCarousel = (curSlide) => {
        const carouselCards = document.querySelectorAll(".carousel-card");
        const controllers  = document.querySelectorAll(".carousel-controller");
        document.querySelectorAll('.active')[0].classList.remove('active');

        carouselCards.forEach((card, ind) => {
            card.style.transform = `translate(${100 * (ind - curSlide)}%`
            if (Number(controllers[ind].getAttribute('data-id')) === curSlide)
                controllers[ind].classList.add('active');
        });

    }

    const handleControllerClick = (e) => {
        const slide = Number(e.target.getAttribute('data-id'));
        time = 4;
        curSlide = slide;
        moveCarousel(curSlide);
    }

    setInterval(() => {
        time--;
        if (!time) {
            curSlide++;
            if (curSlide>=4) curSlide = 0;
            moveCarousel(curSlide);
        }

        if(time<=0) time = 4;

    }, 1000);

    return (
        <>
            <div className={"carousel-container"}>
                <div className={"carousel-card"} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image1})`}}></div>
                <div className={"carousel-card"} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image2})`}}></div>
                <div className={"carousel-card"} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image3})`}}></div>
                <div className={"carousel-card"} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image4})`}}></div>

                <ul className={"carousel-controller-list"}>
                    <li><div data-id={0} onClick={handleControllerClick} className={"carousel-controller active"}></div></li>
                    <li><div data-id={1} onClick={handleControllerClick} className={"carousel-controller"}></div></li>
                    <li><div data-id={2} onClick={handleControllerClick} className={"carousel-controller"}></div></li>
                    <li><div data-id={3} onClick={handleControllerClick} className={"carousel-controller"}></div></li>
                </ul>

            </div>
        </>
    )
}