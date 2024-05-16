import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import toast from "react-hot-toast";

export const getDoctorListData = async () => {
  const doctorList = [];
  const querySnapshot = await getDocs(collection(db, "doctor-list"));
  querySnapshot.forEach((doc) => {
    doctorList.push({ ...doc.data(), id: doc.id });
  });
  return doctorList;
};

export const makeAppointment = async (data) => {
  try {
    /**
     * name
     * email
     * phone
     * age
     * gender
     * doctor
     * appointment_date
     * appointment_time
     * message
     * createdAt
     */
    const docRef = await addDoc(collection(db, "appointment"), {
      name: data.name,
      email: data.email,
      phone: data.phone,
      age: Number(data.age),
      gender: data.gender,
      doctor: data.doctor,
      appointment_date: data.appointment_date,
      appointment_time: data.appointment_time,
      message: data.message,
      createdAt: new Date(),
    });
    if (docRef.id) {
      toast.success("Successfully created");
    }
  } catch (e) {
    toast.error("Try again!");
  }
};
