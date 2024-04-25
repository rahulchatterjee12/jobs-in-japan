import styles from "./WhyWorkInJapan.module.css";

function WhyWorkInJapan() {
  return (
    <section className={`${styles.whyWorkInJapan} text-white`}>
      <h2 className="font-semibold font-serif text-3xl mb-5">
        Why Work in Japan?
      </h2>
      <div className={styles.reasonsList}>
        <div className={styles.reasonItem}>
          <img
            className={styles.reasonIcon}
            src="/images/growth-icon.svg"
            alt="Career growth icon"
          />
          <h3>Career Growth Opportunities</h3>
          <p>
            Thrive in a dynamic work environment and gain valuable experience in
            a global market.
          </p>
        </div>
        <div className={styles.reasonItem}>
          <img
            className={styles.reasonIcon}
            src="/images/high-standard-icon.svg"
            alt="High standard of living icon"
          />
          <h3>High Standard of Living</h3>
          <p>
            Enjoy a high quality of life with excellent healthcare,
            infrastructure, and safety.
          </p>
        </div>
        <div className={styles.reasonItem}>
          <img
            className={styles.reasonIcon}
            src="/images/unique-culture-icon.svg"
            alt="Unique culture icon"
          />
          <h3>Unique Culture and Rich History</h3>
          <p>
            Immerse yourself in a fascinating culture and explore ancient
            traditions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyWorkInJapan;
