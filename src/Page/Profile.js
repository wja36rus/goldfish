import React, {useEffect, useState} from "react";
import Header from "../Components/Header/Header";
import Nav from "../Components/Nav/Nav";
import {useNavigate} from "react-router-dom";

function Profile() {
    const navigate = useNavigate();

    useEffect(() => {
        const auth = window.localStorage.getItem("isAuth");
        !auth && navigate("/login");
    }, []);

    return (
        <React.Fragment>
            <Header>
                <Nav/>
            </Header>
            <main className="container">
                <h1>Profile</h1>
            </main>
        </React.Fragment>
    );
}

export default Profile;