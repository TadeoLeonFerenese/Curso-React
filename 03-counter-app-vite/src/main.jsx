import React from "react";
import reactDom from "react-dom/client";
import { HelloWorldApp } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";

reactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelloWorldApp />
    <FirstApp />
  </React.StrictMode>
);
