import React from "react";

const SectionTitleHeader = ({ title1, title2 }) => {
  return (
    <div className="text-center mb-8">
      <h3 className="text-sm font-bold text-primary-color mb-2 uppercase">
        {title1}
      </h3>
      <h1 className="text-4xl font-medium text-text-color-black">{title2}</h1>
    </div>
  );
};

export default SectionTitleHeader;
