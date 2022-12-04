import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

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
    return (
        <div>
        <h1>{name}</h1>
        <input type="text" placeholder="Location" /><br />
        <input type="text" placeholder="Property Type" /><br />
        <input type="text" placeholder="Add ons" /><br />
        <button>
            Proceed to Checkout
        </button>
        </div>
    )
}

export default Form