import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

function genAll(players, mapping, darkTheme) {
  let total = <></>
  console.log(mapping)
  if (players && players.length > 0) {
    total = players.map(arr => {
      let playerObj = {}
      for (let i = 0; i < mapping.length; i++) {
        playerObj[mapping[i].toLowerCase()] = arr[i];
      }
      return <Card playerObj={playerObj} darkTheme={darkTheme} key={arr} />
    })
  }
  return total;
}

const PlayerCards = ({ darkTheme }) => {
  const [players, setplayers] = useState([]);
  const [mapping, setmapping] = useState([]);
  useEffect(() => {
    const url = "https://wardex.herokuapp.com/all";
    axios.get(url).then(
      res => {
        const map = res.data.shift()
        setplayers(res.data);
        setmapping(map);
      }
    )
  }, []);

  return (
    <div className="card-container min-w-full max-w-full flex flex-col lg:flex-row flex-wrap
      justify-center">
      {genAll(players, mapping, darkTheme)}
    </div>
  );
}

export default PlayerCards;