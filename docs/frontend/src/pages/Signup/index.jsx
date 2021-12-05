import React from 'react';
import SignupForm from '../../components/Forms';
import Header from '../../components/Header/Header';

function Signup() {
  return (
    <>
      <Header />
      <div className="content">
        <h1>Sign up here</h1>
        <SignupForm />
      </div>
    </>
  );
}

export default Signup;
