import React from "react";
// import { MdOutlinePlayArrow } from "react-icons/md";
import Link from "next/link";
import Canva from "./ThreeD";
import Image from "next/image";
import pic from "../../public/profile.png";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center justify-between py-16 bg-red">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 dark:text-white">Who I Am</h2>
          <p className="py-2 text-gray-600 dark:text-gray-400">
            I am not your average developer
          </p>
          <p className="py-2 text-gray-600 dark:text-gray-400">
            🙏🏼 Namaste, I am Ritesh Kokam from Mumbai, India. I am a Full Stack
            Developer. I have completed my graduation degree in the field of
            Information Technology from Mumbai University. I love building user
            interfaces (UI) and projects with Javascript, React, Node, and
            learning new technologies.
          </p>
          <div>
            <p>
              Apart from coding, designing and developing, there are few hobbies
              and activities that I love to do like...
            </p>
            <ul>
              <li className="flex items-center">
                {/* <MdOutlinePlayArrow color="#5651e5" /> */}
                <span className="pl-2">Photography</span>
              </li>
              <li className="flex items-center">
                {/* <MdOutlinePlayArrow color="#5651e5" /> */}
                <span className="pl-2">Swimming</span>
              </li>
              <li className="flex items-center">
                {/* <MdOutlinePlayArrow color="#5651e5" /> */}
                <span className="pl-2">Yoga</span>
              </li>
              <li className="flex items-center">
                {/* <MdOutlinePlayArrow color="#5651e5" /> */}
                <span className="pl-2">Football</span>
              </li>
              <li className="flex items-center">
                {/* <MdOutlinePlayArrow color="#5651e5" /> */}
                <span className="pl-2">Watching Movies</span>
              </li>
              <li className="flex items-center">
                {/* <MdOutlinePlayArrow color="#5651e5" /> */}
                <span className="pl-2">Playing Video Games</span>
              </li>
            </ul>
          </div>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 dark:text-gray-400 underline cursor-pointer hover:text-[#5651e5]">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto p-4 md:hidden hover:scale-95 ease-in duration-300">
          <Image className="" src={pic} alt="/" />
        </div>
        <Canva />
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%+10rem)]"
          aria-hidden="true">
          <div
            className="animate-spotlight relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#1f1e55] to-[#5651e5] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}></div>
        </div>
      </div>
    </div>
  );
};

export default About;
