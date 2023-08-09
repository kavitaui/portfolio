
import { useLocation } from "react-router-dom";
import Contact from "../Contact";
import HomeComponant from "../HomeComponant";
import Projects from "../Projects";
import Resume from "../Resume";
import App from "../../App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function RoutesWithAnimation() {
    const location = useLocation();

    return (
        <Routes location={location} key={location.key}>
            <Route path="/" element={<App />}>
                <Route path="home" element={<HomeComponant />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
                <Route path="Resume" element={<Resume />} />
                <Route path="/" element={<Navigate to="/home" replace />} />
            </Route>
        </Routes>
    );
}

export default RoutesWithAnimation;