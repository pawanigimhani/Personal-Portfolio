import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const {portfolioData} = useSelector((state) => state.root);
  const {contact} = portfolioData;
  return (
    <div>
      <SectionTitle title="Contact Me" />
      <div className="flex items-center justify-center gap-x-10 sm:gap-x-0 py-0 sm:py-10 sm:flex-col">
      <div className="h-[400px] sm:h-[400px] mr-40 sm:mr-6">
        <lottie-player
          src="https://lottie.host/2da44029-4da7-4ac0-be94-bde87bc77f30/NhJlg1EMcc.json"
          background="##FFFFFF"
          speed="1"
          loop
          autoplay
        ></lottie-player>
        </div>
        <div className="flex flex-col gap-1 sm:text-base">
          <p className="text-secondary">{"{"}</p>
          {Object.keys(contact).filter((key) => key !== "_id" && key !== "id").map((key) => (
            <p className="text-white ml-5" key={key}>
              <span className="text-secondary">{key} :</span>
              <span className="text-secondary"> {contact[key]}</span>
            </p>
          ))}
          <h1 className="text-secondary">{"}"}</h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
