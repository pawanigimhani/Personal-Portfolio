import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function About() {
  const { portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { image, paragraph1, paragraph2, skill } = about;
  return (
    <div className="py-12 sm:py-6">
      <SectionTitle title="About Me" />
      <div className="flex items-center gap-12 w-full sm:flex-col sm:gap-6">
        <div className="h-[50vh] sm:h-auto w-1/2 sm:w-full flex justify-center items-center">
          <lottie-player
            src={image || ""}
            background="transparent"
            speed="1"
            loop
            autoplay
            direction="1"
            mode="normal"
            className="w-[300px] h-[300px] sm:w-[220px] sm:h-[220px] drop-shadow-[0_0_20px_rgba(58,186,154,0.15)]"
          ></lottie-player>
        </div>
        <div className="flex flex-col w-1/2 gap-6 sm:w-full bg-[#132c3f]/50 border border-white/5 p-8 sm:p-6 rounded-2xl shadow-xl backdrop-blur-sm">
          <p className="text-white/80 leading-relaxed text-base sm:text-sm">{paragraph1 || ""}</p>
          <p className="text-white/80 leading-relaxed text-base sm:text-sm">{paragraph2 || ""}</p>
        </div>
      </div>
      <div className="py-12 sm:py-8">
        <h3 className="text-secondary text-lg font-semibold tracking-wider uppercase">
          Recent Technologies I've Worked With
        </h3>
        <div className="flex flex-wrap gap-4 mt-6">
          {skill.map((tech) => (
            <div
              className="text-secondary bg-secondary/10 border border-secondary/20 py-2.5 px-6 sm:px-4 sm:py-2 sm:text-sm rounded-lg hover:bg-secondary hover:text-primary hover:border-secondary hover:scale-105 hover:shadow-[0_0_15px_rgba(58,186,154,0.3)] transition-all duration-300 ease-in-out cursor-pointer font-medium"
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
