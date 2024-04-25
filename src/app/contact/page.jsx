"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

const ContactPage = () => {
  const text = "Say Something...";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  };

  return (
    <motion.div
      className="h-full pb-4 items-center"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/2 lg:h-full lg:w-1/2 flex my-auto gap-5 text-white text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 m-2 bg-white bg-opacity-30 rounded-xl text-xl flex flex-col gap-8 justify-center p-24 text-gray-600"
          style={{ backdropFilter: "blur(20px)" }}
        >
          <span className="text-white">Enter Your Message:</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border p-1 rounded-t-md border-b-white outline-none resize-none"
            name="user_message"
          />
          <span className="text-white">Enter Your Email:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border rounded-t-md h-10 p-1 border-b-white outline-none"
          />
          <button className="bg-[#5869bc] rounded font-semibold text-white p-4">
            Send
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
