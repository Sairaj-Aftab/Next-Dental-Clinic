import Link from "next/link";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
