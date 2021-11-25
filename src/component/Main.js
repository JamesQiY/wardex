import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.js';
import PlayerDetail from '../pages/PlayerDetail.js';

const Main = ({players}) => {
  return (
    <Routes > {/* The Routes decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home players={players}/>}></Route>
      <Route exact path='/player/:player' element={<PlayerDetail players={players}/>}></Route>
    </Routes>
  );
}


export default Main;