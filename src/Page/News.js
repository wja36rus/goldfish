import React from "react";
import Header from "../Components/Header/Header";
import Nav from "../Components/Nav/Nav";

function News() {
    return (
        <React.Fragment>
            <Header>
                <Nav/>
            </Header>
            <main className="container">
                <h1>News</h1>
            </main>
        </React.Fragment>
    );
}

export default News;