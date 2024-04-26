"use client";
import React from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-[#3F2071] to-[#004C9B] "
      >
        <motion.div
          className="w-screen h-screen fixed bg-[#57838b] rounded-b-[100px] z-30"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto w-fit h-fit top-0 bottom-0 left-0 right-0 text-white font-serif text-4xl md:text-8xl cursor-default z-40"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="flex gap-2">
            <svg
              className="animate-spin h-8 w-8 text-white mr-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>

            <span className="text-white text-3xl font-bold">Loading...</span>
          </div>
        </motion.div>
        <motion.div
          className="w-screen h-screen fixed bg-[#57838b] rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{
            height: "0vh",
            transition: {
              delay: 0.5,
            },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
