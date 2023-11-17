import React from "react"

import '../Cards.css';

export default function Cards(props) {

    return (
            <div className="cards">
            <img src={props.image} height="200px" width="200px" alt="{props.label}" ></img>
            <p className="name">{props.label}</p>
            <p className="calories">{props.calories}</p>
            <p className="ingredients">{props.ingredients}</p>
            </div>
    )

}
