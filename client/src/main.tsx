import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
/* import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic' */

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  /*   <AlertProvider template={AlertTemplate} {...options}></AlertProvider> */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
