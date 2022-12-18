import "../../../assests/css/testimonials.css"
import TestimonyCard from "./testimony-card";

export default () => {

    const testimonies = [
        {
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum volutpat ligula ac commodo. Suspendisse sit amet eros turpis. Donec suscipit tincidunt turpis non euismod. Integer pharetra facilisis orci, nec condimentum arcu scelerisque sed. Sed et mauris eros. Pellentesque tincidunt augue quis tempor ornare.",
            name: "Mark"
        },
        {
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum volutpat ligula ac commodo. Suspendisse sit amet eros turpis. Donec suscipit tincidunt turpis non euismod. Integer pharetra facilisis orci, nec condimentum arcu scelerisque sed. Sed et mauris eros. Pellentesque tincidunt augue quis tempor ornare.",
            name: "Mark"
        },
        {
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum volutpat ligula ac commodo. Suspendisse sit amet eros turpis. Donec suscipit tincidunt turpis non euismod. Integer pharetra facilisis orci, nec condimentum arcu scelerisque sed. Sed et mauris eros. Pellentesque tincidunt augue quis tempor ornare.",
            name: "Mark"
        }
    ]

    return (
        <div className={"py-20"}>
            <p className='text-5xl mb-12 text-center'>Testimonials</p>
            <div className={"container mx-auto testimonial-container mb-16"}>
                {testimonies.map(item => {
                    return (
                        <TestimonyCard review={item.review} name={item.name}/>
                    )
                })}
            </div>
        </div>
    )
}