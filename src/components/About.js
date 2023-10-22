import React from "react";
import AboutImg from "../assets/images/MH.jpg";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hello! I am Matt Hunt, a software/game developer based in Sheffield.
          </p>
          <p className="pb-5">
            I am currently a full time software developer in the motor industry and in my spare time, I create games using Unreal Engine and Unity!
          </p>
          <p className="pb-5">
            Experienced with languages such as C#/C++/VB.Net/JavaScript/HTML/CSS
          </p>
          <p className="pb-5">
            Some experience with React and Blazor for front end development
          </p>
        </div>
        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;