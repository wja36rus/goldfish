import React, {useEffect} from "react";
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
            <header>
                <Nav/>
            </header>
            <main className="container">
                <h1>Profile</h1>
            </main>
        </React.Fragment>
    );
}

export default Profile;