import React from "react"

import '../Cards.css';

export default function Cards(props) {

    function touch(){
        console.log(props.recipeId)
    }

    return (
        <div className="cards" onClick={touch}>
            <img className="img" src={props.image} alt="{props.label}" ></img>
            <p className="name">{props.label}</p>
            <div className="items">
                <p><span className="calories">{props.calories}</span> Calories </p>
                <hr />
                <p><span className="ingredients">{props.ingredients}</span> Ingredients</p>
            </div>
            <a className="source" href={props.url} target="_blank" rel="noreferrer">{props.source}</a>
        </div>
    )

}
