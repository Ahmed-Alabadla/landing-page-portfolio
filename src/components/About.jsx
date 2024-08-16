import React from "react";
import { Fade } from "react-awesome-reveal";
import { BarLoader } from "react-spinners";

function About() {
  return (
    <div
      id="about"
      className="bg-light dark:bg-gradient-to-b dark:from-black dark:to-gray-800 w-full md:min-h-screen flex items-center"
    >
      <div className="max-w-screen-lg mx-auto p-6 flex flex-col justify-center w-full h-full dark:text-white ">
        <Fade triggerOnce direction="top-left" duration={1500}>
          <div className="pb-8 ">
            <p className="text-4xl font-bold  flex flex-col w-full">
              About
              <span className="mt-1">
                <BarLoader color="#06b6d4" loading={true} size={30} />
              </span>
            </p>
          </div>
        </Fade>

        <Fade triggerOnce direction="top-left" duration={2500}>
          <p className="text-gray-500 py-4 max-w-2xl mx-3 text-xl leading-8">
            Experienced Web Developer adept in all stages of advanced web
            development and building. Knowledgeable in user interface, testing,
            and debugging processes. Able to effectively self-manage during
            independent projects, as well as collaborate as part of a productive
            team. I can convert the design file into web page. I create
            responsive website that are displayed on all devices desktops and
            smartphones by CSS frameworks (Bootstrap, Tailwind CSS). Currently,
            I love to work on web application using technologies like React JS,
            Next.js and Tailwind CSS.
          </p>
        </Fade>
      </div>
    </div>
  );
}

export default About;
