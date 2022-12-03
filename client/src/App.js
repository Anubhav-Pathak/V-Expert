import React from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./components/layouts/header/header";
import Home from "./components/pages/home/home";
import Business from "./components/pages/package/business";
import Economy from "./components/pages/package/economy";
import First from "./components/pages/package/first";
import Package from "./components/pages/package/package";
import Error from "./components/pages/error/error";
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/packages"} element={<Package />} />
                <Route path={"/packages/first"} element={<First />} />
                <Route path={"/packages/economy"} element={<Economy />} />
                <Route path={"/packages/business"} element={<Business />} />
                <Route path={"*"} element={<Error />} />
            </Routes>
        </>
    );
}

export default App;
