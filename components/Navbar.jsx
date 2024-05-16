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
          <Link
            href="/make-appointment"
            className="bg-primary-color font-semibold text-text-color-white text-base p-7"
          >
            MAKE AN APPOINTMENT
          </Link>
        </div>
      </div>
      {/* Mobile Navbar */}
      <div className="md:hidden relative z-10">
        <div className="flex justify-between items-center bg-primary-color py-2 px-5">
          <Link
            href="/make-appointment"
            className="bg-white font-semibold text-primary-color text-base py-3 px-5 rounded-md"
          >
            MAKE AN APPOINTMENT
          </Link>
          {openMenu ? (
            <i
              onClick={() => setOpenMenu(!openMenu)}
              className="fi fi-rr-cross text-white text-3xl"
            ></i>
          ) : (
            <i
              onClick={() => setOpenMenu(!openMenu)}
              className="fi fi-rr-menu-burger text-white text-3xl"
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
