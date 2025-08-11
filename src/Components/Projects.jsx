import { motion } from "framer-motion";
import fadeIn from "./FadeIn";
import { projects } from "../../public/data/data";

const Projects = () => {
  return (
    <section className="flex flex-col items-center mb-28 font-[inter] scroll-mt-[140px] dark:text-white" id="projects">
      <motion.p
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        className="font-serif text-gray-900 text-[18px] mb-4 dark:text-white"
      >
        What I Have Created
      </motion.p>
      <motion.h2
        className="text-5xl font-serif text-gray-950 mb-12 dark:text-white"
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
      >
        My Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10 mx-5 lg:mx-[15vw]">
        {projects.map((project, i) => {
          return <ProjectCard project={project} key={i} />;
        })}
      </div>
    </section>
  );
};

const ProjectCard = (props) => {
  const { company, role, projectName, projectSummary, techStack } =
    props.project;

  return (
    <div className="border-1 border-gray-400 rounded-md px-2 md:px-8 py-6 hover:cursor-pointer hover:bg-[#fffbf5] hover:shadow-lg dark:hover:bg-[#2A004A] hover:scale-[1.0001] transition-all duration-200">
      <p className="text-gray-600 text-[12px] mb-2 dark:text-[#FFFFFFCC]">
        {company} | {role}
      </p>
      <p className="text-xl text-gray-700 font-medium mb-3 dark:text-white">{projectName}</p>
      <p className="text-sm text-gray-600 leading-5 mb-5 dark:text-[#FFFFFFCC]">{projectSummary}</p>
      <p className="text-lg font-semibold">Techstack: {techStack}</p>
    </div>
  );
};

export default Projects;
