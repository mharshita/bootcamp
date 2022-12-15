import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Card from "./Card";
import data from "./resources/data.json";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import NoResultsFound from "./NoResultsFound";

const CardContainer = ({ filteredMembers }) => {
  if (!filteredMembers.length) return <NoResultsFound />;

  const cards = filteredMembers.map((e) => {
    return <Card member={e} key={e.id} className="card" />;
  });
  return cards;
};

const App = () => {
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
    <div id="heading" className="title">
      <Header />
      <div className="body">
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
    </div>
  );
};

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<App />);
