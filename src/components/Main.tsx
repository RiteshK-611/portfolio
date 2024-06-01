import React from "react";
import Link from "next/link";

const Main = () => {
  const socialBtn =
    "dark:shadow-lg dark:shadow-black dark:hover:shadow-none rounded-full shadow-xl text-[#5651e5] p-6 text-lg cursor-pointer hover:shadow-none ease-in duration-300";

  return (
    <main
      id="home"
      className="w-full h-screen text-center flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 relative z-[-10] flex place-items-center justify-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 dark:text-gray-400">
            Let&apos;s Build Something Together
          </p>
          <h1 className="py-4 text-gray-700 dark:text-gray-600">
            Hi, I&apos;m <span className="text-[#5651e5]">Ritesh.</span>
          </h1>
          <h1 className="py-2 text-gray-700 dark:text-gray-600">
            A Full-Stack Software Developer
          </h1>
          <p className="py-4 text-gray-600 dark:text-gray-400 max-w-[70%] m-auto">
            I&apos;m a Full-Stack Software Developer 🚀 having an experience of
            building Web and Mobile applications with Javascript / React / Node
            and some other cool libraries and frameworks. I love building
            beautiful interfaces, apps, and everything in between!
            {/* I’m a front-end web developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I’m focused on building responsive front-end web applications while
            learning back-end technologies. */}
          </p>
          {/* <div className="flex items-center justify-evenly m-auto md:max-w-[50%] py-4">
            <Link href="https://twitter.com/riteshkokam">
              <div className={socialBtn}>
                <BsTwitter />
              </div>
            </Link>
            <Link href="https://instagram.com/ritesh_kokam">
              <div className={socialBtn}>
                <AiFillInstagram />
              </div>
            </Link>
            <Link href="https://linkedin.com/in/ritesh-kokam/">
              <div className={socialBtn}>
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href="https://github.com/RiteshK-611">
              <div className={socialBtn}>
                <FaGithub />
              </div>
            </Link>
            <Link href="mailto:riteshkokam@gmail.com">
              <div className={socialBtn}>
                <HiMail />
              </div>
            </Link>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default Main;
