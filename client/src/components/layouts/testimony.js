import {reviews} from "../../data/data";
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const Testimony = () => {
    const [name, setName] = React.useState(reviews[0].name);
    const [review, setReview] = React.useState(reviews[0].review);
    const [loading, setLoading] = React.useState(false);
    let [rating, setRating] = React.useState(reviews[0].rating);
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
        setLoading(false)
    }

    React.useEffect( () => {
        const timer = setInterval(changeContent, 2000)
        return () => clearInterval(timer);
    })


    return (
        <section className='mt-12 py-12 px-4 flex flex-col gap-8 items-center justify-start bg-gray min-h-[530px]'>
            <h1 className='text-5xl sm:text-6xl text-center text-blue'>Testimonies</h1>
            {!loading?
                <div className='review max-w-3xl relative shadow-xl rounded-lg border-gold border-4 bg-white'>
                    <article className="rounded-lg">
                        <Rating name="half-rating-read" value={rating} precision={0.5} readOnly />
                        <Typography component="legend">{review}</Typography>
                        <address className='mt-4 text-center'>{name}</address>
                    </article>
                </div>
                : <></> }
        </section>
    )
}
export default Testimony;