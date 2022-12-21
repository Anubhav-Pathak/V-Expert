import "../../../assests/css/error.css"
import React from "react";

const Error = () => {
    return (
        <section id={"section-error"}>
            <div className={"error-message"}>
                <div>Under Construction</div>
                <a href="/" className="py-4 px-8 bg-blue hover:bg-yellow-500 text-white text-xl lg:text-2xl rounded">Back to Homepage</a>
            </div>
        </section>
    )
}
export default Error;