import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './routes/Home';
import BeerPage from './routes/BeerPage';
import SingleBeer from './routes/SingleBeer';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/beerpage' element={<BeerPage />} />
          <Route path='/singlebeer/:id' element={<SingleBeer />} />
        </Routes>
      </Router>
    </>
  );
};