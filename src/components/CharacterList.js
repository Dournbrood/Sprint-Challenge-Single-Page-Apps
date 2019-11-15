import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import { Col, Row } from "reactstrap";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  // TODO: Add useState to track data from useEffect

  const search = param => {
    setSearchResults(param);
  };

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setCharacters(response.data.results);
        setSearchResults(response.data.results);
        console.log(response)
      })
      .catch((error) => {
        console.log(`Server responded with ${error}, falling back to backup API...`);
        Axios.get("https://rick-api.herokuapp.com/api/")
          .then((response) => {
            setCharacters(response.data.results);
            setSearchResults(response.data.results);
            console.log(response);
          })
          .catch((error) => {
            console.log(`Backup API request failed with ${error}, both APIs are down or backed up, check again later.`);
          })
      })
  }, []);

  return (
    <section className="character-list">
      <SearchForm search={search} characters={characters} />
      <Row>
        {searchResults.map(element => {

          return (
            <Col xs="12" sm="6" md="4" className="my-3 mx-auto">
              <CharacterCard key={element.id} data={element} />
            </Col>);
        })}
      </Row>
    </section>
  );
}
