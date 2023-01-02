import test from "../../../assests/images/services/Painting.jpg"
import {services} from "../../../data/data";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const toggleModal = () => {
    document.getElementById("search-modal").classList.toggle("hidden");
}

const SearchCard = ({name, img, path}) => {

    const navigate = useNavigate();

    const redirectToService = () =>{
        navigate(`/services/${path}`);
        toggleModal();
    }

    return (
        <div className={"flex flex-wrap items-center bg-white py-2 px-4 rounded text-black mb-3"}>
            <div className={"w-1/4"}><img src={img} alt={"Just some image"}/></div>
            <div className={"text-2xl ml-4"}>{name}</div>
            <div className={"ml-auto inline cursor-pointer py-2 px-6 text-2xl border border-[#031F60] text-black hover:bg-white hover:text-black"} onClick={redirectToService}>Details</div>
        </div>
    )
}

export default () => {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false)
    const [heading, setHeading] = useState("Search For Service")

    const findServices = () => {
        setLoading(true);
        const match = services.filter(s => {
            const q = query.toLowerCase();
            s=s.name.toLowerCase();
            return s === q || s.startsWith(q) || s.includes(q) || s.endsWith(q);
        });
        setResults(match);
        if(!match.length)
            setHeading("No service found");
        console.log(results);
        setLoading(false);
    }

    return (
        <>
            <div id={"search-modal"} className={"fixed hidden flex justify-center items-center h-screen w-full top-0 left-0 z-10"}>
                <div className={"py-8 px-6 w-3/5 bg-gray rounded-2xl text-black text-center"} style={{maxHeight: "70vh", overflowY: "scroll"}}>
                    <div className={"text-end text-5xl mr-4 cursor-pointer"} onClick={toggleModal}><i className={`fa-solid fa-xmark cursor-pointer`}></i></div>
                    <p className={"text-4xl mb-8"}>{heading}</p>
                    <input
                        className= {"outline-none border border-[#031F60] w-2/3 px-4 py-2 block mx-auto mb-4 rounded bg-none"}
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                        placeholder={"Query"}
                    />
                    <button type={"submit"} className={"cursor-pointer bg-[#031F60] mb-4 text-white px-20 py-2 rounded-2xl"} onClick={findServices}>Search</button>
                    {!loading ?
                        results.map(item => <SearchCard {...item}/>)
                        : <></> }
                </div>
            </div>
        </>
    )
}

export {
    toggleModal
}