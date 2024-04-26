"use client";
import styles from "./HeroSection.module.css";
import { useRouter } from "next/navigation";

function HeroSection() {
  const router = useRouter();
  return (
    <div
      className={`flex justify-around text-white flex-col md:flex-row gap-3 items-center`}
    >
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Launch Your Career in Japan</h1>
        <p className={styles.description}>
          Find your dream job and experience the excitement of living and
          working in the Land of the Rising Sun.
        </p>

        <button
          onClick={() => router.push("/jobs")}
          className="overflow-hidden w-32 p-2 h-12 bg-gray-300 text-black border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
        >
          View Jobs
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-orange-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-orange-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-orange-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
          <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
            View Jobs
          </span>
        </button>
      </div>
      <img
        className="w-[350px] rounded-md object-cover"
        src="/images/hero-image.png"
        alt="Japan work opportunities"
      />
    </div>
  );
}

export default HeroSection;
