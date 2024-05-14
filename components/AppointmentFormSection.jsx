import React from "react";

const AppointmentFormSection = () => {
  return (
    <div className="appointment-section relative py-8 bg-[#f8f8f8]">
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
            <form
              action=""
              className="appointment-form grid grid-cols-2 gap-y-5 gap-x-4"
            >
              <div className="group">
                <label htmlFor="name">Your Full Name</label>
                <input id="name" type="text" placeholder="Your Full Name" />
              </div>
              <div className="group">
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" placeholder="Email" />
              </div>
              <div className="group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="email"
                  placeholder="Your Phone Number"
                />
              </div>
              <div className="group">
                <label htmlFor="gender">Gender</label>
                <select name="gender" id="gender">
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="group">
                <label htmlFor="age">Age</label>
                <input id="age" type="number" placeholder="age" />
              </div>
              <div className="group">
                <label htmlFor="appointment-date">Appointment Date</label>
                <input
                  id="appointment-date"
                  type="date"
                  placeholder="Appointment Date"
                />
              </div>
              <div className="group">
                <label htmlFor="appointment-time">Appointment Time</label>
                <input
                  id="appointment-time"
                  type="time"
                  placeholder="Appointment Time"
                />
              </div>
              <div className="group">
                <label htmlFor="doctor-list">Select a Doctor</label>
                <select name="doctor-list" id="doctor-list">
                  <option value="">--Select--</option>
                  <option value="Dr. Smith">Dr. Smith</option>
                  <option value="Dr. Johnson">Dr. Johnson</option>
                  <option value="Dr. Williams">Dr. Williams</option>
                  <option value="Dr. Brown">Dr. Brown</option>
                  <option value="Dr. Taylor">Dr. Taylor</option>
                  <option value="Dr. Martinez">Dr. Martinez</option>
                  <option value="Dr. Anderson">Dr. Anderson</option>
                  <option value="Dr. Garcia">Dr. Garcia</option>
                  <option value="Dr. Wilson">Dr. Wilson</option>
                </select>
              </div>
              <div className="group col-span-2">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button className="col-span-2 bg-text-color-white text-primary-color text-base font-medium py-4 rounded-md shadow-md">
                Send Message
              </button>
            </form>
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
