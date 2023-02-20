import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Details of all the members of Storm Troopers</h1>
      <Link to="/search">
        <h2>Click Here to Search Members</h2>
      </Link>
    </>
  );
};

export default Home;
