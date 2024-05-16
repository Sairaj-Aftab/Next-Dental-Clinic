import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

export const getDoctorListData = async () => {
  const doctorList = [];
  const querySnapshot = await getDocs(collection(db, "doctor-list"));
  querySnapshot.forEach((doc) => {
    doctorList.push({ ...doc.data(), id: doc.id });
  });
  return doctorList;
};
