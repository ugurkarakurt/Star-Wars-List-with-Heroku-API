import React from 'react'
import { useState, useEffect } from 'react';
import Card from '../Components/Cards/characters/Card.component';
import stormtrooper from '../stormtrooper.svg'

export default function CharacterList(setTitle) {
  const [characters, setCharacters] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    setTitle.props('Character List');
    fetch("https://star-wars-list-api.herokuapp.com/list/characters")
      .then((response) => response.json())
      .then((characters) => setCharacters(characters))
      .then(() => setDataLoaded(true));
  }, [setTitle, dataLoaded]);


  return (
    <div className={`character-list ${dataLoaded ? '' : 'loading'}`}>
      <div className="loading-icon-wrapper">
        <img className="loading-icon" src={stormtrooper} alt="loading-icon" />
      </div>
      {characters.map((character) => (
        <Card props={character} key={character.id} />
      ))}
    </div>
  )
}
