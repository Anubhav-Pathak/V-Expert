import {useEffect, useState} from "react";
import {signUp} from "../api";
import {useNavigate} from "react-router-dom";

export default () => {

    const [formData, setFormData] = useState({
        email: String,
        name: String,
        password: String
    });

    const navigate = useNavigate();

    const changeData = (e) => {
        setFormData(prevState => {
            return (
                {
                    ...prevState,
                    [e.target.name]: e.target.value
                }
            )
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        //     Backend Request
        console.log(formData);
        signUp(formData)
            .then(res => {
                console.log(res);
            })
            .catch(e => console.log(e));
    }

    useEffect(() => {
        const user = localStorage.getItem('user');
        if(!user)
            navigate("/admin/login");
    }, []);

    return (
        <>
            <form className={"py-12 px-8 rounded-lg grid grid-col-1 gap-4 bg-white"} onSubmit={submitForm}>
                <div className={"text-center text-2xl mb-8 text-cyan-600"}>Create New User</div>
                <label className={"text-xl"} htmlFor={'name'}>Name</label>
                <input className={"form-input"} id={"name"} name={"name"} placeholder={"John"} value={formData.name} required={true} onChange={changeData}/>
                <label className={"text-xl"} htmlFor={'email'}>Email</label>
                <input className={"form-input"} id={"email"} name={"email"} placeholder={"example@example.com"} value={formData.email} required={true} onChange={changeData}/>
                <label className={"text-xl"} htmlFor={'password'}>Password</label>
                <input className={"form-input"} id={"password"} name={"password"} placeholder={"Password"} type={"password"} value={formData.password} required={true} onChange={changeData}/>
                <input className={"form-input cursor-pointer duration-300 mt-4 hover:bg-blue-700 hover:text-white"} type={"submit"} value={"Login"}/>
            </form>
        </>
    )
}