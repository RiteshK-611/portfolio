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

import * as icons from 'simple-icons';

const Skills = () => {
  const grp = `group neumorphism-glass`;
  const icon = `dark:text-[#ffffff] text-[#000000] ease-in-out duration-10000 w-12 h-12 sm:w-10 sm:h-10`;
  const name = `invisible md:hidden group-hover:visible group-hover:md:block ease-in-out duration-200`;

  const svgContent = (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M61.4054 36.118L51.4046 45.4297L42.1213 26.6969L46.917 15.9259C48.1291 13.7774 50.1114 13.749 51.3235 15.9259L61.4054 36.118Z"
        fill="#FFA000"
      />
      <path
        d="M51.4088 45.4256L14 80.2197L42.1256 26.6969L51.4088 45.4256Z"
        fill="#F57F17"
      />
      <path
        d="M72.3712 21.877C74.163 20.1703 76.0075 20.746 76.4736 23.1702L86.1988 79.7496L53.9424 99.1148C52.8114 99.7472 49.8116 99.9945 49.8116 99.9945C49.8116 99.9945 47.0833 99.6621 46.0375 99.0864L14 80.2198L72.3712 21.877Z"
        fill="#FFCA28"
      />
      <path
        d="M42.1255 26.697L14 80.2197L26.5345 1.98888C27.0047 -0.435314 28.379 -0.682597 29.6194 1.46593L42.1255 26.697Z"
        fill="#FFA000"
      />
    </svg>
  );

  return (
    <div id="skills" className="w-full md:h-screen p-2 py-16">
      <div className="max-w-[1240px] m-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I can do</h2>
        {/* <div className="grid grid-cols-3 sm:grid-cols-4 gap-8 place-items-center">
          {skills.map((skill, index) => (
            <div className="relative w-24 h-24 group">
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="absolute w-4/5 h-4/5 filter blur-sm opacity-30 custom-transform-backdrop-2 group-hover:custom-transform-hover">
                  {svgContent}
                </div>
                <div className="absolute w-4/5 h-4/5 filter blur-sm opacity-70 custom-transform-backdrop-1 group-hover:custom-transform-hover">
                  {svgContent}
                </div>
                <div className="relative w-4/5 h-4/5 transition-transform ease-in-out duration-300 group-hover:scale-105">
                  {svgContent}
                </div>
              </div>
              <h6 className={name}>{skill.name}</h6>
            </div>            
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
