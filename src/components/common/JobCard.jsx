import React from "react";
import styles from "./JobCard.module.css";
import Link from "next/link";

const JobCard = ({ job }) => {
  console.log(job);
  return (
    <Link href={`/jobs/${job._id}`} className={styles.card}>
      <p className={styles.card_title}>{job.title}</p>
      <p className={`${styles.company_title}`}>{job.company}</p>
      <div className="flex gap-5">
        <p className={styles.small_desc}>{job.experienceLevel}</p>
        <p className={styles.small_desc}>{job.employmentType}</p>
      </div>
      <p className={styles.small_desc}>{job.description}</p>
      <div className={styles.go_corner}>
        <div className={styles.go_arrow}>→</div>
      </div>
    </Link>
  );
};
export default JobCard;
