import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Page/Home";
import News from "./Page/News";
import Profile from "./Page/Profile";
import Login from "./Page/Login";
import "./Style/Style.css";

function App() {
    return (
        <Routes>
            <Route index element={<Home/>} path="/"/>
            <Route element={<News/>} path="/news"/>
            <Route element={<Login/>} path="/login"/>
            <Route element={<Profile/>} path="/profile"/>
        </Routes>
    );
}

export default App;
