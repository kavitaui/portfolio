import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contact from "./Componants/Contact";
import HomeComponant from "./Componants/HomeComponant";
import Projects from "./Componants/Projects";
import Resume from "./Componants/Resume";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
          <Route path="/" element={<App />}>
          <Route path="home" element={<HomeComponant /> } />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Resume" element={<Resume />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Route>
    </Routes>
  </BrowserRouter>
);

