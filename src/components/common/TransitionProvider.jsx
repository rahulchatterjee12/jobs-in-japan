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
          className="fixed m-auto w-fit h-fit top-0 bottom-0 left-0 right-0 text-white font-serif text-8xl cursor-default z-40"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {pathName === "/"
            ? "Home"
            : pathName.charAt(1).toUpperCase() + pathName.substring(2)}
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
