"use client";
import { Backdrop, Box, CircularProgress, Modal } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const id = usePathname();
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

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
              <button
                onClick={() => setOpen(true)}
                className="overflow-hidden w-32 p-2 h-12 bg-[#1f2937] text-white border-none rounded-md text-xl font-bold cursor-pointer relative group"
              >
                Apply Now
                <span className="absolute w-36 h-32 -top-8 -left-2 bg-orange-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
                <span className="absolute w-36 h-32 -top-8 -left-2 bg-orange-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
                <span className="absolute w-36 h-32 -top-8 -left-2 bg-orange-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
                <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 ">
                  Apply Now
                </span>
              </button>
            </div>
          </div>
          <>
            <Modal open={open} onClose={handleClose}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="bg-white p-3">
                  <label
                    htmlFor="formFileLg"
                    className="mb-2 inline-block text-neutral-500 dark:text-neutral-400"
                  >
                    Large file input example
                  </label>
                  <input
                    className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-[0.32rem] text-base font-normal leading-[2.15] text-surface transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] file:text-surface focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none dark:border-white/70 dark:text-white  file:dark:text-white"
                    id="formFileLg"
                    type="file"
                  />
                </div>
              </Box>
            </Modal>
          </>
        </div>
      )}
    </>
  );
};
export default page;
