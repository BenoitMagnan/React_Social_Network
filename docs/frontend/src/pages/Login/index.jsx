import React from 'react';
import { LoginForm } from '../../components/Forms';
import Header from '../../components/Header/Header';

function Login() {
  return (
    <>
      <Header />
      <div className="content">
        <h1>Please Login</h1>
        <LoginForm />
      </div>
    </>
  );
}

export default Login;
