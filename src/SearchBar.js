import React from "react";
import { useState } from "react";
import data from "./resources/data.json";

const searchMembers = (searchText) => {
  return data.filter((res) =>
    res.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  );
};

const SearchBar = ({ setFilteredMembers }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="search-bar">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const filteredMembers = searchMembers(searchText);
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
    </div>
  );
};

export default SearchBar;
