import React from "react";
import imgHome from "../assets/imgHome.jpg";
import profile from "../assets/Profile.pdf";
import { HiArrowRight } from "react-icons/hi";
import { ReactTyped } from "react-typed";
import { Fade } from "react-awesome-reveal";

function Home() {
  return (
    <div
      id="home"
      // dark:bg-gradient-to-b dark:from-black via-black dark:to-gray-800
      // bg-imgHome
      className="relative bg-center bg-no-repeat bg-cover w-full  sm:h-screen"
    >
      <div>
        <img
          // src={header_background}
          src={imgHome}
          alt=""
          className="w-full h-full -z-30 fixed top-0 left-0 "
        />
        <div className="w-full h-full -z-30 fixed top-0 left-0 bg-black opacity-60 "></div>
      </div>
      <Fade triggerOnce duration={2000} className="w-full h-full">
        <div className="max-w-screen-lg mx-auto px-6 py-12 sm:py-6  flex flex-col items-center  justify-center  w-full h-full text-white gap-6 sm:gap-10">
          <p className="text-2xl sm:text-5xl font-bold text-cyan-500  ">
            Hi, I'm Ahmed Alabadla
          </p>
          <ReactTyped
            className="text-2xl sm:text-5xl font-bold "
            strings={["Web Design", "Frontend web developer"]}
            typeSpeed={50}
            backSpeed={60}
            loop
          />

          <div className="flex  gap-5  ">
            <a
              href="#portfolio"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer "
            >
              Projects
              <span className="group-hover:rotate-90  duration-300 ">
                <HiArrowRight size={20} className="ml-1" />
              </span>
            </a>
            <a
              href={profile}
              download="profile.pdf"
              className=" text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 cursor-pointer "
            >
              Download CV
            </a>
          </div>
          {/* <div className="w-fit h-fit mt-4 md:mt-0">
          <img src={me} alt="" className="rounded-2xl  w-88 h-[450px] " />
        </div> */}
        </div>
      </Fade>
    </div>
  );
}

export default Home;
