import React from 'react'
import logo from '../images/airbnb 1 (1).png'
import "../style.css"
const Nav = () => {
    return (  
        <div className='navigation'> 
        <img src={logo} className='navigation--logo' alt='#'/>
        </div>
    );
}
export default Nav;
