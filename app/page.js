import AppointmentFormSection from "@/components/AppointmentFormSection";
import ServicesSection from "@/components/ServicesSection";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main>
      <Slider />
      <AppointmentFormSection />
      <ServicesSection />
    </main>
  );
}
