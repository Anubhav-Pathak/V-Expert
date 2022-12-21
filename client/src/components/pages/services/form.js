import {useEffect, useState} from "react";
const Form = ({price}) => {
    const [form, setForm] = useState({
        size1: String,
        size2: String,
        size3: String,
        price: Number
    })
    const handleChange = (e) => {
        setForm(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            }
        })
    }
    const handleSubmit = (e) => e.preventDefault();
    useEffect(() => {
        setForm(prevState => {
            return {
                ...prevState,
                price: price,
            }
        })
    },[price]);

    return (
        <div>
            <p className={"service-price text-5xl"}>Est Price <span className={"text-2xl"}>{price}</span></p>
            <form className={"service-form"} onSubmit={handleSubmit}>
                <label htmlFor={"size1"} className={"service-label"}>
                    <i className="fa-solid fa-house"></i>
                    <input id={"size1"} name={"size1"} type={"text"} value={form.size1} placeholder={"Apartment Size"} onChange={handleChange}/>
                </label>
                <label htmlFor={"size2"} className={"service-label"}>
                    <i className="fa-solid fa-house"></i>
                    <input id={"size2"} name={"size2"} type={"text"} value={form.size2} placeholder={"Apartment Size"} onChange={handleChange}/>
                </label>
                <label htmlFor={"size3"} className={"service-label"}>
                    <i className="fa-solid fa-house"></i>
                    <input id={"size3"} name={"size2"} type={"text"} value={form.size3} placeholder={"Apartment Size"} onChange={handleChange}/>
                </label>
                <button type={"submit"} className={"form-submit-btn text-2xl"}>Make Purchase </button>
            </form>
        </div>
    )
}

export default Form