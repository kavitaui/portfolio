import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import RoutesWithAnimation from "./Componants/SharedComponant/RoutesWithAnimation";
import LocationProvider from "./Componants/SharedComponant/LocationProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <LocationProvider>
      <RoutesWithAnimation />
    </LocationProvider>
  </BrowserRouter>
);

