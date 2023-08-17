import image from "../Asset/image/nicolRider.jpg"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import content from "../Asset/content.json";
import { useEffect } from "react";
import React, {useContext} from 'react';
import MyContext from "./MyContext";
export default function HomeComponant(props) {
  const routeVariants = {
    initial: {
      y: "100vh",
    },
    final: {
      y: "0vh",
      transition: {
        type: "spring",
        mass: 0.4,
      },
    },
  };

  const childVariants = {
    initial: {
      opacity: 0,
      y: "50px",
    },
    final: {
      opacity: 1,
      y: "0px",
      transition: {
        duration: 0.5,
        delay: .5,
      },
    },
  };

  useEffect(()=>{
    console.log("Hello")
    //axios call to get json
  }, [])
  
    const contextData = useContext(MyContext);

  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="home component"
    >
      <div className="container">
        <div className="col-12">
          <div className="row">
         
            <div className="col-12 px-2 py-2">

              <div className="row" >
                <div className="col-5 px-2 py-2">
                 <motion.span  variants={childVariants} initial="initial" animate="final" class ="imgWrapper"><img className="pic" src={  contextData?.home.image.path} /></motion.span>
                </div>
                
                <div className="col-7 px-5 py-2 pt-5 "><motion.span  variants={childVariants} initial="initial" animate="final" className="h1">{contextData?.home.title}</motion.span>
                  <motion.div   variants={childVariants} initial="initial" animate="final"><h5 className="mt-4">{contextData?.home.subtitle} </h5> </motion.div>
                  <motion.div  variants={childVariants} initial="initial" animate="final"> <div className="font  my-4">{contextData?.home.description}
                  </div></motion.div>
                   {contextData?.home.buttons.map(item =>(
                    < Link to = {item.route}> <motion.button  initial={item.animate.initial} animate={item.animate.final} transition={item.animate.transition} className={item.class+ ' mt-3'} > {item.name}</motion.button></Link>
                   ))}
                   

              </div>
            </div>
          </div>

          <div className="col-1 px-2 py-2"></div>
        </div>
      </div>
      </div>

    </motion.div>

   
  );
                   }
                  