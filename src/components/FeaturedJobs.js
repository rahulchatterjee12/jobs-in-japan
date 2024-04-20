import styles from "./FeaturedJobs.module.css";

function FeaturedJobs() {
  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Technovation Inc.",
      location: "Tokyo, Japan",
    },
    {
      id: 2,
      title: "Graphic Designer",
      company: "DesignWorks",
      location: "Osaka, Japan",
    },
    // Add more job listings here
  ];

  return (
    <section className={styles.featuredJobs}>
      <h2 className="font-semibold font-serif text-3xl mb-5">Featured Jobs</h2>
      <div className={styles.jobList}>
        {jobs.map((job) => (
          <div key={job.id} className={styles.jobCard}>
            <h3 className={styles.jobTitle}>{job.title}</h3>
            <p className={styles.companyInfo}>
              {job.company} - {job.location}
            </p>
            <button className={styles.jobButton}>Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedJobs;
