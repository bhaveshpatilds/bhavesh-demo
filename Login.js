import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {


  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div id='Login'>
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
      />
      <br/>
      <input
        type="password"
        placeholder="Password"
      />
      <br/>
      <button type="submit">Login</button>
      <Link to="/register">Register</Link>
    </form>
    </div>
    
  );
};

export default LoginForm;
