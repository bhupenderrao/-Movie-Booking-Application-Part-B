import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './screens/home/Home'
import Details from './screens/details/Details'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import moviesData from './assets/moviesData';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={`/details/movie:` + moviesData.id} element={<Details />} />
      </Routes>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);
