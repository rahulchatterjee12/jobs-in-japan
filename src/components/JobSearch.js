import styles from "./JobSearch.module.css";

function JobSearch() {
  return (
    <div className="text-center w-[100vw]">
      <h2 className={styles.title}>Search for Jobs</h2>
      <form className={styles.searchForm}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Job title or keyword"
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
    </div>
  );
}

export default JobSearch;
