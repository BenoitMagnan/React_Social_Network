import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/';
import About from './pages/About';
import Prout from './pages/Prout';
import Signup from './pages/Signup';
import Login from './pages/Login';

import { ThemeProvider } from './utils/context/';
import GlobalStyle from './utils/style/globalStyle';
import './utils/style/index.css';

ReactDOM.render(
  <Router>
    <ThemeProvider>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/prout" element={<Prout />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
