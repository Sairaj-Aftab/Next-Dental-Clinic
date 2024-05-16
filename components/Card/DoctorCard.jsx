import Image from "next/image";

const DoctorCard = ({ img, name, title, social, desc }) => {
  return (
    <div className="bg-text-color-white px-5 rounded-md text-center hover:bg-primary-color group relative pb-5">
      <div className="w-full flex justify-center absolute -top-28 left-0 right-0">
        {img && (
          <Image
            className="rounded-tl-full rounded-b-full w-52 h-52 object-cover object-center border-8 border-[#f8f8f8]"
            src={img}
            alt="Doctor"
            width={0}
            height={0}
            sizes="100vw"
          />
        )}
      </div>
      <div className="h-24"></div>
      <h1 className="text-xl font-medium text-text-color-black mb-3 group-hover:text-text-color-white">
        {name}
      </h1>
      <h3 className="text-sm font-medium text-primary-color uppercase mb-3 group-hover:text-text-color-white">
        {title}
      </h3>
      <ul className="flex gap-2 justify-center mb-3">
        <li>
          <a href="#">
            <i className="fi fi-brands-twitter-alt-circle text-xl bg-primary-color w-10 h-10 rounded-full text-white flex justify-center items-center group-hover:bg-secondary-text-color3"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fi fi-brands-facebook text-xl bg-primary-color w-10 h-10 rounded-full text-white flex justify-center items-center group-hover:bg-secondary-text-color3"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fi fi-brands-google text-xl bg-primary-color w-10 h-10 rounded-full text-white flex justify-center items-center group-hover:bg-secondary-text-color3"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fi fi-brands-instagram text-xl bg-primary-color w-10 h-10 rounded-full text-white flex justify-center items-center group-hover:bg-secondary-text-color3"></i>
          </a>
        </li>
      </ul>
      <p className="text-base font-medium text-secondary-text-color group-hover:text-secondary-text-color3">
        {desc}
      </p>
    </div>
  );
};

export default DoctorCard;
