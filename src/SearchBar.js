import React from "react";
import { useState } from "react";

const searchMembers = (searchText, listOfMembers) => {
  return listOfMembers.filter((res) =>
    res?.name?.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  );
};

const SearchBar = ({
  setFilteredMembers,
  listOfMembers,
  setIsSearchTextAvailable,
}) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="search-bar">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsSearchTextAvailable(true);
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
    </div>
  );
};

export default SearchBar;
