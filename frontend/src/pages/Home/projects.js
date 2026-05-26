import { React, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { project } = portfolioData;
  const reversedProjects = [...project].reverse();

  return (
    <div className="py-12 sm:py-6">
      <SectionTitle title="Projects" />
      
      {/* Horizontal Tabs Navigation */}
      <div className="flex gap-4 border-b border-white/5 pb-4 overflow-x-auto w-full mb-10 scrollbar-none">
        {reversedProjects.map((proj, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`px-6 py-2.5 text-sm font-medium whitespace-nowrap rounded-lg transition-all duration-300 ${
              selectedIndex === index
                ? "bg-secondary text-primary shadow-lg shadow-secondary/20"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            {proj.title}
          </button>
        ))}
      </div>

      {/* Selected Project Card */}
      {reversedProjects.length > 0 && (
        <div className="flex gap-12 items-center sm:flex-col bg-[#132c3f]/40 border border-white/5 p-10 sm:p-6 rounded-3xl shadow-2xl backdrop-blur-sm w-full">
          <div className="w-2/5 sm:w-full flex justify-center">
            <div className="relative group overflow-hidden rounded-2xl border border-white/10 shadow-xl w-full max-w-xs">
              <img
                src={reversedProjects[selectedIndex].image}
                alt="project"
                className="w-full h-48 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-115"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="text-secondary text-xs font-semibold tracking-widest uppercase">View details</span>
              </div>
            </div>
          </div>
          
          <div className="w-3/5 sm:w-full flex flex-col gap-6">
            <div>
              <h2 className="text-white text-2xl font-bold tracking-tight mb-2">
                {reversedProjects[selectedIndex].title}
              </h2>
              <div className="w-12 h-[2px] bg-secondary"></div>
            </div>
            
            <p className="text-white/80 text-sm leading-relaxed max-h-[160px] overflow-y-auto pr-2">
              {reversedProjects[selectedIndex].description}
            </p>
            
            <div>
              <span className="text-secondary text-xs font-semibold uppercase tracking-wider block mb-2">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {reversedProjects[selectedIndex].techstack.map((tech) => (
                  <span key={tech} className="bg-[#0e2738]/80 border border-white/5 text-white/90 text-xs px-3 py-1 rounded-md font-medium">
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4 mt-2 sm:justify-center">
              {reversedProjects[selectedIndex].link && (
                <a
                  href={reversedProjects[selectedIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 rounded-lg text-sm transition-all duration-300"
                >
                  <i className="ri-github-line text-lg"></i>
                  <span>GitHub</span>
                </a>
              )}
              {reversedProjects[selectedIndex].gitLink && (
                <a
                  href={reversedProjects[selectedIndex].gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/95 bg-secondary hover:shadow-[0_0_15px_rgba(58,186,154,0.3)] px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
                >
                  <i className="ri-share-box-line text-lg"></i>
                  <span>Link</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
