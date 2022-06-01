import React from "react";
import Nav from "../Components/Nav/Nav";

function Home() {
    return (
        <React.Fragment>
            <header>
                <Nav/>
            </header>
            <main className="container">
                <h1>Home</h1>
            </main>
        </React.Fragment>
    );
}

export default Home;