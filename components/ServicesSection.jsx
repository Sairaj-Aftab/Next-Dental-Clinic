import React from "react";
import SectionTitleHeader from "./SectionTitleHeader";
import ServiceCard from "./Card/ServiceCard";

const ServicesSection = () => {
  return (
    <div className="bg-section-bg2 py-10">
      <SectionTitleHeader title1="SERVICES" title2="Toothcare Services" />
      <div className="lg:container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5 lg:p-0">
        <ServiceCard
          title="Tooth Protection"
          desc="Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts."
        />
        <ServiceCard
          title="Dental Implants"
          desc="Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts."
        />
        <ServiceCard
          title="Dental Care"
          desc="Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts."
        />
        <ServiceCard
          title="Teeth Whitening"
          desc="Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts."
        />
        <ServiceCard
          title="Dental Caculus"
          desc="Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts."
        />
        <ServiceCard
          title="Tooth Removal"
          desc="Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts."
        />
        <ServiceCard
          title="Removal of Tartar"
          desc="Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts."
        />
        <ServiceCard
          title="Tooth Inspection"
          desc="Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts."
        />
      </div>
    </div>
  );
};

export default ServicesSection;
