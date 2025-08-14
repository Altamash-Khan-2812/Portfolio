import { motion } from "framer-motion";
import fadeIn from "./FadeIn";
import download_logo from "../images/download_icon.webp";
import right_arrow from "../images/right_arrow_white.webp";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-[100vh] px-4 mb-[100px] md:mb-0">
      <motion.h1
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        className="text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl md:font-bold :
        mb-3 md:mb-6 text-gray-950 dark:text-white"
      >
        Khan Altamash
      </motion.h1>

      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        className="text-lg sm:text-2xl mb-10 text-gray-900 dark:text-white"
      >
        Frontend Engineer
      </motion.h2>

      <motion.p
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        className="max-w-2xl text-base md:text-[18px] mb-8 text-center text-gray-800 font-serif leading-[30px] dark:text-white"
      >
        I'm a Frontend Engineer with almost 2.5 years of experience,
        specialising in React, Next.js, JavaScript and other Web technologies.
      </motion.p>

      <div className="flex flex-col md:flex-row gap-4">
        <motion.a
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          href="#contacts"
          className="px-8 py-3 bg-black text-white rounded-full flex items-center gap-3 dark:bg-transparent dark:border "
        >
          Contact me <img src={right_arrow} className="w-4 h-3" />
        </motion.a>
        <motion.button
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          className="px-10 py-4 border border-black rounded-full dark:bg-white"
        >
          <a
            href="#"
            aria-label="Download resume"
            className="flex gap-3 rounded-full bg-white "
          >
            My Resume <img src={download_logo} className="h-5 w-5" />
          </a>
        </motion.button>
      </div>
    </section>
  );
}
