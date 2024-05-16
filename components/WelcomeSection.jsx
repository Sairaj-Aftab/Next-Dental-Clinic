import img from "@/public/images/about.jpg";
import Image from "next/image";
const WelcomeSection = () => {
  return (
    <div className="bg-section-bg1">
      <div className="lg:container flex gap-5 items-center px-5 lg:p-0">
        <div className="hidden lg:block lg:flex-1">
          <Image
            className="w-full"
            src={img}
            alt="About"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className="flex-1 py-5 lg:py-0">
          <h3 className="secondary-title">Welcome to our dental clinic</h3>
          <h1 className="header-title">
            Toothcare is a Dental Clinic and Innovative Approach to Treatment
          </h1>
          <p className="text-base font-normal text-secondary-text-color mb-8">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <ul className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5">
            <li className="flex gap-2 border border-primary-color rounded-sm p-4 sm:w-1/3">
              <i class="fi fi-tr-leadership-alt text-4xl text-primary-color"></i>
              <div>
                <h2 className="text-3xl font-medium text-primary-color mb-2">
                  3,000
                </h2>
                <p className="text-base font-medium text-secondary-text-color uppercase">
                  Happy Patients
                </p>
              </div>
            </li>
            <li className="flex gap-2 border border-primary-color rounded-sm p-4 sm:w-1/3">
              <i class="fi fi-rr-tooth text-4xl text-primary-color"></i>
              <div>
                <h2 className="text-3xl font-medium text-primary-color mb-2">
                  2,200
                </h2>
                <p className="text-base font-medium text-secondary-text-color uppercase">
                  PERFORMED TREATMENTS
                </p>
              </div>
            </li>
            <li className="flex gap-2 border border-primary-color rounded-sm p-4 sm:w-1/3">
              <i class="fi fi-tr-calendar-clock text-4xl text-primary-color"></i>
              <div>
                <h2 className="text-3xl font-medium text-primary-color mb-2">
                  24
                </h2>
                <p className="text-base font-medium text-secondary-text-color uppercase">
                  YEAR OF EXPERIENCED
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
