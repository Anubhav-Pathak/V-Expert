import React, {useState} from "react";

const properties = {
    "Apartment - Studio / 1 Br / 2 Br": 300,
    "Apartment - 3 Br / 4 Br": 400,
    "Apartment - 5 Br / Pent House": 500,
    "Villa - 2 Br / 3 Br": 700,
    "Villa - 4 Br / 5 Br": 800,
    "Villa - 6 Br / 7 Br": 900,
};

const Form = () => {
    const [form, setForm] = useState({
        price: 100,
        location: "",
        property: "",
        date: new Date(),
        description: "",
    })
    const handleChange = (e) => {

        setForm(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.innerHTML,
                price: properties[e.target.value]
            }
        })
    }
    const handleSubmit = (e) => e.preventDefault();
    return (
        <form className="flex flex-col text-xl" onSubmit={handleSubmit}>
            <p className={"text-lg mb-8"}> Net Price: <span className={"text-7xl"}>{form.price}</span><strong>AED</strong></p>
            {/* Property Type */}
            <label className="mb-2 block font-bold" htmlFor="property"><i className="fa-solid fa-house"></i>&nbsp;Property Type</label>
            <select className="mb-8 p-2 border-2 border-blue rounded-md" id="property" name="property" onChange={handleChange}>
                <option selected="selected">Select Property Type</option>{
                    Object.keys(properties).map((property)=> <option value={property}>{property}</option>)
                }
            </select>
            {/* Time Slot */}
            <p className="mb-2 block font-bold"><i class="fa-regular fa-clock"></i>&nbsp;Select Time Slot</p>
            <div className="flex gap-4 flex-wrap">
                <div>
                    <label className="block" htmlFor="date">Choose Preferred Date: </label>
                    <input className="w-[200px] p-2 border-2 border-blue rounded-md" id="date" type="date" name="date"></input>
                </div>
                <div>
                    <label className="block" htmlFor="time">Choose Preferred Time: </label>
                    <input className="w-[200px] mb-8 p-2 border-2 border-blue rounded-md" id="time" type="time"/>
                </div>
            </div>
            {/* Description */}
            <label className="mb-2 block font-bold" htmlFor="description"><i class="fa-solid fa-helmet-safety"></i>&nbsp;Requirements</label>
            <textarea id="description" placeholder="Tell us about your requirements" className="border-2 border-blue rounded-md resize-none p-2" name="description" rows={5}/>
            {/* Submit Button */}
            <input type="submit" value="Book" className="cursor-pointer mt-12 border-blue bg-blue text-white border-2 px-2 py-4 rounded-md hover:bg-opacity-90"/>
        </form>
    )
}
export default Form