import React from "react";
import Nav from "../Components/Nav/Nav";
import Card from "../Components/Cards/Card";

function News() {
    return (
        <React.Fragment>
            <header>
                <Nav/>
            </header>
            <main className="container top-5">
                <Card/>
            </main>
        </React.Fragment>
    );
}

export default News;