import { useRouteError } from "react-router-dom";

const Error = () => {
  const errorData = useRouteError();
  return (
    <>
      <h1>Error !!!</h1>
      <h2>Details: {errorData.statusText || errorData.message}</h2>
    </>
  );
};

export default Error;
