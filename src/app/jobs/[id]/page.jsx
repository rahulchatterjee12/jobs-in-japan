"use client";
import { Box, CircularProgress, Modal } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const id = usePathname();
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [resume, setResume] = useState();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleClose = () => {
    setOpen(false);
    setIsDone(false);
  };

  useEffect(() => {
    axios.get(`/api${id}`).then((res) => {
      setData(res.data.data);
    });
  }, [id]);

  const handleUpload = async () => {
    if (resume) {
      const formData = new FormData();
      formData.append("file", resume);
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("email", email);

      const res = await axios.post(`/api${id}/apply`, formData);
      setIsDone(true);
    }
  };

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
                <div className="w-[100vw] md:w-full mx-auto">
                  {isDone ? (
                    <div className="w-[100px] h-[100px] rounded-md">
                      <Image
                        fill
                        src="/images/verified.gif"
                        className="object-contain rounded-md"
                      />
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="bg-white p-3 rounded-md w-[90vw] mx-auto md:w-full"
                    >
                      <h2>Upload your resume to apply</h2>
                      <div className="flex flex-col gap-4 mt-2">
                        <input
                          className="p-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
                          type="text"
                          value={name}
                          placeholder="Name"
                          onChange={(e) => setName(e.target.value)}
                          required
                        />

                        <input
                          className="p-2  block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
                          type="email"
                          value={email}
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />

                        <input
                          className="p-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
                          type="number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Phone"
                          required
                        />
                        <div>
                          <label
                            className="p-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            htmlFor="file_input"
                          >
                            Upload Resume
                          </label>
                          <input
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
                            id="file_input"
                            type="file"
                            onChange={(e) => setResume(e.target.files[0])}
                            required
                          />
                          <p
                            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                            id="file_input_help"
                          >
                            PDF (MAX. 2MB).
                          </p>
                        </div>
                        <div className="flex w-full justify-center mt-5">
                          <button
                            onClick={handleUpload}
                            type="submit"
                            className="overflow-hidden w-32 p-2 h-12 bg-[#1f2937] text-white border-none rounded-md text-xl font-bold cursor-pointer relative group"
                          >
                            Upload
                            <span className="absolute w-36 h-32 -top-8 -left-2 bg-orange-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
                            <span className="absolute w-36 h-32 -top-8 -left-2 bg-orange-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
                            <span className="absolute w-36 h-32 -top-8 -left-2 bg-orange-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
                            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 ">
                              Upload
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
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
