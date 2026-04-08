import type React from "react";
import { Route } from "react-router";
import { Routes } from "react-router";
import Home from "../Pages/Home";
import Solution from "../Pages/Solution";
import ProblemProvider from "../context/providers/QuestionProvider";

const RouterProvider: React.FC = () => {
  return (
    <ProblemProvider>
      <Routes>
        <Route path="/Challenges" Component={Home} />
        <Route path="/solutions" Component={Solution} />
      </Routes>
    </ProblemProvider>
  );
};

export default RouterProvider;
