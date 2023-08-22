import React from "react"
import Star from "../images/star.png"

export default function Card(props){
    return (
        <div className='card'>
            <img className='card--bistroImg' src={props.img} alt={props.alt}></img>
            <div className='card--bistroStats'>
                <img className='card--star' src={Star} alt="Neon star"></img>
                <span>{props.rating}</span>
                <span className='gray'>({props.numReviews}) - </span>
                <span className='gray'>{props.location}</span>
            </div>
                <p>{props.name}</p>
                <p><b>From {props.price} {props.currency}</b> / person</p>
            
        </div>
    )
}