import React from "react";
import card from './card.json';
import CardItem from "./CardItem";

function Card({home}) {

    return (
        <section className="d-flex align-items-center flex-wrap">
            {
                card.map((c, index) =>
                    home ?
                        index < 4 &&
                        <CardItem key={c.id}
                                  title={c.title}
                                  body={c.body}
                                  date={c.date}
                                  time={c.time}
                                  home={home}
                        /> :
                        <CardItem key={c.id}
                                  title={c.title}
                                  body={c.body}
                                  date={c.date}
                                  time={c.time}
                                  home={home}
                        />
                )
            }
        </section>
    );
}

export default Card;