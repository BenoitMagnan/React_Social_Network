import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Home from './pages/Home/';
import Post from './pages/Post';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profil from './pages/Profil';

import { ThemeProvider } from './utils/context/';
import { UserProvider } from './utils/context/';
import GlobalStyle from './utils/style/globalStyle';
import './utils/style/index.css';
import axios from 'axios';

function IsTokenExpired() {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  axios
    .get('http://localhost:3000/api/auth/profil', {
      params: { userId: userId },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
    .then((response) => {
      if (response.status !== 403) {
        console.log("Le token n'a pas encore expiré");
        ReactDOM.render(
          <Router>
            <ThemeProvider>
              <GlobalStyle />
              <UserProvider>
                <Routes>
                  <Route path="/" element={<Home />}></Route>
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
      }
    })
    .catch(() => {
      localStorage.clear();
      localStorage.setItem('isLoggedIn', false);
      console.log(localStorage);
      ReactDOM.render(
        <Router>
          <ThemeProvider>
            <GlobalStyle />
            <UserProvider>
              <Routes>
                <Route path="/" element={<Home />}></Route>
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
    });

  // window.location.assign('http://localhost:3001/login');
  // const timeStamp = parseInt(localStorage.getItem('timeStamp'));
  // const loginDate = parseInt(localStorage.getItem('loginDate'));
  // if (timeStamp && loginDate && loginDate > loginDate + timeStamp) {
  //   localStorage.setItem('isLoggedIn', false);
  //   localStorage.clear();
  // }
}
IsTokenExpired();
