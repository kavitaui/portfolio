import "./styles.css";
import Header from "./Componants/SharedComponant/Header";
import Footer from "./Componants/SharedComponant/Footer";
import Contact from "./Componants/Contact";
import HomeComponant from "./Componants/HomeComponant";
import Projects from "./Componants/Projects";
import Resume from "./Componants/Resume";
export default function App() {
  return (
    <div className="App">
      
    
      <Header/>
      <Footer/>
      <HomeComponant/>
<Projects/>
<Resume/>
      <Contact/>
    </div>
  );
}
