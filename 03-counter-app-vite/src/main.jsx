import React from "react";
import reactDom from "react-dom/client";
import { HelloWorldApp } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
import "./styles.css";

reactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HelloWorldApp /> */}
    <FirstApp title="Hola, Soy Goku" subTitle={123} />
  </React.StrictMode>
);
