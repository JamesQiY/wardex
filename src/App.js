import React, { useState, useEffect } from 'react';
import Main from './component/Main';
import axios from 'axios';

function App() {
  const [players, setplayers] = useState([]);
  useEffect(() => {
    const url = "https://wardex.herokuapp.com/all";
    axios.get(url).then(
      res => {
        setplayers(res.data);
      }
    )
  }, []);

  return (
    <div className="h-full">
      <Main players={players}/>
    </div>
  );
}

export default App;
