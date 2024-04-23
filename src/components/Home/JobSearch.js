import styles from "./JobSearch.module.css";

function JobSearch() {
  return (
    <div className="text-center  mt-10">
      <h2 className={styles.title}>Search for Jobs</h2>
      <form className={styles.searchForm}>
        <input
          type="text"
          className="bg-white bg-opacity-30 p-[15px] rounded-md mx-4 text-gray-800"
          placeholder="Job title or keyword"
          style={{ backdropFilter: "blur(20px)" }}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
    </div>
  );
}

export default JobSearch;
