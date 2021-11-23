import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

function genAll(players, darkTheme) {
  let total = <></>
  if (players && players.length > 0) {
    total = players.map(arr =>
      <Card playerArr={arr} darkTheme={darkTheme} key={arr} />)
  }
  return total;
}

const PlayerCards = ({ darkTheme }) => {
  const [players, setplayers] = useState([]);
  useEffect(() => {
    const url = "https://wardex.herokuapp.com/all";
    axios.get(url).then(
      res => {
        res.data.shift()
        setplayers(res.data);
      }
    )
  }, []);

  return (
    <div className="card-container">
      {genAll(players, darkTheme)}
    </div>
  );
}

export default PlayerCards;