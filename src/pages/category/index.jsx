import { NavLink } from "react-router-dom"
// import data 
import { dataDirection } from "../../../data/data"
// import framer-motion 
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Category = () => {
  const { ref: h1Ref, inView: h1InView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: pRef, inView: pInView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: buttonRef, inView: buttonInView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div id="info" className="bg-white my-12 mt-20">
      <div className="container grid grid-cols-2 max-md:grid-cols-1 gap-10 max-md:gap-10 py-10">
        {
            dataDirection.map((item) => (
                <div key={item.id} className="bg-white shadow rounded-lg p-8 hover:scale-105 transition-all duration-500 relative">
                    <motion.h1 
                        className="text-3xl font-medium"
                        ref={h1Ref}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: h1InView ? 1 : 0, y: h1InView ? 0 : 20 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        {item.name}
                    </motion.h1>
                    <motion.p 
                        className="text-xl py-4"
                        ref={pRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: pInView ? 1 : 0, y: pInView ? 0 : 20 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                    >
                        {item.description}
                    </motion.p>
                    <motion.div 
                        className="w-full flex justify-start"
                        ref={buttonRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: buttonInView ? 1 : 0, y: buttonInView ? 0 : 20 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
                    >
                      <NavLink to={`${item.link}`} className="bg-green-500 font-medium text-white text-md uppercase rounded-lg px-10 py-2">Boshlash</NavLink>
                    </motion.div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Category;