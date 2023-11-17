import React from "react"

import '../Cards.css';

export default function Cards(props) {

    return (
        <div className="cards">
            <img className="img" src={props.image} alt="{props.label}" ></img>
            <p className="name">{props.label}</p>
            <div className="items">
                <p><span className="calories">{props.calories}</span> Calories </p>
                <hr />
                <p><span className="ingredients">{props.ingredients}</span> Ingredients</p>
            </div>
            <p className="source">{props.source}</p>
        </div>
    )

}
