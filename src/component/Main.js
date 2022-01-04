import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.js';
import PlayerDetail from '../pages/PlayerDetail.js';
import About from '../pages/About.js'

const Main = () => {
  return (
    <Routes > {/* The Routes decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/About' element={<About/>}></Route>
      <Route exact path='/player/:id' element={<PlayerDetail/>}></Route>
    </Routes>
  );
}


export default Main;