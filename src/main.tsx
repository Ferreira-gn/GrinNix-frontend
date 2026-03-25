import "./Styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import RouterProvider from "./Routes/RouterProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <RouterProvider />
    </BrowserRouter>
  </StrictMode>,
);
