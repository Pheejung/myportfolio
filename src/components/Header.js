import React from 'react';
import "./components.css";

const Header = () => {

    return (
        <div className="header">
            <a href="#main" className="menu-item">Home</a> 
            <a href="#about" className="menu-item">About</a> 
            <a href="#project" className="menu-item">Project</a> 
            <a href="#contact" className="menu-item">Contact</a>
        </div>
    );
};

export default Header;