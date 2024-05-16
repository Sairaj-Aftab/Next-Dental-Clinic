"use client";
import { makeAppointment } from "@/lib/getData";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AppointmentForm = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    age: 0,
    gender: "",
    appointment_date: "",
    appointment_time: "",
    doctor: "",
    message: "",
  });

  const handleChangeValue = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(input);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (
      !input.name ||
      !input.email ||
      !input.phone ||
      !input.age ||
      !input.appointment_date ||
      !input.appointment_time ||
      !input.gender ||
      !input.doctor
    ) {
      toast.error("All fields are required!");
    } else {
      makeAppointment(input);
    }
  };
  return (
    <>
      <Toaster />
      <form
        onSubmit={handleSubmitForm}
        className="appointment-form grid grid-cols-2 gap-y-5 gap-x-4"
      >
        <div className="group">
          <label htmlFor="name">Your Full Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={input.name}
            onChange={handleChangeValue}
            placeholder="Your Full Name"
          />
        </div>
        <div className="group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            value={input.email}
            onChange={handleChangeValue}
            placeholder="Email"
          />
        </div>
        <div className="group">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="text"
            name="phone"
            value={input.phone}
            onChange={handleChangeValue}
            placeholder="Your Phone Number"
          />
        </div>
        <div className="group">
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender" onChange={handleChangeValue}>
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="group">
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            name="age"
            value={input.age}
            onChange={handleChangeValue}
            placeholder="age"
          />
        </div>
        <div className="group">
          <label htmlFor="appointment-date">Appointment Date</label>
          <input
            id="appointment-date"
            type="date"
            name="appointment_date"
            value={input.appointment_date}
            onChange={handleChangeValue}
            placeholder="Appointment Date"
          />
        </div>
        <div className="group">
          <label htmlFor="appointment-time">Appointment Time</label>
          <input
            id="appointment-time"
            type="time"
            name="appointment_time"
            value={input.appointment_time}
            onChange={handleChangeValue}
            placeholder="Appointment Time"
          />
        </div>
        <div className="group">
          <label htmlFor="doctor-list">Select a Doctor</label>
          <select name="doctor" id="doctor-list" onChange={handleChangeValue}>
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
          <textarea
            name="message"
            id="message"
            value={input.message}
            onChange={handleChangeValue}
          ></textarea>
        </div>
        <button className="col-span-2 bg-text-color-white text-primary-color text-base font-medium py-4 rounded-md shadow-md">
          Send Message
        </button>
      </form>
    </>
  );
};

export default AppointmentForm;
