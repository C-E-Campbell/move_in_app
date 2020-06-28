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
      <div className="landing_headline">
        <h1>Find your ideal roomates!</h1>
        <h2>Have you been looking for the right roomate?</h2>
      </div>
      <div>
        <form className="login_form" onSubmit={(e) => login(e)}>
          <input
            onChange={(e) => SetEmail(e.target.value)}
            type="text"
            placeholder="Username"
            value={email}
            className="login_input"
          />
          <input
            onChange={(e) => SetPass(e.target.value)}
            type="password"
            placeholder="Password"
            value={pass}
            className="login_input"
          />
          <button className="login_btn" type="submit">
            Login
          </button>
        </form>

        <div className="forgot_login">
          <button>Register</button>
          <button>Forgot Login Details</button>
        </div>
      </div>
    </div>
  );
}
