import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "./Card";

const Member = () => {
  const { id } = useParams();
  const [memberInfo, setMemberInfo] = useState([]);

  useEffect(() => {
    fetchMemberInfo();
  }, []);

  async function fetchMemberInfo() {
    const info = await fetch("https://api.github.com/users/" + id);
    const json = await info.json();
    setMemberInfo(json);
  }

  return (
    <>
      <h1>Member Data</h1>
      <Card member={memberInfo} />
    </>
  );
};

export default Member;
