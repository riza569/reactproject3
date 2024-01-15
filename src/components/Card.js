import React from 'react'
import star from '../images/Star 1.png'
import'../style.css'
const Card = (props) => {
    let factor
    if(props.openspot===0){
        factor="Sold out"}
    else if (props.location==="Online"){ 
        factor="online"
    }
    

    return ( 
        <section className='card'>
            {factor && <div className='sold'>{factor}</div>}
            <img src= {props.coverImg} className='card--image' alt='#'/>
            <div className='card-stats'>
            <img src={star} className='card--star' alt='#'/>
            <span>{props.stats.rating}</span>
            <span className='grey'>({props.stats.reviewCount})</span>
            <span className='grey'>{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"> <span className='bold'>From ${props.price}</span> / person</p>
           
        </section>
     );
}
 
export default Card;