import { motion } from "framer-motion";
import { skills } from "../../public/data/data";
import fadeIn from "./FadeIn";

const Skills = () => {
  return (
    <section className="flex flex-col items-center mb-20">
      <p className="font-serif text-[18px] text-gray-800 mb-5">What I offer</p>
      <h2 className="font-serif text-5xl text-gray-950 mb-15">My Skills</h2>

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
