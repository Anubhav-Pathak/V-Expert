import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { baseUrl } from "../../../constants";

let packages = [
    "first",
    "economy",
    "business",
]

const Form = () => {
    let {name} = useParams();
    let navigate = useNavigate();
    let success = packages.find((item) => item === name);
    useEffect(() => {    
    if (!success || success === undefined) {
        navigate("/error", {replace: true});
    }
    });    
    const  handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submit");
        const data = new FormData(e.target);
        const value = Object.fromEntries(data.entries());
        console.log("value", value);

        let url = baseUrl + "/api/package";
        const res = await fetch( url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(value),
        })
        const json = await res.json();
        console.log("json", json);
    }

    return (
        <div>
        <h1>{name}</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" name="location" placeholder="Location" required/><br />
        <input type="text" name="propertyType" placeholder="Property Type" required/><br />
        <input type="text" name="addOns" placeholder="Add ons" required/><br />
        <button type="submit">
            Proceed to Checkout
        </button>
        </form>
        </div>
    )
}

export default Form