import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function About() {
  const { portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { image, paragraph1, paragraph2, skill } = about;
  return (
    <div>
      <SectionTitle title="About Me" />
      <div className="flex items-center gap-y-10 w-full sm:flex-col">
        <div className="h-[60vh] w-1/2 sm:w-full">
          <lottie-player
            src={image || ""}
            background="##ffffff"
            speed="1"
            loop
            autoplay
            direction="1"
            mode="normal"
            className="w-[300px] h-[300px]"
          ></lottie-player>
        </div>
        <div className="flex flex-col w-1/2 gap-5 sm:w-full sm:text-center sm:text-sm">
          <p className="text-white">{paragraph1 || ""}</p>
          <p className="text-white">{paragraph2 || ""}</p>
        </div>
      </div>
      <div className="py-12 sm:py-8">
        <h1 className="text-secondary text-xl sm:text-lg">
          Here are some technologies that I 've worked with recently
        </h1>
        <div className="flex flex-wrap gap-10 sm:gap-5 mt-5 sm:my-6">
          {skill.map((tech) => (
            <div
              className="text-white border border-white py-3 px-10 sm:px-5 sm:py-2 sm:text-sm rounded hover:bg-slate-100 hover:text-primary hover:scale-105 hover:shadow-lg transition-all duration-300"
              key={tech}
            >
              <h1>{tech}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
