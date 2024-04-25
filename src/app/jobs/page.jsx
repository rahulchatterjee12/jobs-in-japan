"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Button, TextField } from "@mui/material";
import JobCard from "@/components/common/JobCard";

const page = () => {
  const [jobs, setJobs] = useState([]);
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

  const fetchJobs = async () => {
    try {
      const res = await axios.get(
        `/api/jobs?page=${page}&limit=${perPage}&q=${filters.query}`
      );
      setJobs(res.data.data);
      setCount(res.data.count);
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
      <div className="mt-4">
        <div className="flex mx-2 flex-wrap">
          <TextField
            type="text"
            size="small"
            fullWidth
            color="info"
            label="Search"
            name="query"
            placeholder="Search..."
            value={filters.query}
            onChange={handleChange}
          />
        </div>
        <ul>
          {jobs.map((job) => (
            <div key={job._id}>
              <JobCard />
            </div>
          ))}
        </ul>

        <div className="flex justify-center">
          {count > perPage ? (
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
