import "./styles.css";
import Header from "./Componants/SharedComponant/Header";
import Footer from "./Componants/SharedComponant/Footer";
import HomeComponant from "./Componants/HomeComponant";
export default function App() {
  return (
    
    <div className="container">
      <Header />
      <HomeComponant />
      <Footer />
    </div>
  );
}
