import React from "react";
import FilterButton from "../FilterButton";

const Gender = ({ setGender, setPageNumber }) => {
  let genders = ["Female", "Male", "Genderless", "Unknown"];

  return (
    <div className='accordion-item'>
      <h2 className='accordion-header'>
        <button
          className='accordion-button collapsed'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#gender'
          aria-expanded='false'>
          Gender
        </button>
      </h2>
      <div
        id='gender'
        className='accordion-collapse collapse'
        aria-labelledby='gender'
        data-bs-parent='#filterAccordion'>
        <div className='accordion-body d-flex flex-wrap gap-3'>
          {genders.map((gender, index) => (
            <FilterButton
              key={index}
              name='gender'
              index={index}
              state={gender}
              task={setGender}
              setPageNumber={setPageNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gender;
