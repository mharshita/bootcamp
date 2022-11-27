import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";

//Nested header using React.createElement
// const heading = React.createElement("div", {id: "heading", className: "title"}, [
//     React.createElement("h1", {id: "head1"}, "Hello World!"),
//     React.createElement("h2", {id: "head2"}, "I am Harshita Mangla"),
//     React.createElement("h3", {id: "head3"}, "I am a software engineer")
// ]);

//Functional component of header
const Title = () => {
  return <h1 id="head1">Hello World!</h1>;
};

const App = () => {
  return (
    <div id="heading" className="title">
      <Header />
      <div className="body">
        <Title />
        <h2 id="head2">I am Harshita Mangla</h2>
        <h3 id="head3">I am a software engineer</h3>
      </div>
    </div>
  );
};

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<App />);
