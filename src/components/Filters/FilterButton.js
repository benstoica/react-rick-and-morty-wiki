import React from "react";

const FilterButton = ({ name, index, state, task, setPageNumber }) => {
  return (
    <div>
      <style jsx>
        {`
          .form-check-input:checked + label {
            background-color: #0b5ed7;

            color: #fff;
          }

          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className='form-check'>
        <input
          onClick={() => {
            setPageNumber(1);
            task(state);
          }}
          className='form-check-input'
          type='radio'
          name={name}
          id={`${name}-${index}`}
        />
        <label className='btn btn-outline-primary' htmlFor={`${name}-${index}`}>
          {state}
        </label>
      </div>
    </div>
  );
};

export default FilterButton;
