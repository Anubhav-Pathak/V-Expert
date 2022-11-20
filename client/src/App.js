import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./assests/css/index.css"
import "./assests/css/reuse.css"
import Main from "./pages/main";
import Home from "./pages/home";
import Carousel from "./components/home/carousel";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Main />}>
                        <Route path={"/"} element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
