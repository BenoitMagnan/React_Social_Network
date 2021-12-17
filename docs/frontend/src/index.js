import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Home from './pages/Home/';
import About from './pages/About';
import Post from './pages/Post';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profil from './pages/Profil';

import { ThemeProvider } from './utils/context/';
import { UserProvider } from './utils/context/';
import GlobalStyle from './utils/style/globalStyle';
import './utils/style/index.css';

ReactDOM.render(
  <Router>
    <ThemeProvider>
      <GlobalStyle />
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/post" element={<Post />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profil" element={<Profil />}></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </UserProvider>
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
