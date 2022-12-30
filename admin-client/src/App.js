import React from "react";
import {Routes, Route} from "react-router-dom";
import Admin from "./components/home/admin";
import Login from "./components/authenticate/login";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/requests"} element={<Admin />}></Route>
                <Route path={"/login"} element={<Login />}></Route>
            </Routes>
        </div>
    );
}

export default App;
