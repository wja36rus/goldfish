import React from "react";
import "./Card.css";

function CardItem({title, body, date, time, home}) {
    return (
        home ?

            <div className="p-2 m-2 border card w-card shadow">
                <a href="/news" className="text-decoration-none text-dark">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-body h-card">{body}</p>
                    <div className="d-flex">
                        <div className="bg-secondary ms-auto">
                            <p className="text-white p-1 m-1">
                                {date} {time}
                            </p>
                        </div>
                    </div>
                </a>
            </div>
            :
            <div className="p-2 m-2 border card w-card shadow">
                <h4 className="card-title">{title}</h4>
                <p className="card-body h-card">{body}</p>
                <div className="d-flex">
                    <div className="bg-secondary ms-auto">
                        <p className="text-white p-1 m-1">
                            {date} {time}
                        </p>
                    </div>
                </div>
            </div>
    );
}

export default CardItem;