// Importing React and useState from the react package
import React, { useState } from "react";

// Importing the CSS file for the App component
import "./App.css";

// Importing components
import Navbar from "./components/Navbar";
import Button from "./components/Button";

// Defining the App component
const App = () => {
    // Defining the state for the dark mode
    const [darkMode, setDarkMode] = useState(false);

    // Function to toggle the dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Returning the JSX element
    return (
        <div
            className="App"
            style={
                darkMode
                    ? {
                          backgroundColor: "#fff",
                          color: "#fff",
                          transition: "background-color 0.3s ease",
                      }
                    : {
                          transition: "background-color 0.3s ease",
                      }
            }
        >
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Button darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
    );
};

// Exporting the App component as the default export
export default App;
