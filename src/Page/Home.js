import React from "react";
import Header from "../Components/Header/Header";
import Nav from "../Components/Nav/Nav";

function Home() {
    return (
        <React.Fragment>
            <Header>
                <Nav/>
            </Header>
            <main className="container">
                <h1>Home</h1>
            </main>
        </React.Fragment>
    );
}

export default Home;