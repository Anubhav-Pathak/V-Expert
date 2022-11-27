import React from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./components/layouts/header";
import Home from "./components/pages/home/home";
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path={"/"} element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
