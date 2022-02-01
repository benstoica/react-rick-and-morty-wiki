import React from "react";
import styles from "./Search.module.scss";

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className='d-flex justify-content-center gap-4 mb-5'>
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        className={styles.input}
        type='text'
        placeholder='Search for characters...'
      />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className={`btn btn-primary fs-5 ${styles.btn}`}>
        Search
      </button>
    </form>
  );
};

export default Search;
