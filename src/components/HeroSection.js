import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <div className={`flex justify-between`}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Launch Your Career in Japan</h1>
        <p className={styles.description}>
          Find your dream job and experience the excitement of living and
          working in the Land of the Rising Sun.
        </p>
        <button className={styles.button}>Browse Jobs Now</button>
      </div>
      <img
        className="w-2/5 h-80 rounded-md shadow-md"
        src="images/hero-image.jpg"
        alt="Japan work opportunities"
      />
    </div>
  );
}

export default HeroSection;
