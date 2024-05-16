import React from "react";

const ServiceCard = ({ logo, title, desc }) => {
  return (
    <div className="bg-white rounded-sm p-5 flex flex-col gap-5 items-center group hover:bg-primary-color">
      <i className="fi fi-rr-tooth text-5xl bg-primary-color text-white w-24 h-24 rounded-full flex justify-center items-center group-hover:bg-secondary-text-color3"></i>
      <h1 className="text-xl font-semibold text-text-color-black group-hover:text-text-color-white">
        {title}
      </h1>
      <p className="text-base font-normal text-secondary-text-color text-center group-hover:text-secondary-text-color3">
        {desc}
      </p>
    </div>
  );
};

export default ServiceCard;
