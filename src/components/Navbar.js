// Import React and prop-types
import React from "react";
import propTypes from "prop-types";

// Import images
import logoLight from "../images/logo-light.png";
import logoDark from "../images/logo-dark.png";
import rockstarLogo from "../images/rockstarlogo.png";

// Import CSS styles
import "../styles/Navbar.css";

// Define Navbar component
const Navbar = ({ darkMode, toggleDarkMode }) => {
    // Define logoSrc variable
    const logoSrc = darkMode ? logoDark : logoLight;

    // Return JSX element
    return (
        <nav
            className="navbar"
            style={
                darkMode ? { backgroundColor: "#e0e1dd", color: "#fff" } : {}
            }
        >
            <ul className="nav-links">
                <li>
                    <a
                        href="https://www.rockstargames.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={rockstarLogo}
                            alt="ROCKSTAR_LOGO"
                            className="rock"
                            draggable="false"
                        ></img>
                    </a>
                </li>
                <li>
                    <h1 style={darkMode ? { color: "#000814" } : {}}>
                        GTA Triology cheat codes
                    </h1>
                </li>
                <li>
                    <img
                        src={logoSrc}
                        alt="VINNY_LOGO"
                        className="vinny"
                        draggable="false"
                        onClick={toggleDarkMode}
                    ></img>
                </li>
            </ul>
        </nav>
    );
};

// Define props for Navbar component
Navbar.propTypes = {
    darkMode: propTypes.bool.isRequired,
    toggleDarkMode: propTypes.func.isRequired,
};

// Export Navbar component
export default Navbar;
