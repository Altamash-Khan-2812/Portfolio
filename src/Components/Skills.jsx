import { motion } from "framer-motion";
import { skills } from "../../public/data/data";
import fadeIn from "./FadeIn";
import Heading from "./Heading";

const Skills = () => {
  return (
    <section
      className="flex flex-col items-center mb-24 scroll-mt-[140px] px-10"
      id="skills"
    >
      {/* <motion.p
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        className="font-serif text-gray-900 text-[18px] mb-4 dark:text-white"
      >
        What I offer
      </motion.p>
      <motion.h2
        className="text-5xl font-serif text-gray-950 mb-12 dark:text-white"
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
      >
        My Skills
      </motion.h2> */}
      <Heading heading="My Skills" subheading=" What I offer"/>


      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-16 sm:gap-x-20 md:gap-x-[12vw] py-6 sm:py-8 md:py-10 px-14 sm:px-10 md:px-28 rounded-lg gap-y-8 sm:gap-y-12 md:gap-y-18 dark:bg-[#2a004a]">
        {skills.map((skill, i) => (
          <div className="flex flex-col items-center gap-2" key={i}>
            <motion.img
              src={skill.src}
              alt={skill.name}
              className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]"
              variants={fadeIn("down")}
              initial="hidden"
              whileInView="show"
            />
            <p className="font-semibold text-[12px] sm:text-[14px] md:text-[18px] lg:text-[20px] text-gray-950 dark:text-white">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
