"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { CircularProgress } from "@mui/material";
import JobCard from "@/components/common/JobCard";

const page = () => {
  const [jobs, setJobs] = useState();
  const [filters, setFilters] = useState({
    query: "",
  });
  const [page] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchJobs();
  }, [page, perPage, filters]);

  useEffect(() => {
    setPerPage(10);
  }, [filters]);

  const fetchJobs = () => {
    try {
      axios
        .get(`/api/jobs?page=${page}&limit=${perPage}&q=${filters.query}`)
        .then((res) => {
          setJobs(res.data.data);
          setCount(res.data.count);
        });
    } catch (err) {
      console.error("Error fetching jobs:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <motion.div
      className="h-full pb-4 items-center"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="mt-4 mx-5">
        <div className="w-[80%] mx-auto">
          <div className="flex justify-end">
            <div className="relative flex items-center w-full md:w-1/3 h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
              <div className="grid place-items-center h-full w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                className="h-full w-full outline-none text-sm text-gray-700"
                type="text"
                name="query"
                placeholder="Search..."
                value={filters.query}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-5">
          {jobs &&
            jobs.map((job) => (
              <div key={job._id}>
                <JobCard job={job} />
              </div>
            ))}
        </div>

        {!jobs ? (
          <div className="w-[100%] flex justify-center mt-4">
            <CircularProgress />
          </div>
        ) : (
          ""
        )}

        <div className="flex justify-center mt-5">
          {count > perPage ? (
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              onClick={() => setPerPage((pre) => pre + 10)}
            >
              Load More
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default page;
