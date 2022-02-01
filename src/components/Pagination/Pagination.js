import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    <ReactPaginate
      className='pagination justify-content-center gap-4 my-4'
      nextLabel='Next'
      nextClassName='btn btn-primary'
      nextLinkClassName={`${styles.button}`}
      previousLabel='Prev'
      previousClassName='btn btn-primary'
      previousLinkClassName={`${styles.button}`}
      pageClassName='page-item'
      pageLinkClassName='page-link'
      activeClassName='active'
      pageCount={info?.pages}
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
    />
  );
};

export default Pagination;
