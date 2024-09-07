import { React, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Blogs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const blog = portfolioData?.blog || [];

  return (
    <div>
      <SectionTitle title="Blogs" />
      <div className="flex py-10 gap-32 sm:gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 sm:border-l-0 border-[#178072] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {blog.map((blog, index) => (
            <div
              onClick={() => setSelectedIndex(index)}
              className="cursor-pointer"
              key={index}
            >
              <h1
                className={`text-xl sm:text-base px-5 sm:py-3 sm:px-1 hover:text-secondary
                        ${
                          selectedIndex === index
                            ? "text-secondary border-secondary border-l-4 sm:border-l-0 sm:bg-transparent -ml-[3px] bg-[#1c9a896c] py-3"
                            : "text-white"
                        }`}
              >
                {blog.title}
              </h1>
            </div>
          ))}
        </div>
        {blog.length > 0 && (
        <div className="flex items-center justify-center gap-10 sm:flex-col w-10/12 sm:w-full">
          <img
            src={blog[selectedIndex].image}
            alt="project"
            className="w-60 h-50 hover:scale-105 hover:shadow-lg hover:shadow-teal-700 transition-all duration-300"
          />
          <div className=" flex flex-col gap-5 sm:text-center">
            <div className="flex flex-col sm:text-center">
              <h1 className="text-white text-xl sm:text-lg mb-1">
                {blog[selectedIndex].title}
              </h1>
              <hr className="w-auto opacity-25"></hr>
            </div>
            <p className="text-white sm:text-sm sm:justify-center opacity-90 h-[165px] overflow-y-auto sm:h-auto sm:overflow-y-hidden">{blog[selectedIndex].description}</p>              
              {blog[selectedIndex].link &&
              (
                <a
                  href={blog[selectedIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-share-box-line text-gray-300 hover:text-white"></i>
                </a>
              )}
            </div>
          </div>
        )}
        </div>
      </div>
  );
}

export default Blogs;
