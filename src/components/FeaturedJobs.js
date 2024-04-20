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
    {
      id: 3,
      title: "Marketing Manager",
      company: "Tokyo Marketing Solutions",
      location: "Tokyo, Japan",
    },
    {
      id: 4,
      title: "English Language Teacher",
      company: "Global Education Institute",
      location: "Kyoto, Japan",
    },
    {
      id: 5,
      title: "Sales Representative",
      company: "Nippon Sales Corp.",
      location: "Yokohama, Japan",
    },
    {
      id: 6,
      title: "Financial Analyst",
      company: "Tokyo Financial Services",
      location: "Tokyo, Japan",
    },
    {
      id: 7,
      title: "Customer Support Specialist",
      company: "JapanTech Solutions",
      location: "Nagoya, Japan",
    },
    {
      id: 8,
      title: "UI/UX Designer",
      company: "Digital Innovations Co., Ltd.",
      location: "Fukuoka, Japan",
    },
    {
      id: 9,
      title: "Data Scientist",
      company: "AI Solutions Japan",
      location: "Sapporo, Japan",
    },
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
