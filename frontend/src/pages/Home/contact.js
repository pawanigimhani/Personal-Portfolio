import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;

  const getIcon = (key) => {
    switch (key.toLowerCase()) {
      case "name":
        return "ri-user-line";
      case "email":
        return "ri-mail-line";
      case "phone":
        return "ri-phone-line";
      case "location":
        return "ri-map-pin-line";
      default:
        return "ri-arrow-right-line";
    }
  };

  return (
    <div className="py-12 sm:py-6">
      <SectionTitle title="Contact Me" />
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-12 items-center mt-10">
        
        {/* Lottie Animation Panel */}
        <div className="flex justify-center items-center h-[350px] w-full bg-[#132c3f]/20 border border-white/5 rounded-3xl p-6 shadow-xl">
          <lottie-player
            src="https://lottie.host/2da44029-4da7-4ac0-be94-bde87bc77f30/NhJlg1EMcc.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            className="w-full h-full max-w-[280px]"
          ></lottie-player>
        </div>

        {/* Contact Info Cards */}
        <div className="flex flex-col gap-4 w-full">
          <div className="mb-2">
            <h3 className="text-secondary text-lg font-semibold tracking-wider uppercase">
              Get In Touch
            </h3>
            <p className="text-white/60 text-sm mt-1">
              Feel free to reach out to me through any of the channels below.
            </p>
          </div>
          {Object.keys(contact)
            .filter((key) => key !== "_id" && key !== "id" && key !== "__v")
            .map((key) => (
              <div 
                key={key} 
                className="flex items-center gap-4 bg-[#132c3f]/40 border border-white/5 px-6 py-4 rounded-2xl shadow-lg hover:border-secondary/20 hover:scale-[1.01] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/15 group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                  <i className={`${getIcon(key)} text-secondary text-xl group-hover:text-primary transition-colors`}></i>
                </div>
                <div className="flex flex-col">
                  <span className="text-white/40 text-xs uppercase font-bold tracking-widest">{key}</span>
                  <span className="text-white font-semibold text-base sm:text-sm mt-0.5">{contact[key]}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
