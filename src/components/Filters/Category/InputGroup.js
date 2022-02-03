import React from "react";

const InputGroup = ({ total, name, setId }) => {
  return (
    <div className='input-group mb-3'>
      <select
        onChange={(e) => setId(e.target.value)}
        className='form-select'
        id={name}>
        <option defaultValue='Choose'>Choose...</option>
        {[...Array(total).keys()].map((episodeNumber, index) => {
          return (
            <option key={index} value={episodeNumber + 1}>
              {name} - {episodeNumber + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;
