import image from "../Asset/image/nicolRider.jpg"
import { motion } from "framer-motion";
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
            <div className="col-1 px-2 py-2"></div>
            <div className="col-11 px-2 py-2">

              <div className="row" >
                <div className="col-6 px-2 py-2">
                 <motion.span  variants={childVariants} initial="initial" animate="final"><img className="pic" src={image} /></motion.span>
                </div>
                <div className="col-6 px-2 py-2 pt-5"><motion.span  variants={childVariants} initial="initial" animate="final" className="h1">Hello</motion.span>
                  <motion.div   variants={childVariants} initial="initial" animate="final"><span>A Bit About Me </span> </motion.div>
                  <motion.div  variants={childVariants} initial="initial" animate="final"> <div className="font">I'm a paragraph. Click here to add your own text and edit me.I'm a great place for
                    you to tell a story and let your users to know a little more about you.</div></motion.div>
                  <motion.button  initial={{ opacity: 0, y: "50px" }} animate={{ opacity: 1, y: ".2px" }} transition={{ duration: .5, delay: .5, }} className="resume mt-5">Resume</motion.button>
                  <motion.button  initial={{ opacity: 0, y: "52px" }} animate={{ opacity: 1, y: ".3px" }} transition={{ duration: .75, delay: .8, }} className="projects mx-2" >projects</motion.button>
                  <motion.button  initial={{ opacity: 0, y: "54px" }} animate={{ opacity: 1, y: ".4px" }} transition={{ duration: 1, delay: 1, }} className="contact" >contact</motion.button></div>

              </div>
            </div>
          </div>

          <div className="col-1 px-2 py-2"></div>
        </div>
      </div>

    </motion.div>

  );
}