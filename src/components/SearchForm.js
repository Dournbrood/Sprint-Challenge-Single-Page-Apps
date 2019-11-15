import React, { useState, useEffect } from "react";

// export default function SearchForm() {

function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState();

  const handleChange = event => {
    setSearchTerm(event.target.value);
  }

  const submitHandler = event => {
    event.preventDefault();

    const result = props.characters.filter((element) => {
      return element.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    props.search(result);
    console.log(result);
  };

  return (
    <section className="search-form">
      <form onSubmit={submitHandler} className="d-flex justify-content-around">
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

// const [searchTerm, setSearchTerm] = useState("");

// const handleChange = event => {
//   setSearchTerm(event.target.value);
// }



// useEffect(() => {
//   const results = characters.filter((element) => {
//     return (element.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
//   });
//   setCharacters(results)
// }, [setCharacters, characters, searchTerm])


// }

export default SearchForm;
