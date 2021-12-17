import React from 'react';
import { Navigate } from 'react-router-dom';
import { LoginForm } from '../../components/Forms';
import Header from '../../components/Header/Header';

function Login() {
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

  if (!isLoggedIn) {
    return (
      <>
        <Header />
        <div className="content">
          <h1>Please Login</h1>
          <LoginForm />
        </div>
      </>
    );
  } else {
    return <Navigate to="/profil" />;
  }
}

export default Login;
