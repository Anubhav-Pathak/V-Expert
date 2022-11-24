import {Outlet} from "react-router-dom";
import Header from "../layouts/header";

const Main = () => {
    return (
        <>
            <Header />
            <section>
                <Outlet />
            </section>
        </>
    );
}
export default Main;