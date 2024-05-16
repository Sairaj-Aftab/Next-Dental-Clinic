import React from "react";
import AppointmentForm from "./AppointmentForm";

const AppointmentFormSection = () => {
  return (
    <div className="appointment-section relative py-8 bg-section-bg1">
      <div className="after:absolute after:top-0 after:left-0 after:bottom-0 after:w-full md:after:w-1/2 after:bg-primary-color after:z-0">
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row lg:container relative z-10">
          {/* Column 1 */}
          <div className="md:flex-1 px-5 lg:pr-10 lg:pl-0">
            <h3 className="text-sm font-medium text-text-color-white">
              WE ARE HERE FOR YOU
            </h3>
            <h1 className="text-3xl font-medium text-text-color-white mb-6">
              Make An Appointment
            </h1>
            <AppointmentForm />
          </div>
          {/* Column 2 */}
          <div className="md:flex-1 bg-white md:bg-inherit px-5 lg:p-0 py-5 lg:py-0">
            <h3 className="text-sm font-bold text-primary-color mb-1">
              LEARN ANYTHING
            </h3>
            <h1 className="text-4xl font-medium text-text-color-black mb-5">
              We Offer Best Dental Services
            </h1>
            <ul className="flex flex-col gap-5">
              <li className="flex gap-5 bg-white hover:bg-primary-color px-6 py-7 rounded-sm group">
                <i className="fi fi-tr-it text-7xl text-primary-color group-hover:text-text-color-white"></i>
                <div>
                  <h3 className="text-xl font-medium mb-4 text-text-color-black group-hover:text-text-color-white">
                    Easy Booking
                  </h3>
                  <p className="text-base font-normal text-secondary-text-color group-hover:text-secondary-text-color3">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </li>
              <li className="flex gap-5 bg-white hover:bg-primary-color px-6 py-7 rounded-sm group">
                <i className="fi fi-tr-user-md text-7xl text-primary-color group-hover:text-text-color-white"></i>
                <div>
                  <h3 className="text-xl font-medium mb-4 text-text-color-black group-hover:text-text-color-white">
                    Team Dentist
                  </h3>
                  <p className="text-base font-normal text-secondary-text-color group-hover:text-secondary-text-color3">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </li>
              <li className="flex gap-5 bg-white hover:bg-primary-color px-6 py-7 rounded-sm group">
                <i className="fi fi-tr-benefit-porcent text-7xl text-primary-color group-hover:text-text-color-white"></i>
                <div>
                  <h3 className="text-xl font-medium mb-4 text-text-color-black group-hover:text-text-color-white">
                    Best Price Guarantee
                  </h3>
                  <p className="text-base font-normal text-secondary-text-color group-hover:text-secondary-text-color3">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentFormSection;
