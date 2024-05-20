import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Dashboard from "./pages/dashboard";
import AdminRoutes from "./routes"; // Assuming routes.js is in src/routes

const App = () => {
  return (
    <BrowserRouter>
      <AdminRoutes />
    </BrowserRouter>
  );
};

export default App;
