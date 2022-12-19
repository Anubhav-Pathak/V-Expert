import React from 'react'
import {reviews} from "../../../data/data";

const Testimony = () => {
    const [name, setName] = React.useState(reviews[0].name);
    const [review, setReview] = React.useState(reviews[0].review);
    const [loading, setLoading] = React.useState(false);
    let [rating, setRating] = React.useState(reviews[0].rating);
    let stars = [];
    let currentReview = 0;

    while(rating--){
        stars.push(<i className="fa-solid fa-star text-yellow-500 fa-xl mr-2" />)
    }

    const changeContent = () => {
        setLoading(true);
        currentReview++;
        currentReview = currentReview%reviews.length;
        setName(reviews[currentReview].name);
        setReview(reviews[currentReview].review);
        setRating(reviews[currentReview].rating);
        setLoading(false)
    }

    React.useEffect( () => {
        const timer = setInterval(changeContent, 5000)
        return () => clearInterval(timer);
    }, [])


    return (
        <section className='py-12 px-4 flex flex-col gap-8 max-w-[1400px] items-center justify-center mx-auto'>
            <h1 className='text-5xl sm:text-6xl mb-12 text-center'>What Our Clients are Saying</h1>
            {!loading?
                <div className='review'>
                    <span className='absolute top-[-20px] left-[20px] text-[108px] z-10 text-yellow-500'>“</span>
                    <article className="review-clip rounded-lg pb-24 pt-8 px-8 sm:pt-16 sm:px-16">
                        <div className='mb-4'>{stars}</div>
                        <p className='text-xl mb-4'>{review}</p>
                        <address className='text-xl text-center'>{name}</address>
                    </article>
                </div>
                : <></> }
        </section>
    )
}
export default Testimony;