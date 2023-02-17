import React from "react";
import { useState } from "react";
import stateObj from "../utils/state.json";
import useCities from "./useCities";

const searchMembers = (searchText, listOfMembers) => {
  return listOfMembers.filter((res) =>
    res?.name?.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  );
};

const SearchBar = ({ setFilteredMembers, listOfMembers }) => {
  const [searchText, setSearchText] = useState("");
  const [stateName, setStateName] = useState("Andaman and Nicobar Islands");
  const [cityName, setCityName] = useState("");

  const cityList = useCities(stateName);

  return (
    <div className="search-bar">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const filteredMembers = searchMembers(searchText, listOfMembers);
          setFilteredMembers(filteredMembers);
        }}
      >
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchText}
          id="member"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="search-button">Search</button>
      </form>
      <select value={stateName} onChange={(e) => setStateName(e.target.value)}>
        {Object.keys(stateObj).map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
      <select value={cityName} onChange={(e) => setCityName(e.target.value)}>
        {cityList.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;
