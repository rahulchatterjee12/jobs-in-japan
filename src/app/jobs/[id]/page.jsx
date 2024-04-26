"use client";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const id = usePathname();
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`/api${id}`).then((res) => {
      setData(res.data.data);
    });
  }, [id]);

  return (
    <>
      {!data && (
        <div className="w-[100% flex justify-center">
          <CircularProgress />
        </div>
      )}
      {data && (
        <div className="flex gap-12 p-10 justify-around flex-col-reverse md:flex-row">
          <div className="md:w-2/5">
            <h1 className="text-4xl font-bold mt-3 text-[#fff]">
              {data.title}
            </h1>
            <div className="mt-4">
              <h4 className="text-[#fff] text-2xl font-semibold">Role</h4>
              <div className="text-[#ececec]">{data.role}</div>
            </div>
            <div className="mt-4">
              <h4 className="text-[#fff] text-2xl font-semibold">
                Description
              </h4>
              <p className="text-[#fff]">{data.description}</p>
            </div>
            <div className="mt-4">
              <h4 className="text-[#fff] text-2xl font-semibold">
                Responsibilities
              </h4>
              <p className="text-[#fff]">{data.responsibilities}</p>
            </div>
            <div className="mt-4">
              <h4 className="text-[#fff] text-2xl font-semibold">Skills</h4>
              <p className="text-[#fff] gap-2">{data.skillsRequired}</p>
            </div>
            <div className="mt-4">
              <h4 className="text-[#fff] text-2xl font-semibold">
                Additional Information
              </h4>
              <p className="text-[#fff]">{data.additionalInformation}</p>
            </div>
          </div>
          <div className="md:w-1/4 bg-[#fff] shadow-md h-fit py-10 rounded-md">
            <div className="relative flex justify-center">
              <Image
                src="/images/logo.png"
                width={100}
                height={100}
                alt="logo"
              />
            </div>
            <h3 className="text-[#3d3d3d] text-xl font-semibold text-center">
              {data.company}
            </h3>
            <div className="text-start mt-4 px-8">
              <h3 className="text-[#5a5f65] text-lg font-semibold ">
                {new Date(data.datePosted).toLocaleDateString()}
              </h3>
              <h3 className="text-[#5a5f65] text-lg font-semibold ">
                {data.location}
              </h3>
              <h3 className="text-[#5a5f65] text-lg font-semibold ">
                {data.salary}
              </h3>
            </div>
            <div className="flex justify-center mt-6">
              <button className="bg-orange-500 text-white px-16 py-2 rounded-3xl">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default page;
