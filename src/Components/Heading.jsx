import { motion } from "framer-motion";
import fadeIn from "./FadeIn";

const Heading = ({heading, subheading}) => {
  return (
    <>
      <motion.p
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        className="font-serif text-gray-900 text-[18px] mb-2 md:mb-5 dark:text-white"
      >
        {subheading}
      </motion.p>
      <motion.h2
        className="text-4xl md:text-5xl font-serif text-gray-950 mb-15 dark:text-white"
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
      >
        {heading}
      </motion.h2>
    </>
  );
};

export default Heading