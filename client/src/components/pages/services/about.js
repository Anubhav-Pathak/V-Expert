import React from "react"

const About = ({service}) => {
    return (
        <>
            <section className="bg-blue flex items-center justify-center">
                <div className="max-w-[1400px] mx-auto p-4 text-center text-white">
                    <h1 className="text-5xl sm:text-6xl mb-4">{service.name}</h1>
                    <p className="max-w-[800p]">{service.description}</p>
                </div>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#031F60" fill-opacity="1" d="M0,192L34.3,197.3C68.6,203,137,213,206,208C274.3,203,343,181,411,165.3C480,149,549,139,617,112C685.7,85,754,43,823,58.7C891.4,75,960,149,1029,192C1097.1,235,1166,245,1234,213.3C1302.9,181,1371,107,1406,69.3L1440,32L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
        </>
    )
}
export default About