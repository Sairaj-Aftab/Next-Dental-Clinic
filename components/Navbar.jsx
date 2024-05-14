"use client";
import Link from "next/link";
import { useState } from "react";
import { clsx } from "clsx";

const navbarMenu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Dentist",
    path: "/dentist",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Pricing",
    path: "pricing",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className="navbar bg-gray-opacity hidden md:block">
        <div className="lg:container flex justify-between items-center">
          <ul className="flex gap-10">
            {navbarMenu?.map((data, index) => (
              <li key={index}>
                <Link href={`${data.path}`}>{data.name}</Link>
              </li>
            ))}
          </ul>
          <button className="bg-primary-color font-semibold text-text-color-white text-base p-7">
            MAKE AN APPOINTMENT
          </button>
        </div>
      </div>
      {/* Mobile Navbar */}
      <div className="md:hidden relative z-10">
        <div className="flex justify-between items-center bg-white">
          <button className="bg-primary-color font-semibold text-text-color-white text-base p-5">
            MAKE AN APPOINTMENT
          </button>
          {openMenu ? (
            <i
              onClick={() => setOpenMenu(!openMenu)}
              className="fi fi-rr-cross text-white text-3xl mr-3"
            ></i>
          ) : (
            <i
              onClick={() => setOpenMenu(!openMenu)}
              className="fi fi-rr-menu-burger text-white text-3xl mr-3"
            ></i>
          )}
        </div>
        <ul
          className={clsx(
            openMenu
              ? "visible transition-all top-full duration-300"
              : "invisible transition-all -top-80 duration-300",
            "absolute inset-x-0 -z-10 flex gap-5 flex-col p-5 bg-primary-color text-text-color-white text-base font-semibold rounded-b-2xl shadow-lg"
          )}
        >
          {navbarMenu?.map((data, index) => (
            <li key={index}>
              <Link href={`${data.path}`}>{data.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
