import React from 'react'
import group from "../images/Group 77.png"
const  Hero= () => {
    return ( 
        <section classname="top">
            <img src={group} className="top--image" alt="#"/>
            <h1 className="top--text">Online Experiences</h1>
            <p className='top--para'>Join unique interactive activities led by<br></br>
            one-of-a-kind hosts—all without leaving <br></br>
            home.</p>
        </section>
     );
}
export default Hero;
 
