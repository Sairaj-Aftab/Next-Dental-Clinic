import Link from "next/link";
import backgroundImg from "../public/images/bg_1.jpg";

const SectionQuote = () => {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url('${backgroundImg.src}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-primary-color after:bg-opacity-80">
        <div className="lg:container px-5 py-10 lg:px-0 flex flex-col md:flex-row md:justify-center items-center gap-8 md:gap-20 relative z-10">
          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold text-text-color-white mb-2 md:mb-4 uppercase">
              BOOK YOUR APPOINTMENT
            </h3>
            <h1 className="text-3xl font-bold text-text-color-white">
              Do not wait make an appointment today!
            </h1>
          </div>
          <Link
            href="/make-appointment"
            className="bg-white text-base font-semibold text-primary-color py-6 px-14 rounded-md hover:shadow-md shadow-white"
          >
            Make an appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionQuote;
