import {
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiMui,
  SiNextdotjs,
  SiHeroku,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiFigma,
  SiNpm,
} from "react-icons/si";

const Skills = () => {
  const grp = `group neumorphism-glass`;
  const icon = `dark:text-[#ffffff] text-[#000000] ease-in-out duration-10000 w-12 h-12 sm:w-10 sm:h-10`;
  const name = `invisible md:hidden group-hover:visible group-hover:md:block ease-in-out duration-200`;

  const skills = [
    { icon: <SiHtml5 className={icon} />, name: "HTML" },
    { icon: <SiCss3 className={icon} />, name: "CSS" },
    { icon: <SiJavascript className={icon} />, name: "Javascript" },
    { icon: <SiReact className={icon} />, name: "React" },
    { icon: <SiNodedotjs className={icon} />, name: "Node" },
    { icon: <SiMongodb className={icon} />, name: "MongoDB" },
    { icon: <SiFirebase className={icon} />, name: "Firebase" },
    { icon: <SiTailwindcss className={icon} />, name: "Tailwind" },
    { icon: <SiMui className={icon} />, name: "MaterialUI" },
    { icon: <SiNpm className={icon} />, name: "NPM" },
    { icon: <SiGit className={icon} />, name: "GIT" },
    { icon: <SiGithub className={icon} />, name: "Github" },
    { icon: <SiFigma className={icon} />, name: "Figma" },
    { icon: <SiNextdotjs className={icon} />, name: "Next" },
    { icon: <SiHeroku className={icon} />, name: "Heroku" },
    { icon: <SiTypescript className={icon} />, name: "Typescript" },
  ];

  return (
    <div id="skills" className="w-full md:h-screen p-2 py-16">
      <div className="max-w-[1240px] m-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I can do</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-8 place-items-center">
          {skills.map((skill, index) => (
            <div key={index} className={`${grp} w-28 h-28`}>
              <div className="purple-circle"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              <div className={`${grp} w-24 h-24`}>{skill.icon}</div>
              {/* <div className="absolute w-full h-full bg-red-500 opacity-80 z-10 transform transition-transform duration-500 ease-in-out group-hover:-translate-x-full">
                  <div className="absolute w-3 h-1/2 bg-red-900 rounded-l-xl top-1/4 right-0 z-20"></div>
                </div> */}
              {/* <h6 className={name}>{skill.name}</h6> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
