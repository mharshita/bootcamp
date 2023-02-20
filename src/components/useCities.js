import { useEffect, useState } from "react";
import stateMap from "../utils/state.json";

const useCities = (state) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchData();
    async function fetchData() {
      const json = stateMap[state];
      setCities(json);
    }
  }, [state]);

  return cities;
};

export default useCities;
