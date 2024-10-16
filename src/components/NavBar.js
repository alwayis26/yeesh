import '../global.css'
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="nav">
            <div className="navbar">
                <div className="navbarlogo">
                    <h1>WYEESH!</h1>
                </div>
                <div className="navbarlinks">
                    <Link to="/" >Home</Link>
                    <Link to="/work" >Work</Link>
                    <Link to="/design" >Design</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar
