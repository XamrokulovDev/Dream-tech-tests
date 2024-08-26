// import hooks
import { useEffect } from "react";
// import icons 
import { SlBookOpen } from "react-icons/sl";
// import data 
import { data } from "../../../data/data";
// import Framer Motion
import { motion } from "framer-motion";

const Frontend = () => {
  useEffect(() => {
    // Sahifa yuqoriga skroll qilish
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container grid grid-cols-3 max-md:grid-cols-1 gap-10 mt-44 my-20 z-40">
      {
        data?.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col items-center justify-between gap-2 status_shadow py-5 px-8 rounded-2xl ${ item.status === true ? 'translate-y-[-10px] scale-y-105' : ''}`}
          >
            <SlBookOpen className="text-4xl text-green-500"/>
            <h1 className="font-bold text-2xl uppercase py-3">{item.name}</h1>
            <p className="text-xl font-medium flex items-center gap-1">
              <p>Holati:</p>
              {item.status === true ? "bepul" : "50 ming so'm"}
            </p>
            <p className="text-center text-sm">
              {item.description}
            </p>
            <div className="w-full flex justify-center">
              <motion.button
                className={`w-[80%] text-sm py-2.5 font-medium uppercase rounded-3xl mt-3 ${item.status === true ? "bg-black text-white" : "bg-green-500 text-black"}`}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {item.status === true ? "Boshlash" : "Sotib olish"}
              </motion.button>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Frontend;