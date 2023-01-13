import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import { baseUrl } from "../../../../constants";
let error = false;

export default () => {

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        const entries = new FormData(e.target);
        const data = Object.fromEntries(entries);
        console.log(data);
        console.log("baseUrl", baseUrl);
        const response = await fetch(`${baseUrl}/users/sign-in/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
        const res = await response.json();
        if (response.status === 201) {
            console.log("res", res);
            const token = res.token;
            localStorage.setItem("user", token);
          alert("User Signed In Successfully");
          navigate("/admin/panel");
        } else {
            error = true;
        }
      }


    useEffect(()=>{
        const user = localStorage.getItem('user');
        if(user)
            navigate("/admin/panel");
    })

    return (
        <>
            <form className={"py-12 px-8 text-xl rounded-lg grid grid-col-1 gap-4 bg-white"} method='POST' onSubmit={submitHandler}>
                <div className={"text-center text-3xl mb-8 text-blue"}>V-Expert Login</div>
                {error ? <div className={"text-center text-2xl mb-8 text-black]"}>Wrong Credentials</div> : <></>}
                <label className={"text-xl"} htmlFor={'email'}>Email</label>
                <input className={"form-input"} id={"email"} name={"email"} placeholder={"example@example.com"} required={true}/>
                <label className={"text-xl"} htmlFor={'password'}>Password</label>
                <input className={"form-input"} id={"password"} name={"password"} placeholder={"Password"} type={"password"}  required={true}/>
                <input className={"form-input cursor-pointer duration-300 mt-4 hover:bg-blue hover:text-white"} type={"submit"} value={"Login"}/>
            </form>
        </>
    )
}