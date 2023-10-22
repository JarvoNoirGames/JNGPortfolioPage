import React from "react";

import HamSlam from "../assets/images/HS.png";
import TSUTH from "../assets/images/TSUTHTitle.png";
import NS from "../assets/images/NS2.png";
import Warhouse from "../assets/images/Warhouse.png";
import ImageCard from "./ImageCard";
import Unity from "../assets/images/unity.png";
import UE4 from "../assets/images/Unreal_Engine_Horiz_White.png";

const Projects = () => {
  const projects = [
    {
      img: HamSlam,
      title: "Ham Slam",
      desc: " A physics based local multiplayer for upto 4 people where you compete in various games to be the top hamster!",
      link: "https://www.youtube.com/playlist?list=PLpvFEyjqOI-1xgGuuLcz9ch911OZPj2ZV",
      engine: Unity
    },
    {
      img: TSUTH,
      title: "The Shadow Upon The Holm",
      desc: "A Lovecraft inspired horror where you are searching for your missing colleague on a mysterious Holm.",
      link: "https://jarvonoir.itch.io/the-shadow-upon-the-holm",
      engine: UE4
    },
    {
      img: NS,
      title: "Night Shift",
      desc: "A horror game working the solitary night shift with randomised gameplay elements for unique playthroughs.",
      link: "https://www.youtube.com/playlist?list=PLpvFEyjqOI-38waRL2BABZ_0cCVB-RBf6",
      engine: UE4
    },
    {
      img: Warhouse,
      title: "Warhouse",
      desc: "A physics based local multiplayer for upto 4 people where you play as drones in a packaging warehouse, competing to fill your van up with the most value in packages!",
      link: "https://www.youtube.com/playlist?list=PLpvFEyjqOI-1ugSIl1wSQ3vFPeI6sng-e",
      engine: UE4
    }
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of the games I have created, both solo and as a team:
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <ImageCard
                  Name={project.title}
                  Description={project.desc}
                  ImgPath={project.img}
                  Link={project.link}
                  Engine={project.engine}
                />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
