import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import { Col, Row } from "reactstrap";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  // TODO: Add useState to track data from useEffect


  //This little function right here... This was a nightmare to figure out. I basically spent 2 hours trying my 
  //hardest to pass setCharacters, a state setter, to the child component <SearchForm/>. This does not work, do not
  //attempt it, ever. 

  //You are more than welcome to pass the parent's actual STATE to a child component. Works just fine, as long as you destructure it.

  //If you need to access a parent's state setter method, use a callback function. Just like this one RIGHT HERE.
  //Passing this callback as a method to <SearchForm/> works just fine and you should never do anything else.

  //DO. NOT. TRY. TO PASS STATE SETTERS. AS METHODS. TO CHILDREN. END OF STORY.
  //U S E   C A L L B A C K S
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
        {searchResults.map((element, index) => {

          return (
            <Col xs="12" sm="6" md="4" className="my-3 mx-auto" key={index}>
              <CharacterCard key={index} data={element} />
            </Col>);
        })}
      </Row>
    </section>
  );
}
