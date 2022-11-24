import {Link} from "react-router-dom";
import "../assests/css/header.css"
import logo from "../assests/images/img.png"

const Header = () => {
    return(
        <header>
            <div className={"logo-container"}>
                <img src={logo} alt={"Company Logo"}/>
            </div>
            <div className={"top-nav"}>
                <div className={"list-container"}>
                    <ul className={"top-nav-links"}>
                        <li><Link to={"/"} className={"top-nav-link"}>Home</Link></li>
                        <li><Link to={"/"} className={"top-nav-link"}>About</Link></li>
                        <li>
                            <select className={"top-nav-options"}>
                                <option>Air Conditioning</option>
                                <option>Air Conditioning</option>
                                <option>Air Conditioning</option>
                                <option>Air Conditioning</option>
                            </select>
                        </li>
                        <li>
                            <select className={"top-nav-options"}>
                                <option>Products</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </li>
                        <li><Link to={"/"} className={"top-nav-link"}>Contact</Link></li>
                        <li>
                            <div className={"search-box"}>
                                <label htmlFor={"search-bar"}><span className="material-symbols-outlined">search</span></label>
                                <div><input id={"search-bar"} placeholder={"Search"}/></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
export default Header;