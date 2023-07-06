import React, { useState } from "react";
import "./mavbarmobileview.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";

const NavbarMobileView = () => {
    const [open, setOpen] = useState(false);

    const handleNavbaropen = () => {
        setOpen(!open);
    };

    return (
        <div className="responsive-mobile-view">
            <div className="container-fluid mobile-view-header">
                <p>
                    <GiHamburgerMenu size={25} onClick={handleNavbaropen} />
                </p>
            </div>

            {open ? (
                <div className="mobile-nav">
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
                </div>
            ) : null}
        </div>
    );
};


export default NavbarMobileView