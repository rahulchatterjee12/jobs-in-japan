"use client";
import HeroSection from "../components/Home/HeroSection";
import JobSearch from "../components/Home/JobSearch";
import FeaturedJobs from "../components/Home/FeaturedJobs";
import WhyWorkInJapan from "../components/Home/WhyWorkInJapan";
import Testimonials from "../components/Home/Testimonials";
import AdditionalInfo from "../components/Home/AdditionalInfo";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.div
      className="h-full pb-4 items-center"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <HeroSection />
        <JobSearch />
        <FeaturedJobs />
        <WhyWorkInJapan />
        <Testimonials />
        <AdditionalInfo />
      </div>
    </motion.div>
  );
}
