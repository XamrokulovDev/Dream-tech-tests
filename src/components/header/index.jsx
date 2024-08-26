import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Header = () => {
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: paragraphRef, inView: paragraphInView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: buttonRef, inView: buttonInView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <header id="home" className="w-screen h-screen bg-black flex items-center justify-center md:pt-10">
      <div className="container text-center flex flex-col gap-5 xl:px-20">
        <motion.h1
          className="text-white text-7xl max-sm:text-5xl font-bold"
          ref={titleRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : -50 }}
          transition={{ duration: 0.8 }}
        >
          Frontend va Backend Bilimlaringizni Sinang!
        </motion.h1>
        <motion.p
          className="text-[#9b9b9b] font-normal text-md max-sm:text-sm"
          ref={paragraphRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: paragraphInView ? 1 : 0, y: paragraphInView ? 0 : -50 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Ushbu test dasturida sizning HTML, CSS, JavaScript va backend dasturlash tillaridagi bilimlaringiz sinovdan o'tkaziladi. Har bir savolga to'g'ri javob bering va natijalaringizni ko'ring!
        </motion.p>
        <motion.div
          className="w-full flex justify-center"
          ref={buttonRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: buttonInView ? 1 : 0, scale: buttonInView ? 1 : 0.8 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a href="#info" className="bg-green-500 text-md text-black font-semibold rounded-md px-8 py-3 mt-3 uppercase">
            Tezda Boshlash
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;