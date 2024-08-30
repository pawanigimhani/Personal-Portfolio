import React from "react";
import "remixicon/fonts/remixicon.css";

function LeftSlider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="https://www.linkedin.com/in/pawani-gimhani/">
            <i className="ri-linkedin-box-line text-xl text-gray-400"></i>
          </a>
          <a href="mailto: pawaneegimhanee@gmail.com">
            <i className="ri-mail-line text-gray-400"></i>
          </a>
          <a href="https://github.com/pawanigimhani">
            <i className="ri-github-line text-gray-400"></i>
          </a>
          <a href="https://medium.com/@pawaneegimhanee">
            <i className="ri-medium-line text-gray-400"></i>
          </a>
          <a href="tel:+94701156005">
            <i className="ri-phone-line text-gray-400"></i>
          </a>
        </div>
        <div className="w-[1px] h-32 bg-gray-700 mt-2 sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSlider;
