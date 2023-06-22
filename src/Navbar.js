import React from "react";

import {
    Link
} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
        <Link to="/"><h1>Olga Bulanenkova</h1></Link>
        <div className="links">
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact" style={{
                color: 'white',
                backgroundColor:'#8f6ce2',
                borderRadius: '8px'
                
            }}>Contact</Link>



        </div>
        </nav>


      );
}
 
export default Navbar;