import {useNavigate} from "react-router-dom";

export default () => {

    let navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/admin/login');
    }

    return (
        <div className={"fixed w-full top-0 left-0 flex justify-end space-x-5 items-center py-2 bg-white shadow-md shadow-black px-12"}>
            <a href={"/admin/register"} className={"text-lg pb-1 border-b border-b-white duration-300 hover:border-b-black"}>Create</a>
            <button className={"text-lg pb-1 border-b border-b-white duration-300 cursor-pointer hover:border-b-black"} onClick={handleLogout}>Log Out</button>
        </div>
    )
}