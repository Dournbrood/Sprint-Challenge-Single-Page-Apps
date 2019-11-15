import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <nav className="d-flex justify-content-around my-3">
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
      </nav>
    </header>
  );
}
