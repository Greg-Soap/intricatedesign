import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import MainPage from "../pages/MainPage";

// Define the navigation configuration for the application
const NavConfig = () => {
  // Return the route configuration
  return (
    <Routes>
      {/* The root route renders the App component */}
      <Route path="/" element={<App />}>
        {/* The main route renders the MainPage component */}
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes>
  );
};

// Export the NavConfig component
export default NavConfig;
