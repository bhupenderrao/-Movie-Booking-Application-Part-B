import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './screens/home/Home'
import Details from './screens/details/Details'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import BookShow from './screens/bookshow/BookShow';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path={"/details"} element={<Details />} />
        <Route exact path={"/bookshow"} element={<BookShow />} />
      </Routes>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);
