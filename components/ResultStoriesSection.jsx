"use client";
import SectionTitleHeader from "./SectionTitleHeader";
import Image from "next/image";
import img from "@/public/images/result-1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";

const ResultStoriesSection = () => {
  return (
    <div className="bg-section-bg2 py-20">
      <SectionTitleHeader
        title1="Stories"
        title2="Result of our Treatment and Work"
      />
      <Swiper
        pagination={{ clickable: true, dynamicBullets: true }}
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          // when window width is >= 768px
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        className="h-auto py-5 sm:py-10"
      >
        <SwiperSlide>
          <div className="relative h-96 group">
            <Image
              className="w-full h-full object-cover"
              src={img}
              alt="User"
              width={0}
              height={0}
              sizes="100vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white py-5 text-center bg-opacity-40 invisible group-hover:visible">
              <p className="text-sm font-normal text-[#111111] mb-1">
                France, 28 years
              </p>
              <h1 className="text-xl font-normal text-black">John Johnson</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-96 group">
            <Image
              className="w-full h-full object-cover"
              src={img}
              alt="User"
              width={0}
              height={0}
              sizes="100vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white py-5 text-center bg-opacity-40 invisible group-hover:visible">
              <p className="text-sm font-normal text-[#111111] mb-1">
                France, 28 years
              </p>
              <h1 className="text-xl font-normal text-black">John Johnson</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-96 group">
            <Image
              className="w-full h-full object-cover"
              src={img}
              alt="User"
              width={0}
              height={0}
              sizes="100vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white py-5 text-center bg-opacity-40 invisible group-hover:visible">
              <p className="text-sm font-normal text-[#111111] mb-1">
                France, 28 years
              </p>
              <h1 className="text-xl font-normal text-black">John Johnson</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-96 group">
            <Image
              className="w-full h-full object-cover"
              src={img}
              alt="User"
              width={0}
              height={0}
              sizes="100vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white py-5 text-center bg-opacity-40 invisible group-hover:visible">
              <p className="text-sm font-normal text-[#111111] mb-1">
                France, 28 years
              </p>
              <h1 className="text-xl font-normal text-black">John Johnson</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-96 group">
            <Image
              className="w-full h-full object-cover"
              src={img}
              alt="User"
              width={0}
              height={0}
              sizes="100vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white py-5 text-center bg-opacity-40 invisible group-hover:visible">
              <p className="text-sm font-normal text-[#111111] mb-1">
                France, 28 years
              </p>
              <h1 className="text-xl font-normal text-black">John Johnson</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-96 group">
            <Image
              className="w-full h-full object-cover"
              src={img}
              alt="User"
              width={0}
              height={0}
              sizes="100vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white py-5 text-center bg-opacity-40 invisible group-hover:visible">
              <p className="text-sm font-normal text-[#111111] mb-1">
                France, 28 years
              </p>
              <h1 className="text-xl font-normal text-black">John Johnson</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-96 group">
            <Image
              className="w-full h-full object-cover"
              src={img}
              alt="User"
              width={0}
              height={0}
              sizes="100vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white py-5 text-center bg-opacity-40 invisible group-hover:visible">
              <p className="text-sm font-normal text-[#111111] mb-1">
                France, 28 years
              </p>
              <h1 className="text-xl font-normal text-black">John Johnson</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-96 group">
            <Image
              className="w-full h-full object-cover"
              src={img}
              alt="User"
              width={0}
              height={0}
              sizes="100vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white py-5 text-center bg-opacity-40 invisible group-hover:visible">
              <p className="text-sm font-normal text-[#111111] mb-1">
                France, 28 years
              </p>
              <h1 className="text-xl font-normal text-black">John Johnson</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ResultStoriesSection;
