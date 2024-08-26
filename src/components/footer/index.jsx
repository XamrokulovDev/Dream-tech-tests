import { NavLink } from "react-router-dom";
// import icons 
import { BsTelegram } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
// import framer-motion
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
// import image 
import logo from "../../assets/logo.png"

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation every time the element is in view
    threshold: 0.1, // Percentage of the element that must be visible
  });

  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer id="contact" className="bg-black">
      <motion.div 
        className="container flex items-start justify-between max-md:flex-col max-md:gap-3 py-10"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="flex flex-col gap-8" variants={itemVariants}>
          <NavLink to={"/"} className="flex items-center gap-1">
              <img src={logo} alt="" className="w-12"/>
              <h1 className="text-lg text-white font-medium uppercase">dream tech test</h1>
          </NavLink>
          <div className="flex items-center gap-3">
            <a href="https://t.me/Ulfatjon19" target="_blank" rel="noopener noreferrer">
              <BsTelegram className="text-white text-xl"/>
            </a>
            <a href="https://instagram.com/ulfatjon.online" target="_blank" rel="noopener noreferrer">
              <RiInstagramFill className="text-white text-2xl"/>
            </a>
            <a href="mailto:frontenduchun@gmail.com">
              <MdEmail className="text-white text-2xl"/>
            </a>
          </div>
        </motion.div>
        <motion.ul className="flex flex-col gap-3 mt-2" variants={itemVariants}>
          <li className="text-white font-normal">
            <a href="#home" className="text-md">Bosh sahifa</a>
          </li>
          <li className="text-white font-normal">
            <a href="#about" className="text-md">Biz haqimizda</a>
          </li>
          <li className="text-white font-normal">
            <a href="#info">Testdan O'tish</a>
          </li>
          <li className="text-white font-normal">
            <NavLink to={"/payment"}>To'lov tizimi</NavLink>
          </li>
        </motion.ul>
        <motion.div className="flex flex-col gap-3 mt-2" variants={itemVariants}>
          <p className="text-white text-md">Tel: +998 (90) 030 24 23</p>
          <p className="text-white text-md">frontenduchun@gmail.com</p>
          <p className="text-white text-md flex items-center gap-1">
            <IoLocationSharp className="text-lg"/>
            <p>Tashkent, chilonzor</p>
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;