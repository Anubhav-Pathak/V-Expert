import React from "react"

const About = ({service}) => {
    return (
        <section className="mb-12 bg-blue flex items-center justify-center">
            <div className="max-w-[1400px] mx-auto px-4 py-8 text-center text-white">
                <h1 className="text-5xl sm:text-6xl mb-4">{service.name}</h1>
                <p className="max-w-[800p]">{service.description}</p>
            </div>
        </section>
    )
}
export default About