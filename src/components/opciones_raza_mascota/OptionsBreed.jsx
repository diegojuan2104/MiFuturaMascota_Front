import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";

import { URL } from "../../config/vars"

const OptionsBreed = ({ id }) => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    if (id !== "") {
      let getData = async () => {
        const result = await axios( URL+ "/animal-breeds/" + id);
        setOptions(result.data);
      };
      getData();
    }else{
      setOptions([])
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
