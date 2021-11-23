import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.js';

const Main = () => {
  return (
    <Routes > {/* The Routes decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home/>}></Route>
    </Routes>
  );
}


export default Main;