"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Job Search",
    href: "/jobs",
  },
  {
    title: " Why Work in Japan",
    href: "/why-work-in-japan",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

const Navbar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <nav
      className="bg-white bg-opacity-30 border sticky top-0 z-50"
      style={{ backdropFilter: "blur(20px)" }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/images/logo.svg" className="h-8" alt="Samurai Job Hunt" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Job Hunt
          </span>
        </a>

        <MobileNavbar />

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {navItems.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-2 px-3 rounded md:bg-transparent ${
                    pathName === link.href ? "text-orange-500" : "text-white"
                  } md:p-0`}
                  aria-current="page"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
