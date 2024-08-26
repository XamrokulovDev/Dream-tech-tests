import { useState } from "react";
import { NavLink } from "react-router-dom";
// import framer-motion
import { motion } from "framer-motion";
// import hamburger-react
import { Spin as Hamburger } from 'hamburger-react'
// import image 
import logo from "../../assets/logo.png"

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const linkAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-40 bg-black max-lg:hidden py-4">
        <div className="container flex justify-between items-center">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={textAnimation}
            whileHover={{ scale: 1.01 }} 
            whileTap={{ scale: 1 }}
          >
            <NavLink to={"/"} className="flex items-center gap-1">
              <img src={logo} alt="" className="w-12"/>
              <h1 className="text-lg text-white font-medium uppercase">dream tech test</h1>
            </NavLink>
          </motion.div>
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={textAnimation}
            whileHover={{ scale: 1 }} 
            whileTap={{ scale: 1 }}
          >
            <ul className="flex items-center gap-5">
              <li>
                <motion.a
                  href="#home"
                  className="text-sm text-[#FFF] font-medium uppercase"
                  initial="hidden"
                  animate="visible"
                  variants={linkAnimation}
                  whileHover={{ scale: 1.1, color: "#4CAF50" }} // Green color on hover
                >
                  Bosh sahifa
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#about"
                  className="text-sm text-[#FFF] font-medium uppercase"
                  initial="hidden"
                  animate="visible"
                  variants={linkAnimation}
                  whileHover={{ scale: 1.1, color: "#4CAF50" }} // Green color on hover
                >
                  Biz haqimizda
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#info"
                  className="text-sm text-[#FFF] font-medium uppercase"
                  initial="hidden"
                  animate="visible"
                  variants={linkAnimation}
                  whileHover={{ scale: 1.1, color: "#4CAF50" }} // Green color on hover
                >
                  Kategoriya
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#contact"
                  className="text-sm text-[#FFF] font-medium uppercase"
                  initial="hidden"
                  animate="visible"
                  variants={linkAnimation}
                  whileHover={{ scale: 1.1, color: "#4CAF50" }} // Green color on hover
                >
                  Bog'lanish
                </motion.a>
              </li>
              <li>
                <motion.div 
                  initial="hidden" 
                  animate="visible" 
                  variants={textAnimation}
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 1 }}
                >
                  <NavLink
                    to={"/login"}
                    className="transition-all duration-500 text-md text-black bg-white font-medium rounded-lg uppercase px-6 py-2 ml-3"
                  >
                    Kirish
                  </NavLink>  
                </motion.div>
              </li>
            </ul>
          </motion.div>
        </div>
      </nav>
      <nav className="w-full bg-black max-lg:block hidden py-3 fixed left-0 top-0 z-50">
        <div className="container flex justify-between items-center">
            <NavLink to={"/"} className="flex items-center gap-1">
              <img src={logo} alt="" className="w-12"/>
              <h1 className="text-lg text-white font-medium uppercase">dream tech test</h1>
            </NavLink>
          <ul className={`bg-black w-full flex flex-col gap-5 absolute top-full z-[99] py-4 transition-all duration-500 ${isOpen ? "right-0" : "right-[-100%]"}`}>
            <li className="w-full flex justify-center text-md text-white uppercase">
              <motion.a
                href="#home"
                className="text-sm"
                initial="hidden"
                animate="visible"
                variants={linkAnimation}
                whileHover={{ scale: 1.1, color: "#4CAF50" }} // Green color on hover
              >
                Bosh sahifa
              </motion.a>
            </li>
            <li className="w-full flex justify-center text-md text-white uppercase">
              <motion.a
                href="#about"
                className="text-sm"
                initial="hidden"
                animate="visible"
                variants={linkAnimation}
                whileHover={{ scale: 1.1, color: "#4CAF50" }} // Green color on hover
              >
                Biz haqimizda
              </motion.a>
            </li>
            <li className="w-full flex justify-center text-md text-white uppercase">
              <motion.a
                href="#info"
                className="text-sm"
                initial="hidden"
                animate="visible"
                variants={linkAnimation}
                whileHover={{ scale: 1.1, color: "#4CAF50" }} // Green color on hover
              >
                Kategoriya
              </motion.a>
            </li>
            <li className="w-full flex justify-center text-md text-white uppercase">
              <motion.a
                href="#contact"
                className="text-sm"
                initial="hidden"
                animate="visible"
                variants={linkAnimation}
                whileHover={{ scale: 1.1, color: "#4CAF50" }}
              >
                Bog'lanish
              </motion.a>
            </li>
            <li className="w-full flex justify-center text-md text-white uppercase">
              <motion.div
                className="text-sm"
                initial="hidden"
                animate="visible"
                variants={linkAnimation}
                whileHover={{ scale: 1.1, color: "#4CAF50" }}
              >
                <NavLink to={"/login"}>
                  Kirish
                </NavLink>
              </motion.div>
            </li>
          </ul>
          <div className="text-gray-400">
            <Hamburger toggled={isOpen} toggle={setOpen}/>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;