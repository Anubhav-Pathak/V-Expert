import React from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./components/layouts/header/header";
import Home from "./components/pages/home/home";
import Package from "./components/pages/package/package";
import Error from "./components/pages/error/error";
import Footer from "./components/layouts/footer/footer";
import Service from "./components/pages/services/service";
import Admin from "./components/pages/admin/home/admin";
import Login from "./components/pages/admin/authenticate/login";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/packages/:name"} element={<Package />} />
                <Route path={"/services/:name"} element={<Service />} />
                <Route path={"/admin/panel"} element={<Admin />} />
                <Route path={"/admin/login"} element={<Login />} />
                <Route path={"/error"} element={<Error />} />
                <Route path={"*"} element={<Error />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
