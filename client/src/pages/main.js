import {Outlet} from "react-router-dom";
import Header from "../layouts/header";

export default () => {
    return (
        <>
            <Header />
            <section>
                <Outlet />
            </section>
        </>
    );
}