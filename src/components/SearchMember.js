import SearchBar from "./SearchBar";
import Card from "./Card";
import data from "../utils/data.json";
import { useState, useEffect } from "react";
import NoResultsFound from "./NoResultsFound";
import { Link } from "react-router-dom";

const CardContainer = ({ filteredMembers }) => {
  if (!filteredMembers.length) return <NoResultsFound />;

  const cards = filteredMembers.map((e) => {
    return (
      <Link to={`/member/${e?.login}`}>
        <Card member={e} key={e?.id} className="card" />
      </Link>
    );
  });
  return cards;
};

const SearchMember = () => {
  const [listOfMembers, setListOfMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const detailsOfUsers = [];
    for (let user in data) {
      const user_data = await fetch(
        `https://api.github.com/users/${data[user].username}`
      );
      const json = await user_data.json();
      detailsOfUsers.push(json);
    }
    setListOfMembers(detailsOfUsers);
  }

  return (
    <div>
      <SearchBar
        listOfMembers={listOfMembers}
        setFilteredMembers={setFilteredMembers}
      />
      <div className="row">
        <CardContainer
          filteredMembers={
            filteredMembers.length ? filteredMembers : listOfMembers
          }
        />
      </div>
    </div>
  );
};

export default SearchMember;
