import React, { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filters/Category/InputGroup";

const Location = () => {
  let [id, setId] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let { name, type, dimension } = info;

  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let residents = await Promise.all(
        data.residents.map((residentLink) => {
          return fetch(residentLink).then((res) => res.json());
        })
      );
      setResults(residents);
    })();
  }, [api]);

  return (
    <div className='container'>
      <div className='row mb-4'>
        <h1 className='text-center mb-3'>
          Location:
          <span className='text-primary'>
            {" "}
            {name === "" ? "Unknown" : name}
          </span>
        </h1>
        <h5 className='text-center'>
          {dimension === "" ? "Unknown" : dimension}
        </h5>

        <h6 className='text-center'>Type: {type === "" ? "Unknown" : type}</h6>
      </div>
      <div className='row'>
        <div className='col-lg-3 col-12'>
          <h4 className='text-center mb-4'>Locations:</h4>
          <InputGroup setId={setId} name='Location' total={126} />
        </div>
        <div className='col-lg-8 col-12'>
          <div className='row'>
            <Card results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
