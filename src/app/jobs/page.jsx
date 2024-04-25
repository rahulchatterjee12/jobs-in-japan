"use client";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.div
      className="h-full pb-4 items-center"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      jobs
    </motion.div>
  );
};

export default page;
