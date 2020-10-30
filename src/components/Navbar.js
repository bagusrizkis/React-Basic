import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users">People</Link>
    </nav>
  );
}
