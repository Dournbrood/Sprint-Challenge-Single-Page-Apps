import React, { useState, useEffect } from "react";

function SearchForm(props) {

  //This is what destructuring props, or any object looks like. Very handy.
  //Basically, down on lines 19-22, destructuring lets us use `characters` instead of `props.characters`
  //along with `search()` instead of `props.search()`. It shorthands objects, effectively.

  const { characters, search } = props;

  //And yes, it works on methods.

  const handleChange = event => {

    const result = characters.filter((element) => {
      return element.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    search(result);
    console.log(result);
  }

  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <section className="search-form">
      <form className="d-flex justify-content-around" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="character"
          id="character"
          placeholder="Search"
        ></input>
      </form>
    </section >
  );
}

export default SearchForm;
