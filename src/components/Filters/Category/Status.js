import React from "react";
import FilterButton from "../FilterButton";

const Status = ({ setPageNumber, setStatus }) => {
  let status = ["Alive", "Dead", "Unknown"];

  return (
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingThree'>
        <button
          className='accordion-button'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#status'
          aria-expanded='true'>
          Status
        </button>
      </h2>
      <div
        id='status'
        className='accordion-collapse collapse show'
        aria-labelledby='status'
        data-bs-parent='#filterAccordion'>
        <div className='accordion-body d-flex flex-wrap gap-3'>
          {status.map((state, index) => (
            <FilterButton
              key={index}
              name='status'
              index={index}
              state={state}
              task={setStatus}
              setPageNumber={setPageNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
