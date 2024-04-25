import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const topVariants = {
    close: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
    },
  };
  const centerVariants = {
    close: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    close: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div>
      <div className="md:hidden z-50">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-10 h-8 flex-col justify-between z-50 relative"
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
        </button>
      </div>
      {/* MENU LISR  */}
      {open && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
        >
          {navItems.map((link) => (
            <motion.div variants={listItemVariants} key={link.href}>
              <Link href={link.href}>{link.title}</Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default MobileNavbar;
