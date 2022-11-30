import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Card from "./Card";

const data = [
  {
    name: "Harshita Mangla",
    company: "GJUST",
    place: "Faridabad",
    id: 1,
  },
  {
    name: "Sumathi",
    company: "Capgemini",
    place: "Guntur",
    id: 2,
  },
  {
    name: "Shivam Kumar",
    company: "Korber Supply Chain",
    place: "Mirzapur",
    id: 3,
  },
  {
    name: "Atul Singh",
    company: "Appinventiv Technologies",
    place: "Noida",
    id: 4,
  },
  {
    name: "Prajwali",
    company: "Zeta",
    place: "Belikahalli",
    id: 5,
  },
  {
    name: "Pranav",
    company: "ITC Infotech",
    place: "Bengaluru",
    id: 6,
  },
  {
    name: "Priya",
    company: "Manhattan Associates",
    place: "NA",
    id: 7,
  },
  {
    name: "Samridhi Pandey",
    company: "HPE",
    place: "Noida",
    id: 8,
  },
  {
    name: "Sowmya Reddy",
    company: "Landmark Health Pvt Ltd",
    place: "Kithaganur",
    id: 9,
  },
  {
    name: "Uttapal",
    company: "Ramjas College",
    place: "Vijaynagar",
    id: 10,
  },
];

const CardContainer = () => {
  const cards = data.map((e) => {
    return <Card member={e} key={e.id} className="card" />;
  });
  return cards;
};

const App = () => {
  return (
    <div id="heading" className="title">
      <Header />
      <div className="body">
        <div className="row">
          <CardContainer />
        </div>
      </div>
    </div>
  );
};

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<App />);
