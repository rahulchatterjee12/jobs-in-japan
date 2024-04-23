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
      <div className="flex flex-col md:flex-row">
        <div className="w-full mb-8 md:mb-0">
          <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-8">About JOB HUNT</h2>
            <p class="text-gray-900 text-xl leading-relaxed">
              JOB HUNT is a company passionate about empowering individuals to
              find their dream careers in Japan. Founded in [Year] by
              [Founder(s) Name(s)], we strive to bridge the gap between talented
              professionals and exciting opportunities in the Japanese job
              market.
              <br />
              We believe in:
              <ul class="list-disc pl-4 mt-4">
                <li class="text-gray-900">
                  Empowering Job Seekers: We provide comprehensive resources and
                  personalized guidance to help you navigate the unique
                  landscape of job hunting in Japan.
                </li>
                <li class="text-gray-900">
                  Connecting with Top Employers: We partner with leading
                  Japanese companies across various industries to offer a
                  diverse range of job openings.{" "}
                </li>
                <li class="text-gray-900">
                  Promoting Cultural Understanding: We bridge cultural
                  differences and equip you with the knowledge and skills to
                  thrive in a Japanese work environment.{" "}
                </li>
              </ul>
            </p>

            <p class="text-gray-900 text-xl leading-relaxed mt-8">
              Our journey began with a vision to make the job search process in
              Japan more accessible and efficient for international and local
              candidates alike. Today, we're a team of dedicated professionals
              with extensive experience in the Japanese recruitment scene. We're
              passionate about helping you achieve your career goals and build a
              fulfilling future in Japan.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <h3 className="text-2xl text-center font-bold mb-10">Our Team</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Team Member Card 1 */}
        <div className="team-member">
          <img
            className="w-48 h-48 rounded-full mx-auto mb-2 object-cover "
            src="/images/profile.svg" // Replace with your image
            alt="Team Member 1"
          />
          <h4 className="text-xl font-bold text-center mb-1">John Doe</h4>
          <p className="text-gray-900 text-center">Co-founder & CEO</p>
        </div>

        {/* Team Member Card 2 */}
        <div className="team-member">
          <img
            className="w-48 h-48 rounded-full mx-auto mb-2 object-cover"
            src="/images/profile.svg"
            alt="Team Member 2"
          />
          <h4 className="text-xl font-bold text-center mb-1">Jane Smith</h4>
          <p className="text-gray-900 text-center">Frontend Engineer</p>
        </div>

        <div className="team-member">
          <img
            className="w-48 h-48 rounded-full mx-auto mb-2 object-cover"
            src="/images/profile.svg"
            alt="Team Member 2"
          />
          <h4 className="text-xl font-bold text-center mb-1">Jon Fosse</h4>
          <p className="text-gray-900 text-center">Backend Engineer</p>
        </div>
      </div>
    </motion.div>
  );
};

export default page;
