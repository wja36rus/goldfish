import React from "react";
import Nav from "../Components/Nav/Nav";

function News() {
    return (
        <React.Fragment>
            <header>
                <Nav/>
            </header>
            <main className="container">
                <h1>News</h1>
            </main>
        </React.Fragment>
    );
}

export default News;