import React from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./components/layouts/header/header";
import Home from "./components/pages/home/home";
// import Package from "./components/pages/package/package";
// import Form from "./components/pages/package/form";
import Error from "./components/pages/error/error";
import Footer from "./components/layouts/footer/footer";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path={"/"} element={<Home />} />
                {/* <Route path={"/packages"} element={<Package />} />
                <Route path={"/packages/:name"} element={<Form />} /> */}
                <Route path={"/error"} element={<Error />} />
                <Route path={"*"} element={<Error />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
