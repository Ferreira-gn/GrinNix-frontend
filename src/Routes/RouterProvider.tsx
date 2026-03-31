import type React from "react";
import { Route } from "react-router";
import { Routes } from "react-router";
import Home from "../Pages/Home";
import Solution from "../Pages/Solution";

const RouterProvider: React.FC = () => {
  return (
    <Routes>
      <Route path="/home" Component={Home} />
      <Route path="/solutions" Component={Solution} />
    </Routes>
  );
};

export default RouterProvider;
