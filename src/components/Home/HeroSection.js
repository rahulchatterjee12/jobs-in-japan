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
        <button onClick={() => router.push("/jobs")} className={styles.button}>
          Browse Jobs Now
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
