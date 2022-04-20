import { useEffect, useState } from "react";

const useFetchAPI = () => {
  const [data, setData] = useState([]);

  useEffect((API) => {
    fetch(API)
      .then((json) => json.json)
      .then((json) => {
        setData(json);
      });
  });
  return data;
};

export default useFetchAPI;
