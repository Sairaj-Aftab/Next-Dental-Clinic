const TopHeader = () => {
  return (
    <div className="bg-white px-2 py-3 md:px-0 md:py-5">
      <div className="flex md:justify-between md:items-center flex-col gap-4 md:flex-row md:gap-0 w-full lg:container">
        <div>
          <h1 className="text-2xl text-primary-color font-bold">TOOTHCARE</h1>
          <h2 className="text-lg text-secondary-text-color font-normal">
            Dental Clinic
          </h2>
        </div>
        <div className="w-2/3">
          <ul className="flex justify-between flex-col gap-3 md:gap-0 md:flex-row">
            <li className="flex gap-2 items-center">
              <i className="fi fi-rr-clock text-primary-color text-4xl"></i>
              <div>
                <p className="text-primary-color text-sm font-normal">
                  Monday - Friday
                </p>
                <p className="text-secondary-text-color2 text-sm font-semibold">
                  8:00AM-8:00PM
                </p>
              </div>
            </li>
            <li className="flex gap-2 items-center">
              <i className="fi fi-rr-phone-call text-primary-color text-4xl"></i>

              <div>
                <p className="text-primary-color text-sm font-normal">
                  Call Us
                </p>
                <p className="text-secondary-text-color2 text-sm font-semibold">
                  123-456-7890
                </p>
              </div>
            </li>

            <li className="flex gap-2 items-center">
              <i className="fi fi-rr-marker text-primary-color text-4xl"></i>
              <div>
                <p className="text-primary-color text-sm font-normal">
                  Location
                </p>
                <p className="text-secondary-text-color2 text-sm font-semibold">
                  San Francisco, California, USA
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
