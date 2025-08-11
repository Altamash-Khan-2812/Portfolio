import { experienceData } from "../../public/data/data";
import { motion } from "framer-motion";
import fadeIn, { fadeWithNoSize } from "./FadeIn";

const About = () => {
  return (
    <>
      <section className="flex flex-col items-center mb-24 scroll-mt-[140px] dark:text-white" id="about">
        <motion.p
          variants={fadeIn("down", 0)}
          initial="hidden"
          whileInView="show"
          className="font-serif text-gray-900 text-[18px] mb-2 md:mb-5 dark:text-white"
        >
          Introduction
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl font-serif text-gray-950 mb-15 dark:text-white"
          variants={fadeIn("down", 0)}
          initial="hidden"
          whileInView="show"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col justify-between items-center md:flex-row gap-20 md:gap-64 mb-18">
          <motion.div
            variants={fadeWithNoSize()}
            initial="hidden"
            whileInView="show"
            className="flex flex-col items-center"
          >
            <p className="text-5xl text-blue-600 font-bold">2.5</p>
            <p className="text-[18px]">Years of Experience</p>
          </motion.div>
          <motion.div
            variants={fadeWithNoSize()}
            initial="hidden"
            whileInView="show"
            className="flex flex-col items-center"
          >
            <p className="text-5xl text-green-600 font-bold">15+</p>
            <p className="text-[18px]">Projects Completed</p>
          </motion.div>
          <motion.div
            variants={fadeWithNoSize()}
            initial="hidden"
            whileInView="show"
          >
            <p className="text-5xl text-purple-600 font-bold">10+</p>
            <p className="text-[18px]">Skills Mastered</p>
          </motion.div>
        </div>
        <p className="text-3xl font-serif text-gray-800 mb-8 dark:text-white">
          Career Highlights
        </p>

        <div className="w-full max-w-6xl mx-auto px-5">
          <div className="border-l-3 border-gray-400 pl-10 flex flex-col gap-10 mb-14">
            {experienceData.map((exp, i) => {
              return (
                <ExperienceCard
                  key={i}
                  company={exp.componanyName}
                  description={exp.description}
                  color={exp.color}
                />
              );
            })}
          </div>
          <div className="bg-gray-200 py-8 rounded-2xl dark:bg-gray-800">
            <p className="text-center mb-3 text-md md:text-xl">
              "Readable code is reliable code."
            </p>
            <p className="text-sm md:text-lg text-center text-gray-800 dark:text-[#bbb]">
              How I Think About Code
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

const ExperienceCard = ({ company, description, color }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0, 60)}
      initial="hidden"
      whileInView="show"
      className="flex flex-col gap-2"
    >
      <div className="flex items-center gap-4">
        <div className={`w-4 h-4 ${color} rounded-full`}></div>{" "}
        <p className="md:text-[24px] font-bold">{company}</p>
      </div>
      <p className="text-[14px] md:ml-9 leading-[30px] md:text-[18px]">{description}</p>
    </motion.div>
  );
};

export default About;
