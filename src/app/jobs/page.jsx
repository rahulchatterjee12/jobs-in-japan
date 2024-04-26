"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Button, CircularProgress, TextField } from "@mui/material";
import JobCard from "@/components/common/JobCard";

const page = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    try {
      axios
        .get(`/api/jobs?page=${page}&limit=${perPage}&q=${filters.query}`)
        .then((res) => {
          setJobs(res.data.data);
          setCount(res.data.count);
          setLoading(false);
        });
    } catch (err) {
      console.error("Error fetching jobs:", err);
    } finally {
      setLoading(false);
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
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              name="query"
              placeholder="Search..."
              value={filters.query}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-5">
          {jobs.map((job) => (
            <div key={job._id}>
              <JobCard job={job} />
            </div>
          ))}
        </div>

        {loading ? (
          <div className="w-[100%] flex justify-center mt-4">
            <CircularProgress />
          </div>
        ) : (
          ""
        )}

        <div className="flex justify-center mt-5">
          {count > perPage && !loading ? (
            <Button
              size="small"
              variant="outlined"
              onClick={() => setPerPage((pre) => pre + 10)}
            >
              Load More
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default page;
