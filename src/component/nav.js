import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

let Navbar = () => {
    const [MenuBar,setMenuBar]=useState(false)
    return (
        <>
        <div className="navbar">
            <h1 className="logo">SONU</h1>
            <div className="nav-content">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </div>
            
            <li onClick={()=>{setMenuBar(!MenuBar)}}><Link >
            {MenuBar?<RxCross2 className="cross-mobile-menu"/>:<CiMenuBurger className="mobile-menu"/>}  
            </Link></li>
        </div>
        <div className={`mobileMenu-container ${MenuBar ? 'show' : 'hide'}`}>
            <div className="mobileMenu-content">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </div>
        </div>
        </>
    )
}

export default Navbar;