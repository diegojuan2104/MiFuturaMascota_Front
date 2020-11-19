import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";

const Select = () => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    let getData = async () => {
      const result = await axios("http://localhost:5000/animal-types");
      setOptions(result.data);
    };
    getData();
    return () => console.log("clean");
  }, []);
  return (
    <Fragment>
      {options.map((e, i) => {
        return (
          <option defaultValue value="" key={`animal-types${i}`} value={e.id}>
            {e.name}
          </option>
        );
      })}
    </Fragment>
  );
};

export default Select;
