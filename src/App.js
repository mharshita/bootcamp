import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Card from "./Card";
import data from "./resources/data.json";
import SearchBar from "./SearchBar";
import { useState } from "react";

const CardContainer = ({ filteredMembers }) => {
  const cards = filteredMembers.map((e) => {
    return <Card member={e} key={e.id} className="card" />;
  });
  return cards;
};

const App = () => {
  const [filteredMembers, setFilteredMembers] = useState(data);

  return (
    <div id="heading" className="title">
      <Header />
      <div className="body">
        <SearchBar setFilteredMembers={setFilteredMembers} />
        <div className="row">
          <CardContainer filteredMembers={filteredMembers} />
        </div>
      </div>
    </div>
  );
};

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<App />);
