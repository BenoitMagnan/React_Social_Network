import React from 'react';
import { Navigate } from 'react-router-dom';
import SignupForm from '../../components/Forms';
import Header from '../../components/Header/Header';

function Signup() {
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

  if (!isLoggedIn) {
    return (
      <>
        <Header />
        <div className="content">
          <h1>Sign up here</h1>
          <SignupForm />
        </div>
      </>
    );
  } else {
    return <Navigate to="/profil" />;
  }
}

export default Signup;
