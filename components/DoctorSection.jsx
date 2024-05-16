"use client";
import React from "react";
import SectionTitleHeader from "./SectionTitleHeader";
import img from "@/public/images/doc-1.jpg";
import DoctorCard from "./Card/DoctorCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { getDoctorListData } from "@/lib/getData";

const DoctorSection = () => {
  const doctorList = getDoctorListData();
  console.log(doctorList);
  return (
    <div className="bg-section-bg1 py-10">
      <div className="lg:container px-5 lg:px-0">
        <SectionTitleHeader title1="OUR DOCTORS" title2="Qualified Dentist" />
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
              spaceBetween: 20,
            },
            // when window width is >= 768px
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="h-auto pt-32 pb-10"
        >
          <SwiperSlide>
            <DoctorCard
              img={img}
              name="Dr. Lloyd Wilson"
              title="HEAD DENTIST"
              desc="I am an ambitious workaholic, but apart from that, pretty simple person."
            />
          </SwiperSlide>
          <SwiperSlide>
            <DoctorCard
              img={img}
              name="Dr. Lloyd Wilson"
              title="HEAD DENTIST"
              desc="I am an ambitious workaholic, but apart from that, pretty simple person."
            />
          </SwiperSlide>
          <SwiperSlide>
            <DoctorCard
              img={img}
              name="Dr. Lloyd Wilson"
              title="HEAD DENTIST"
              desc="I am an ambitious workaholic, but apart from that, pretty simple person."
            />
          </SwiperSlide>
          <SwiperSlide>
            <DoctorCard
              img={img}
              name="Dr. Lloyd Wilson"
              title="HEAD DENTIST"
              desc="I am an ambitious workaholic, but apart from that, pretty simple person."
            />
          </SwiperSlide>
          <SwiperSlide>
            <DoctorCard
              img={img}
              name="Dr. Lloyd Wilson"
              title="HEAD DENTIST"
              desc="I am an ambitious workaholic, but apart from that, pretty simple person."
            />
          </SwiperSlide>
          <SwiperSlide>
            <DoctorCard
              img={img}
              name="Dr. Lloyd Wilson"
              title="HEAD DENTIST"
              desc="I am an ambitious workaholic, but apart from that, pretty simple person."
            />
          </SwiperSlide>
          <SwiperSlide>
            <DoctorCard
              img={img}
              name="Dr. Lloyd Wilson"
              title="HEAD DENTIST"
              desc="I am an ambitious workaholic, but apart from that, pretty simple person."
            />
          </SwiperSlide>
          <SwiperSlide>
            <DoctorCard
              img={img}
              name="Dr. Lloyd Wilson"
              title="HEAD DENTIST"
              desc="I am an ambitious workaholic, but apart from that, pretty simple person."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default DoctorSection;
