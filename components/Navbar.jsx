"use client";
import Link from "next/link";
import { useState } from "react";
import { clsx } from "clsx";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className="navbar bg-gray-opacity hidden md:block">
        <div className="lg:container flex justify-between items-center">
          <ul className="flex gap-10">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
          <button className="bg-primary-color font-semibold text-text-color-white text-base p-7">
            MAKE AN APPOINTMENT
          </button>
        </div>
      </div>
      {/* Mobile Navbar */}
      <div className="md:hidden relative">
        <div className="flex justify-between items-center">
          <button className="bg-primary-color font-semibold text-text-color-white text-base p-5">
            MAKE AN APPOINTMENT
          </button>
          <i
            onClick={() => setOpenMenu(!openMenu)}
            className="fi fi-rr-menu-burger text-4xl mr-3"
          ></i>
        </div>
        <ul
          className={clsx(
            openMenu ? "visible" : "invisible",
            "absolute top-full left-0 right-0 flex gap-5 flex-col p-5 bg-primary-color text-text-color-white text-base font-semibold"
          )}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
