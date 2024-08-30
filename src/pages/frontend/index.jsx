// import hooks
import { useEffect, useState } from "react";
// import icons
import { SlBookOpen } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
// import data
import { data } from "../../../data/data";
// import Framer Motion
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Frontend = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Sahifa yuqoriga skroll qilish
    window.scrollTo(0, 0);
  }, []);

  const handleButtonClick = (status, e) => {
    if (status === false) {
      e.preventDefault(); // sahifaga o'tishni to'xtatish
      setShowModal(true); // to'lov modalini ko'rsatish
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      ""
    });
  };

  return (
    <>
      <div className="container grid grid-cols-3 max-md:grid-cols-1 gap-10 mt-44 my-20 z-40">
        {data?.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col items-center justify-between gap-2 status_shadow py-5 px-8 rounded-2xl ${
              item.status === true ? "translate-y-[-10px] scale-y-105" : ""
            }`}
          >
            <SlBookOpen className="text-4xl text-green-500" />
            <h1 className="font-bold text-2xl uppercase py-3">{item.name}</h1>
            <p className="text-xl font-medium flex items-center gap-1">
              <span>Holati:</span>
              {item.status === true ? "bepul" : "50 ming so'm"}
            </p>
            <p className="text-center text-sm">{item.description}</p>
            <div className="w-full flex justify-center">
              <motion.button
                className={`w-[80%] text-sm py-2.5 font-medium uppercase rounded-3xl mt-3 ${
                  item.status === true
                    ? "bg-black text-white"
                    : "bg-green-500 text-black"
                }`}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <NavLink
                  to={`${item.name}`}
                  onClick={(e) => handleButtonClick(item.status, e)}
                >
                  {item.status === true ? "Boshlash" : "Sotib olish"}
                </NavLink>
              </motion.button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="w-screen h-screen bg-white fixed top-0 left-0 z-50 flex items-center justify-center max-sm:px-5">
          <div className="bg-white shadow-lg border w-[500px] max-sm:w-full rounded-lg max-sm:rounded-md p-5 px-10 max-sm:p-5 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 bg-red-500 text-white p-1 rounded"
            >
              <IoClose className="text-lg" />
            </button>
            <h2 className="text-xl max-sm:text-md text-center mt-5">
              To'lovni amalga oshirish
            </h2>
            <p className="text-md my-4">
              To'lovni amalga oshirish uchun bizning adminlarimizga murojaat qiling yaqin soatlar ichida to'ldirib berishadi.
            </p>
            <p className="my-4"><strong className="text-md">Eslatma!</strong> Kod berilishi bilan kodni 2 soat ichida kiriting aks holda yaroqsiz holga keladi.</p>
            <div className="flex flex-col gap-1">
              <p className="text-lg max-sm:text-sm flex items-center gap-1">
                Telegram: <span className="text-sm">@Ulfatjon19</span>
                <MdContentCopy
                  className="cursor-pointer text-gray-500 ml-1 mt-0.5"
                  onClick={() => copyToClipboard("@Ulfatjon19")}
                />
              </p>
              <p className="text-lg max-sm:text-sm flex items-center gap-1">
                Telefon: <span className="text-sm">+998900302423</span>
                <MdContentCopy
                  className="cursor-pointer text-gray-500 ml-1 mt-0.5"
                  onClick={() => copyToClipboard("+998900302423")}
                />
              </p>
            </div>
            <div className="mt-5 relative">
              <input type="text" placeholder="Kodni kiritish!" className="w-full outline-none shadow-md border rounded-md px-3 py-2"/>
              <button></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Frontend;