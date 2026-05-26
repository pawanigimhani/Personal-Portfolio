import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Blogs() {
  const { portfolioData } = useSelector((state) => state.root);
  const blog = portfolioData?.blog || [];

  return (
    <div className="py-12 sm:py-6">
      <SectionTitle title="Blogs" />
      
      <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-10">
        {blog.map((item, index) => (
          <div 
            key={index}
            className="flex flex-col bg-[#132c3f]/40 border border-white/5 rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_10px_30px_rgba(58,186,154,0.15)] hover:scale-[1.02] hover:border-secondary/20 transition-all duration-300 group"
          >
            {item.image && (
              <div className="relative overflow-hidden h-48 w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              </div>
            )}
            <div className="p-6 flex flex-col justify-between flex-grow gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-secondary text-xs font-semibold uppercase tracking-wider">
                  Tech Article
                </span>
                <h3 className="text-white text-xl font-bold tracking-tight line-clamp-1 group-hover:text-secondary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
              
              {item.link && (
                <div className="pt-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-secondary hover:text-white text-sm font-semibold transition-colors duration-300"
                  >
                    <span>Read Article</span>
                    <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1"></i>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
