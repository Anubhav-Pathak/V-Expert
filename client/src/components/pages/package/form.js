import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
const Form = ({packageType}) => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        price: packageType.price,
        property: "",
    })
    const handleChange = (e) => {
        setForm(()=>{ return (
            {
                price: packageType.properties[e.target.value],
                property: e.target.value
            }
        );
        });
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        localStorage.setItem(packageType.name, form.price);
        navigate("/cart");
    } 
    return (
        <form className="flex flex-col text-xl" onSubmit={handleSubmit} action="/cart" method="POST">
            <p className={"text-lg mb-8"}> Base Price: <span className={"text-7xl"}>{form.price}</span><strong>AED</strong></p>
            {/* Property Type */}
            <label className="mb-2 block font-bold" htmlFor="property"><i className="fa-solid fa-house"></i>&nbsp;Property Type</label>
            <select className="p-2 border-2 border-blue rounded-md" id="property" name="property" onChange={handleChange}>
                <option selected="selected">Select Property Type</option>{
                    Object.keys(packageType.properties).map((property)=> <option value={property}>{property}</option>)
                }
            </select>
            {/* Submit Button */}
            <div className="flex flex-wrap gap-x-4">
                <input type="submit" value="Add to Cart" className="cursor-pointer mt-4 border-blue bg-blue text-white border-2 px-2 py-4 rounded-md hover:bg-opacity-90"/>
                <a href="/cart" className=" text-center cursor-pointer mt-4 border-blue text-blue border-2 px-2 py-4 rounded-md hover:bg-blue hover:text-white">Go to Cart</a>
            </div>
        </form>
    )
}
export default Form
