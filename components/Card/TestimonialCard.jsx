import Image from "next/image";
import img from "@/public/images/person_4.jpg";

const TestimonialCard = () => {
  return (
    <div>
      <div className="bg-white px-5 py-8 rounded-sm shadow-sm relative">
        <i class="fi fi-rr-quote-right text-primary-color text-3xl absolute -top-7 left-5 bg-[#f8f8f8] w-14 h-14 rounded-full flex justify-center items-center rotate-180"></i>
        <p className="text-base font-medium text-secondary-text-color leading-8">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <div className="w-0 h-0 border-solid border-s-[20px] border-t-[20px] border-b-0 border-e-[20px] border-s-transparent border-y-white border-e-transparent rotate-0 absolute -bottom-5 left-5"></div>
      </div>
      <div className="flex gap-4 items-center mt-7">
        <Image
          className="w-20 h-20 object-cover object-center rounded-full"
          src={img}
          alt="User"
          width={0}
          height={0}
          sizes="100vw"
        />
        <div>
          <h2 className="text-2xl font-medium text-text-color-black mb-1 uppercase">
            Roger Scott
          </h2>
          <p className="text-base font-medium text-primary-color uppercase">
            Marketing Manager
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
