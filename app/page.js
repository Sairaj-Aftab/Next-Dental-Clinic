import AppointmentFormSection from "@/components/AppointmentFormSection";
import BlogListSection from "@/components/BlogListSection";
import DoctorSection from "@/components/DoctorSection";
import ResultStoriesSection from "@/components/ResultStoriesSection";
import SectionQuote from "@/components/SectionQuote";
import ServicesSection from "@/components/ServicesSection";
import Slider from "@/components/Slider";
import TestimonialSection from "@/components/TestimonialSection";
import WelcomeSection from "@/components/WelcomeSection";
import { getDoctorListData } from "@/lib/getData";

export default async function Home() {
  const doctorList = await getDoctorListData();
  return (
    <main>
      <Slider />
      <AppointmentFormSection />
      <ServicesSection />
      <WelcomeSection />
      <DoctorSection doctorList={doctorList} />
      <SectionQuote />
      <TestimonialSection />
      <ResultStoriesSection />
      <BlogListSection />
    </main>
  );
}
