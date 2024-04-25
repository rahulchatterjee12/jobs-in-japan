import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className="border-gray-200 bg-white bg-opacity-30 border text-center mx-4 md:mx-28 mb-5 p-2">
      <p className={`${styles.copyright} text-white`}>
        &copy; 2024 Work in Japan. All rights reserved.
      </p>
      <nav className={styles.socialLinks}>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <img src="/images/facebook-icon.svg" alt="Facebook icon" />
        </a>
        <a
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <img src="/images/twitter-icon.svg" alt="Twitter icon" />
        </a>
        {/* Add links to other social media platforms here */}
      </nav>
    </footer>
  );
}

export default Footer;
