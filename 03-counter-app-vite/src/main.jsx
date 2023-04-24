import React from "react";
import reactDom from "react-dom/client";
import { HelloWorldApp } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
import "./styles.css";
import { CounterApp } from "./CounterApp";

reactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HelloWorldApp /> */}
    <FirstApp title="Hola, soy Goku" subTitle={123123} />
    <CounterApp value={3640} />
  </React.StrictMode>
);
