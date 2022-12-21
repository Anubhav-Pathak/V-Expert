import React from "react";
import {useParams} from "react-router-dom";
import "../../../assests/css/services.css"
import {services} from "../../../data/data";
import About from "./about";
import Form from "./form";

export default () => {

    const {name} = useParams();
    const selectedService = services.find(s => s.path === name);

    return (
        <section id={"section-service"}>
            <div className={"single-service-container"}>
                <About img={selectedService.img} name={selectedService.name} disc={selectedService.description} />
                <Form price={300}/>
            </div>
        </section>
    )
}