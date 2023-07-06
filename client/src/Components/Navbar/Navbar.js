import React, { useState } from 'react'
import './Navbar.css'
import { Link } from "react-scroll";


const Navbar = () => {
    const [navScrollColor, setNavScrollColor] = useState(false);
    const onChangeNavColor = () => {
        if (window.scrollY >= 100) {
            setNavScrollColor(true);
        } else {
            setNavScrollColor(false);
        }
    };

    window.addEventListener("scroll", onChangeNavColor);
    return (
        <nav className={
            navScrollColor ? "navbar-scroll-color navbar-main" : "navbar-main"
        }>
            <ul>
                <li className="nav-item">
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="products/Services" spy={true} smooth={true} offset={-100} duration={100}>
                    Products/Services
                    </Link>
                    
                </li>
                <li className="Solutions">
                    <Link to="solutions" spy={true} smooth={true} offset={-100} duration={100}>
                    Solutions
                    </Link>
                    
                </li>
                <li className="nav-item">
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                        About Us
                    </Link>

                </li>
                <li className="nav-item">
                    <Link to="team" spy={true} smooth={true} offset={-100} duration={100}>
                        Our Team
                    </Link>

                </li>
                <li className="nav-item">
                    <Link to="resources" spy={true} smooth={true} offset={-100} duration={100}>
                        Resources
                    </Link>

                </li>
                <li className="nav-item">
                    <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                        Contact Us
                    </Link>

                </li>
            </ul>
        </nav>
    )
}

export default Navbar