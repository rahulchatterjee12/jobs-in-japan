import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="why-work-in-japan pb-10 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Work in Japan?
        </h2>
        {/* Unleash Your Potential Section */}
        <div
          className="flex flex-col md:flex-row md:space-x-8 mb-8 items-center bg-white bg-opacity-20 border border-gray-200 p-5 rounded-md"
          style={{ backdropFilter: "blur(20px)" }}
        >
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-bold mb-2">Unleash Your Potential</h3>
            <p className="text-gray-700">
              Be at the forefront of technological advancements in robotics,
              automotive, gaming, and more! Gain valuable experience from highly
              skilled colleagues and learn efficient work practices.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-end items-center">
            <Image
              width={220}
              height={220}
              className="object-cover rounded-lg"
              src="/images/why-work-in-japan/1.jpg"
              alt="Innovation in Japan"
            />
          </div>
        </div>
        {/* Thriving Work Environment Section */}
        <div
          className="flex flex-col md:flex-row md:space-x-8 mb-8 items-center bg-white bg-opacity-20 border border-gray-200 p-5 rounded-md"
          style={{ backdropFilter: "blur(20px)" }}
        >
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h3 className="text-xl font-bold mb-2">
              Thriving Work Environment
            </h3>
            <p className="text-gray-700">
              Foster strong relationships with colleagues and experience a
              collaborative work style. Benefit from a professional and
              respectful workplace that values individual contributions.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-start items-center order-1 md:order-2">
            <Image
              width={220}
              height={220}
              className="object-cover rounded-lg"
              src="/images/why-work-in-japan/2.jpg"
              alt="Thriving Work Environment in Japan"
            />
          </div>
        </div>
        {/* Immerse Yourself in a Rich Culture Section */}
        <div
          className="flex flex-col md:flex-row md:space-x-8 mb-8 items-center bg-white bg-opacity-20 border border-gray-200 p-5 rounded-md"
          style={{ backdropFilter: "blur(20px)" }}
        >
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-bold mb-2">
              Immerse Yourself in a Rich Culture
            </h3>
            <p className="text-gray-700">
              Explore ancient temples, breathtaking landscapes, exquisite art
              forms, and delicious cuisine.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-end items-center">
            <Image
              width={220}
              height={220}
              className="object-cover rounded-lg"
              src="/images/why-work-in-japan/3.jpg"
              alt="Japanese Culture"
            />
          </div>
        </div>
        {/* High Standard of Living Section */}
        <div
          className="flex flex-col md:flex-row md:space-x-8 mb-8 items-center bg-white bg-opacity-20 border border-gray-200 p-5 rounded-md"
          style={{ backdropFilter: "blur(20px)" }}
        >
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h3 className="text-xl font-bold mb-2">High Standard of Living</h3>
            <p className="text-gray-700">
              Enjoy excellent public transportation, healthcare systems, and a
              wide range of leisure activities.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-start items-center order-1 md:order-2">
            <Image
              width={220}
              height={220}
              className=" object-cover rounded-lg"
              src="/images/why-work-in-japan/4.jpg"
              alt="High Standard of Living in Japan"
            />
          </div>
        </div>
        {/* Personal Growth Section */}
        <div
          className="flex flex-col md:flex-row md:space-x-8 mb-8 items-center bg-white bg-opacity-20 border border-gray-200 p-5 rounded-md"
          style={{ backdropFilter: "blur(20px)" }}
        >
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-bold mb-2">Personal Growth</h3>
            <p className="text-gray-700">
              Challenge yourself in a new environment and gain valuable skills
              applicable across your career. Develop your adaptability and
              cross-cultural communication skills.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-end items-center">
            <Image
              width={220}
              height={220}
              className="object-cover rounded-lg"
              src="/images/why-work-in-japan/5.jpg"
              alt="Personal Growth in Japan"
            />
          </div>
        </div>
        {/* Unique Experiences Section */}
        <div
          className="flex flex-col md:flex-row md:space-x-8 mb-8 items-center bg-white bg-opacity-20 border border-gray-200 p-5 rounded-md"
          style={{ backdropFilter: "blur(20px)" }}
        >
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h3 className="text-xl font-bold mb-2">Unique Experiences</h3>
            <p className="text-gray-700">
              Participate in vibrant festivals and immerse yourself in unique
              cultural experiences. Explore stunning landscapes, from
              snow-capped mountains to serene hot springs. Enjoy a country known
              for its hospitality and rich traditions.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-start items-center order-1 md:order-2">
            <Image
              width={220}
              height={220}
              className="object-cover rounded-lg"
              src="/images/why-work-in-japan/6.jpg"
              alt="Unique Experiences in Japan"
            />
          </div>
        </div>
        {/* Global Career Advantage Section */}
        <div
          className="flex flex-col md:flex-row md:space-x-8 mb-8 items-center bg-white bg-opacity-20 border border-gray-200 p-5 rounded-md"
          style={{ backdropFilter: "blur(20px)" }}
        >
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-bold mb-2">Global Career Advantage</h3>
            <p className="text-gray-700">
              Gain valuable experience in a globally respected market, boosting
              your resume and career potential. Build connections with
              professionals from around the world, opening doors to future
              opportunities. Become a more well-rounded and internationally
              experienced professional.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-end items-center">
            <Image
              width={220}
              height={220}
              className="object-cover rounded-lg"
              src="/images/why-work-in-japan/7.jpg"
              alt="Global Career Advantage in Japan"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
