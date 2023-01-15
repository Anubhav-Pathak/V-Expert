import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import { baseUrl } from "../../../../constants";

export default () => {

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        const entries = new FormData(e.target);
        const data = Object.fromEntries(entries);
        console.log(data);
        console.log("baseUrl", baseUrl);
        const response = await fetch(`${baseUrl}/users/sign-up/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
        const res = await response.json();
        if (response.status === 201) {
          alert("User Created Successfully");
          navigate("/admin/sign-in");
        }
      }

    useEffect(()=>{
        const user = localStorage.getItem('user');
        if(!user)
            navigate("/admin/login");
    },[])

    return (
        <>
            <form method='POST' className={"py-12 px-8 rounded-lg grid grid-col-1 gap-4 bg-white"} onSubmit={submitHandler}>
                <div className={"text-center text-2xl mb-8 text-cyan-600"}>Create New User</div>
                <label className={"text-xl"} htmlFor={'name'}>Name</label>
                <input className={"form-input"} id={"name"} name={"name"} placeholder={"John"}  required={true}/>
                <label className={"text-xl"} htmlFor={'email'}>Email</label>
                <input className={"form-input"} id={"email"} name={"email"} placeholder={"example@example.com"} required={true} />
                <label className={"text-xl"} htmlFor={'password'}>Password</label>
                <input className={"form-input"} id={"password"} name={"password"} placeholder={"Password"} type={"password"} required={true}/>
                <input className={"form-input cursor-pointer duration-300 mt-4 hover:bg-blue-700 hover:text-white"} type={"submit"} value={"Login"}/>
            </form>
        </>
    )
}