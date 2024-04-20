import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; 2024 Work in Japan. All rights reserved.
      </p>
      <nav className={styles.socialLinks}>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <img src="/facebook-icon.svg" alt="Facebook icon" />
        </a>
        <a
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <img src="/twitter-icon.svg" alt="Twitter icon" />
        </a>
        {/* Add links to other social media platforms here */}
      </nav>
    </footer>
  );
}

export default Footer;
