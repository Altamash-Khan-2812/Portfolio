import { motion } from "framer-motion";
import { skills } from "../../public/data/data";
import fadeIn from "./FadeIn";

const Skills = () => {
  return (
    <section className="flex flex-col items-center mb-24">
      <motion.p
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        className="font-serif text-gray-900 text-[18px] mb-4"
      >
        What I offer
      </motion.p>
      <motion.h2
        className="text-5xl font-serif text-gray-950 mb-12"
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-4 gap-x-[12vw] gap-y-18">
        {skills.map((skill, i) => {
          return (
            <div className="flex flex-col items-center gap-2" key={i}>
              <motion.img
                src={skill.src}
                alt={skill.name}
                className="w-[100px] h-[100px]"
                variants={fadeIn("down")}
                initial="hidden"
                whileInView="show"
              ></motion.img>
              {/* <img src={skill.src} alt={skill.name} className="w-[100px] h-[100px]" /> */}
              <p className="font-semibold text-[20px] text-gray-950">
                {skill.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
