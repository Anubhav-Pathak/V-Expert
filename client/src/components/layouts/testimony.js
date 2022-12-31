import React from 'react'
import {reviews} from "../../data/data";

const Testimony = () => {
    const [name, setName] = React.useState(reviews[0].name);
    const [review, setReview] = React.useState(reviews[0].review);
    const [loading, setLoading] = React.useState(false);
    let [rating, setRating] = React.useState(reviews[0].rating);
    let stars = [];
    let [currentReview, setCurrentReview] = React.useState(0);

    const changeContent = async () => {
        setLoading(true);

        await setCurrentReview(prevState => {
            prevState = (prevState + 1) % reviews.length;
            setName(reviews[prevState].name);
            setReview(reviews[prevState].review);
            setRating(reviews[prevState].rating);
            return Number(prevState);
        })

        while(rating>0){
            stars.push(<i className="fa-solid fa-star text-blue fa-xl mr-2" />)
            rating--;
        }
        setLoading(false)
    }

    React.useEffect( () => {
        const timer = setInterval(changeContent, 2000)
        return () => clearInterval(timer);
    })


    return (
        <section className='min-h-[650px] mt-12 py-12 px-4 flex flex-col gap-8 items-center justify-start bg-gray'>
            <h1 className='text-5xl sm:text-6xl text-center text-blue'>Testimonies</h1>
            {!loading?
                <div className='review max-w-3xl'>
                    <span className='absolute top-[-20px] left-[20px] text-[108px] md:text-[12vw] z-10 text-blue'>“</span>
                    <article className="rounded-lg py-16 sm:px-16">
                        <div className='mb-4'>{stars}</div>
                        <p className='text-xl mb-4'>{review}</p>
                        <address className='text-xl text-center'>{name}</address>
                    </article>
                    <span className='absolute bottom-[-40px] right-[20px] text-[108px] md:text-[12vw] z-10 text-blue'>”</span>
                </div>
                : <></> }
        </section>
    )
}
export default Testimony;