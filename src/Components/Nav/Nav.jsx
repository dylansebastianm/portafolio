import React from "react";
import "./Nav.css"
import { Link } from "react-router-dom";


export default function Nav () {
    return (
        <div className="nav-component">
            <div className="links-container">
            <a href="#about-me" className="links"> 
            Home
            </a>
            <a href="#skills" className="links"> 
            Skills
            </a>
            <a href="#proyects" className="links"> 
            Poryects
            </a>
            </div>
           
        </div>
        
    )
}
