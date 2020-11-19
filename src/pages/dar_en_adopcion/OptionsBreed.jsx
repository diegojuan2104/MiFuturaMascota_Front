import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";

const OptionsBreed = ({ id }) => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    if (id !== "") {
      let getData = async () => {
        const result = await axios("http://localhost:5000/animal-breeds/" + id);
        setOptions(result.data.breeds);
      };
      getData();
    }
    return () => console.log("clean");
  }, [id]);
  return (
    <Fragment>
      {options.map((e, i) => {
        return (
          <option defaultValue value="" key={`animal-breeds${i}`} value={e.id}>
            {e.name}
          </option>
        );
      })}
    </Fragment>
  );
};

export default OptionsBreed;
