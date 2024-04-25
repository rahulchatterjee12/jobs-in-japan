import styles from "./AdditionalInfo.module.css";

function AdditionalInfo() {
  return (
    <section className={`${styles.additionalInfo} text-white`}>
      <h2 className="font-semibold font-serif text-3xl mb-5">
        Additional Information
      </h2>
      <div className={styles.infoList}>
        <div className={styles.infoItem}>
          <img
            className={styles.infoIcon}
            src="/images/visa-icon.svg"
            alt="Visa information icon"
          />
          <h3>Visa Information</h3>
          <p>
            Learn about the different types of visas available for work in
            Japan.
          </p>
        </div>
        <div className={styles.infoItem}>
          <img
            className={styles.infoIcon}
            src="/images/job-search-icon.svg"
            alt="Job search tips icon"
          />
          <h3>Job Search Tips</h3>
          <p>
            Get valuable advice on how to write a compelling resume and ace your
            job interview.
          </p>
        </div>
        <div className={styles.infoItem}>
          <img
            className={styles.infoIcon}
            src="/images/culture-icon.svg"
            alt="Living in Japan icon"
          />
          <h3>Living in Japan</h3>
          <p>
            Explore resources to help you adjust to life in Japan, including
            culture, housing, and cost of living.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AdditionalInfo;
