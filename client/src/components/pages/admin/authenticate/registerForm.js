import {useState} from "react";

export default () => {

    const [formData, setFormData] = useState({
        user: String,
        name: String,
        password: String
    });

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
    }

    return (
        <>
            <form className={"py-12 px-8 rounded-lg grid grid-col-1 gap-4 bg-white"} onSubmit={submitForm}>
                <div className={"text-center text-2xl mb-8 text-cyan-600"}>Create New User</div>
                <label className={"text-xl"} htmlFor={'name'}>Name</label>
                <input className={"form-input"} id={"name"} name={"name"} placeholder={"John"} value={formData.name} required={true} onChange={changeData}/>
                <label className={"text-xl"} htmlFor={'user'}>Username</label>
                <input className={"form-input"} id={"user"} name={"user"} placeholder={"Username"} value={formData.user} required={true} onChange={changeData}/>
                <label className={"text-xl"} htmlFor={'password'}>Password</label>
                <input className={"form-input"} id={"password"} name={"password"} placeholder={"Password"} type={"password"} value={formData.password} required={true} onChange={changeData}/>
                <input className={"form-input cursor-pointer duration-300 mt-4 hover:bg-blue-700 hover:text-white"} type={"submit"} value={"Login"}/>
            </form>
        </>
    )
}