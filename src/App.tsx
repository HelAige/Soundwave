import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Discover from './components/Discover';
import FeelTheMusic from './components/FeelTheMusic';
import Join from './components/Join';
import Layout from './components/Layout';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<FeelTheMusic/>} />
          <Route path='/discover' element={<Discover/>} />
          <Route path='/join' element={<Join/>} />
        </Route>
      </Routes>
      
    </>
  );
}

export default App

