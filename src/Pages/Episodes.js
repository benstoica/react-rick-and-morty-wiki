import React, { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filters/Category/InputGroup";

const Episodes = () => {
  let [id, setId] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let { air_date, name } = info;

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let characters = await Promise.all(
        data.characters.map((characterLink) => {
          return fetch(characterLink).then((res) => res.json());
        })
      );
      setResults(characters);
    })();
  }, [api]);

  return (
    <div className='container'>
      <div className='row mb-4'>
        <h1 className='text-center mb-3'>
          Episode:
          <span className='text-primary'>
            {" "}
            {name === "" ? "Unknown" : name}
          </span>
        </h1>
        <h5 className='text-center'>
          Air Date: {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className='row'>
        <div className='col-lg-3 col-12'>
          <h4 className='text-center mb-4'>Episodes:</h4>
          <InputGroup setId={setId} name='Episode' total={51} />
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

export default Episodes;
