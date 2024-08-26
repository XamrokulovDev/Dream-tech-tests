// import image 
import laptop from "../../assets/laptop.png"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const About = () => {
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div id="about" className="container flex justify-between items-center gap-5 max-md:flex-col max-md:gap-10 my-10">
        <motion.div 
            className="w-[50%] max-md:w-full"
            ref={imageRef}
            initial={{ opacity: 0, x: -100 }}  // Chapdan o'ngga
            animate={{ opacity: imageInView ? 1 : 0, x: imageInView ? 0 : -100 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <img src={laptop} alt="Laptop" className="w-full"/>
        </motion.div>
        <motion.div 
            className="w-[50%] max-md:w-full"
            ref={textRef}
            initial={{ opacity: 0, x: 100 }}  // O'ngdan chapga
            animate={{ opacity: textInView ? 1 : 0, x: textInView ? 0 : 100 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-bold text-4xl">Bilimlaringizni Sinab Ko'ring va Yangi Yutuqlarga Erishing!</h1>
          <p className="text-md py-5">Testlarimiz interaktiv va qiziqarli tarzda tuzilgan bo'lib, sizga o'zingizning darajangizni aniqlashga yordam beradi. Savollarga javob berib, siz dasturlash sohasidagi bilimlaringizni mustahkamlashingiz va yangi narsalarni o'rganishingiz mumkin. Har bir savolga javob berganingizdan so'ng, to'g'ri yoki noto'g'ri javob berganingizni bilib olasiz va natijada o'z bilimlaringizni yaxshilash imkoniyatiga ega bo'lasiz.</p>
        </motion.div>
    </div>
  )
}

export default About;