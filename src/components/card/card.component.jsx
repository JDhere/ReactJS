import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.avenger.id}?set=set6&size=180x180`}></img>
        <h1>{ props.avenger.name }</h1>
    </div>
)