import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

let Navbar = () => {
    const [MenuBar, setMenuBar] = useState(false)
    const navigate = useNavigate();
    let auth = localStorage.getItem('user');
    const logout = () => {
        localStorage.clear()
        navigate('/signup')
    }
    return (
        <>
            <div className="navbar">
                <h1 className="logo">SONU</h1>
                <div className="nav-content">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    {
                        auth ? <li><Link onClick={logout} to="/signup">Logout</Link></li> :
                            <>
                                <li><Link to="/signup">Sign Up</Link></li>
                                <li><Link to="/login">Login</Link></li>
                            </>
                    }
                </div>

                <li onClick={() => { setMenuBar(!MenuBar) }}><Link >
                    {MenuBar ? <RxCross2 className="cross-mobile-menu" /> : <CiMenuBurger className="mobile-menu" />}
                </Link></li>
            </div>
            <div className={`mobileMenu-container ${MenuBar ? 'show' : 'hide'}`}>
                <div className="mobileMenu-content">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    {
                        auth ? <li><Link onClick={logout} to="/signup">Logout</Link></li> :
                            <>
                                <li><Link to="/signup">Sign Up</Link></li>
                                <li><Link to="/login">Login</Link></li>
                            </>
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar;