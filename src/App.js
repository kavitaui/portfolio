import "./styles.css";
import Header from "./Componants/SharedComponant/Header";
import Footer from "./Componants/SharedComponant/Footer";
import HomeComponant from "./Componants/HomeComponant";
import axios from "axios";
import { useState, useEffect } from "react";
import { Outlet } from 'react-router-dom';
import MyContext from "./Componants/MyContext";
import { useParams } from 'react-router-dom';

export default function App() {
  const [fname, setFname] = useState('Kavita Pandey');
  const [lname, setLname] = useState('hello');
  const [jsonData, setJsonData] = useState();
  const { name } = useParams();
  const clickMe = function (name) {
    alert("click me");
    setFname(name);

  }
  const clickMe2 = function (name) {
    alert("click me");

    setLname(name);
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const manoj = "https://json.extendsclass.com/bin/70dd1ab76fab";
        const kavita = 'https://json.extendsclass.com/bin/4eab6074ad22';

        const response = await axios.get(name === "manoj"?manoj:kavita);
        setJsonData(response.data);
        console.log(jsonData);
      }

      catch (error) {
        console.error('error fetching JSON:error')
      }
    }
    fetchData();

  }, [])


  return (

    <div className="container-fluid">
      <MyContext.Provider value={jsonData}>
        <Header value={fname} message={clickMe} />
        <Outlet />
        <Footer />
      </MyContext.Provider>

    </div>
  );
}
