const TopHeader = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl text-primary-color">TOOTHCARE</h1>
          <h2 className="text-2xl text-secondary-text-color font-semibold">
            Dental Clinic
          </h2>
        </div>
        <div>
          <ul>
            <li>
              {/* Icon  */}
              <div>
                <p>Monday - Friday</p>
                <p>8:00AM-8:00PM</p>
              </div>
            </li>
            <li>
              {/* Icon  */}

              <div>
                <p>Call Us</p>
                <p>123-456-7890</p>
              </div>
            </li>

            <li>
              {/* Icon  */}
              <div>
                <p>Location</p>
                <p>San Francisco, California, USA</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
