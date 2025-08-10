import { motion } from "framer-motion";
import fadeIn from "./FadeIn";
import { fadeWithNoSize } from "./FadeIn";
import right_arrow from "../images/right_arrow_white.webp";
import mail_icon from "../images/mail_icon.webp";

const Contact = () => {
  return (
    <section className="flex flex-col items-center mb-8 border-b border-gray-300 mx-30 pb-15 scroll-mt-[140px]" id="contacts">
      <motion.p
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        className="font-serif text-gray-900 text-[18px] mb-4"
      >
        Connect with me
      </motion.p>
      <motion.h2
        className="text-5xl font-serif text-gray-950 mb-12"
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
      >
        Get in touch
      </motion.h2>

      <motion.p
        variants={fadeWithNoSize()}
        initial="hidden"
        whileInView="show"
        className=" text-center leading-[30px] mb-10"
      >
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </motion.p>

      <form className="flex flex-col justify-center mb-28 w-2xl">
        <div className="flex gap-5 w-full mb-5">
          <motion.input
            type="text"
            placeholder="Enter your name"
            className="flex-1 border outline-none p-3 font-semibold  border-gray-400 rounded-md placeholder:font-semibold"
            variants={fadeIn("right", 0, 80)}
            initial="hidden"
            whileInView="show"
          ></motion.input>
          <motion.input
            type="text"
            placeholder="Enter your email"
            className="flex-1 border outline-none font-semibold border-gray-400 p-3 rounded-md placeholder:font-semibold"
            variants={fadeIn("left", 0, 80)}
            initial="hidden"
            whileInView="show"
          ></motion.input>
        </div>

        <motion.textarea
          className="w-full h-60 border outline-none p-3 font-semibold border-gray-400 rounded-md placeholder:font-semibold mb-8"
          placeholder="Enter your message"
          variants={fadeIn("up", 0, 60)}
          initial="hidden"
          whileInView="show"
        ></motion.textarea>

        <button className="bg-black self-center text-white flex items-center gap-2 py-4 px-8 rounded-full">
          Submit <img src={right_arrow} className="w-4 h-3" />
        </button>
      </form>

      <div className="flex items-center gap-2">
        <img src={mail_icon} className="w-6 h-5" />{" "}
        <span className="text-gray-900 font-medium">
          altamashkhn281@gmail.com
        </span>
      </div>
    </section>
  );
};

export default Contact;
