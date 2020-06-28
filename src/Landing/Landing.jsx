import React, { useState } from 'react';
import './Landing.scss';
import axios from 'axios';
export default function Landing() {
  const [email, SetEmail] = useState('');
  const [pass, SetPass] = useState('');

  const login = (e) => {
    e.preventDefault();
    if (!email || !pass) {
      alert('enter form values');
    } else {
      axios.get('/login', {
        email,
        pass,
      });
    }
  };
  return (
    <div className="landing">
      <h1>Find your ideal roomates!</h1>
      <h2>Have you been looking for the right roomate?</h2>
      <form onSubmit={(e) => login(e)}>
        <input
          onChange={(e) => SetEmail(e.target.value)}
          type="text"
          placeholder="Username"
          value={email}
        />
        <input
          onChange={(e) => SetPass(e.target.value)}
          type="password"
          placeholder="Password"
          value={pass}
        />
        <button type="submit">Login</button>
      </form>
      <a href="#">Register</a>
      <a href="#">Forgot Login Details</a>
    </div>
  );
}
