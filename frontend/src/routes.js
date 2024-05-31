import React from "react";
import { Routes, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/login"; // Replace with your login component path
import Dashboard from "./pages/dashboard"; // Replace with your dashboard component path
import { Orders } from "./pages/orders";
import { Products } from "./pages/products";
import { Logout } from "./auth/Logout";
// import Products from "./pages/Products"; // Replace with your products component path
// import ProductDetails from "./pages/ProductDetails"; // Replace with your product details component path
// import Customers from "./pages/Customers"; // Replace with your customers component path
// import Reports from "./pages/Reports"; // Replace with your reports component path

// Optional: Define a Not Found component
//import NotFound from "./pages/NotFound"; // Replace with your Not Found component path (optional)

const routes = [
  {
    path: "/",
    exact: true, // Ensures it only matches the exact path "/"
    name: "Login", // Optional name for the route
    element: <Login />,
  },
  {
    path: "/logout",
    exact: true, // Ensures it only matches the exact path "/"
    name: "Logout", // Optional name for the route
    element: <Logout />,
  },
  {
    path: "/dashboard",
    exact: true, // Ensures it only matches the exact path "/"
    name: "Dashboard", // Optional name for the route
    element: <Dashboard />,
  },
  {
    path: "/orders",
    exact: true, // Ensures it only matches the exact path "/"
    name: "Orders", // Optional name for the route
    element: <Orders />,
  },
  {
    path: "/products",
    exact: true, // Ensures it only matches the exact path "/"
    name: "Products", // Optional name for the route
    element: <Products />,
  },
  {
    path: "/customers",
    exact: true, // Ensures it only matches the exact path "/"
    name: "Orders", // Optional name for the route
    element: <Orders />,
  },
  {
    path: "/categories",
    exact: true, // Ensures it only matches the exact path "/"
    name: "Orders", // Optional name for the route
    element: <Orders />,
  },
  {
    path: "/brands",
    exact: true, // Ensures it only matches the exact path "/"
    name: "Orders", // Optional name for the route
    element: <Orders />,
  },
  {
    path: "/reports",
    exact: true, // Ensures it only matches the exact path "/"
    name: "Orders", // Optional name for the route
    element: <Orders />,
  },

  // Optional: Redirect to Not Found component for unmatched routes
  //   {
  //     path: "*",
  //     component: NotFound,
  //   },
];

export default function AdminRoutes() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Routes>
  );
}
