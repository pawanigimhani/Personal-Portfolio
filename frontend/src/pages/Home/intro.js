import React from "react";
import { useSelector } from "react-redux";

function Intro() {
  const { portfolioData } = useSelector((state) => state.root) || {};
  const intro = portfolioData?.intro || {};
  const { welcome = "", firstName = "", lastName = "", caption = "", description = "" } = intro;
  return (
    <div className="flex flex-row items-center justify-between sm:flex-col-reverse">
      <div className="h-[80vh] bg-primary flex flex-col items-start justify-center sm:items-center gap-8 sm:gap-x-0 py-10">
        <h1 className="text-white">{welcome || "welcome!"}</h1>
        <h1 className="text-7xl sm:text-3xl text-secondary font-semibold">
          {firstName || "Pawani"} {lastName || "Gimhani"}
        </h1>
        <h1 className="text-6xl sm:text-2xl text-white font-semibold">
          {caption || ""}
        </h1>
        <p className="text-white w-3/5 text-sm sm:text-center">{description || "No discription"}</p>
        <a
            href="resume.pdf"
            download
            className="border-secondary text-secondary border-2 px-10 py-3 rounded sm:text-sm sm:py-2 sm:px-5 hover:bg-white hover:border-white hover:text-primary hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
             Resume
          </a>
      </div>
      <div>
        <img
          src="me.png"
          alt="intro"
          className="w-full sm:h-full h-[90vh] object-cover pb-10 sm:pb-0"
        />
      </div>
    </div>
  );
}

export default Intro;
