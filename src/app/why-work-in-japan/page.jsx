"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const data = [
  {
    title: "Unleash Your Potential",
    description:
      "Be at the forefront of technological advancements in robotics,automotive, gaming, and more! Gain valuable experience from highly skilled colleagues and learn efficient work practices.",
    img: "/images/why-work-in-japan/1.jpg",
  },
  {
    title: "Thriving Work Environment",
    description:
      "Foster strong relationships with colleagues and experience a collaborative work style. Benefit from a professional and respectful workplace that values individual contributions.",
    img: "/images/why-work-in-japan/2.jpg",
  },
  {
    title: "Immerse Yourself in a Rich Culture",
    description:
      "Explore ancient temples, breathtaking landscapes, exquisite art forms, and delicious cuisine.",
    img: "/images/why-work-in-japan/3.jpg",
  },
  {
    title: "High Standard of Living",
    description:
      "Enjoy excellent public transportation, healthcare systems, and a wide range of leisure activities.",
    img: "/images/why-work-in-japan/4.jpg",
  },
  {
    title: "Personal Growth",
    description:
      "Challenge yourself in a new environment and gain valuable skills applicable across your career. Develop your adaptability and cross-cultural communication skills.",
    img: "/images/why-work-in-japan/5.jpg",
  },
  {
    title: "Unique Experiences",
    description:
      " Participate in vibrant festivals and immerse yourself in unique cultural experiences. Explore stunning landscapes, from snow-capped mountains to serene hot springs. Enjoy a country known for its hospitality and rich traditions.",
    img: "/images/why-work-in-japan/6.jpg",
  },
  {
    title: "Global Career Advantage",
    description:
      "Gain valuable experience in a globally respected market, boosting your resume and career potential. Build connections with professionals from around the world, opening doors to future opportunities. Become a more well-rounded and internationally experienced professional.",
    img: "/images/why-work-in-japan/7.jpg",
  },
];

const page = () => {
  return (
    <motion.div
      className="h-full pb-4 items-center"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="pb-10 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Why Work in Japan?
          </h2>
          {data.map((item) => (
            <div
              className="flex flex-col md:flex-row md:space-x-8 mb-8 items-center bg-white bg-opacity-20 border border-gray-200 p-5 rounded-md"
              style={{ backdropFilter: "blur(20px)" }}
              key={item.img}
            >
              <div className="w-full md:w-1/2">
                <h3 className="text-xl text-white font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-white">{item.description}</p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center mt-2 md:mt-0 md:justify-end items-center">
                <Image
                  width={220}
                  height={220}
                  className="object-cover rounded-lg"
                  src={item.img}
                  alt="Innovation in Japan"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default page;
