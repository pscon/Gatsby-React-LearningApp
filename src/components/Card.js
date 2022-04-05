import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div className="Card">
        <img src={props.image} alt="wallpaper"/>
    <h3>{props.title}</h3>
    <p>{props.text}</p>
</div>
  )
}

export default Card