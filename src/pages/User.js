import React from "react";
import useFetchApi from "../services/hooks/useFetchApi";

export default function () {
  const [data, loading, error] = useFetchApi("users");

  if (loading) {
    return <h1>Loading....</h1>;
  }
  if (error) {
    return <h1>Server Error...</h1>;
  }
  return (
    <>
      <h1>Ini dari page users</h1>
      <ul>
        {data.map((el) => {
          return <li>{el.name}</li>;
        })}
      </ul>
    </>
  );
}
