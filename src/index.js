// Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Import CSS file
import "./index.css";

// Import App component
import App from "./App";

// Create a root element using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component inside the root element
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
