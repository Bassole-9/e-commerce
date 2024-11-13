import React from "react";
import { Link } from "react-router-dom";
import "./header.css"

const Header=()=>{
    return(
        <header className="pheades">
            <nav>
                <ul>
                    <li><Link to="/">Acceuil</Link></li>
                    <li><Link to="/about">Service</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header