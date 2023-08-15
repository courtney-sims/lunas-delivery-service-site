import React from "react"
import Aurora from "../images/aurorasitalianbistro.png"
import Star from "../images/star.png"

export default function Card(){
    return (
        <div className='card'>
            <img className='card--bistroImg' src={Aurora} alt="Chef Aurora of Aurora's Italian Bistro"></img>
            <div className='card--bistroStats'>
                <img className='card--star' src={Star} alt="Neon star"></img>
                <span>5.0</span>
                <span className='gray'>(6) - </span>
                <span className='gray'>USA</span>
            </div>
                <p>World's Best Meatball from Aurora's Italian Bistro</p>
                <p><b>From $136</b> / person</p>
            
        </div>
    )
}