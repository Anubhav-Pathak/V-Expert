import React from "react";
import {Routes, Route} from "react-router-dom";
import Admin from "./components/home/admin";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Admin />}></Route>
            </Routes>
        </div>
    );
}

export default App;
