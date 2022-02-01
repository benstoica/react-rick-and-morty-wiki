import React from "react";
import FilterButton from "../FilterButton";

const Species = ({ setSpecies, setPageNumber }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <div className='accordion-item'>
      <h2 className='accordion-header'>
        <button
          className='accordion-button collapsed'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#species'
          aria-expanded='false'>
          Species
        </button>
      </h2>
      <div
        id='species'
        className='accordion-collapse collapse'
        aria-labelledby='species'
        data-bs-parent='#filterAccordion'>
        <div className='accordion-body d-flex flex-wrap gap-3'>
          {species.map((species, index) => (
            <FilterButton
              key={index}
              name='species'
              index={index}
              state={species}
              task={setSpecies}
              setPageNumber={setPageNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Species;
