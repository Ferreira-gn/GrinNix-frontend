import type React from "react";
import { Route } from "react-router";
import { Routes } from "react-router";
import Home from "../Pages/Home";

const RouterProvider: React.FC = () => {
  return (
    <Routes>
      <Route path="/home" Component={Home} />
    </Routes>
  );
};

export default RouterProvider;
