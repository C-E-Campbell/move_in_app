import React, { useState } from 'react';
import './Landing.scss';
import axios from 'axios';
export default function Landing() {
  const [email, SetEmail] = useState('');
  const [pass, SetPass] = useState('');
  const [confirmPass, SetConfirmPass] = useState('');
  const [registerFlag, SetRegisterFlag] = useState(false);
  const [name, SetName] = useState('');

  const login = (e) => {
    e.preventDefault();
    if (!email || !pass) {
      alert('enter form values');
    } else {
      axios
        .post('/api/v1/auth/login', {
          username: email,
          pass,
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
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
          {registerFlag === false ? null : (
            <input
              onChange={(e) => SetName(e.target.value)}
              type="text"
              placeholder="Name"
              value={name}
              className="login_input"
            />
          )}
          <input
            onChange={(e) => SetEmail(e.target.value)}
            type="text"
            placeholder="Email"
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
          {registerFlag === false ? null : (
            <input
              onChange={(e) => SetConfirmPass(e.target.value)}
              type="password"
              placeholder="Confirm Password"
              value={confirmPass}
              className="login_input"
            />
          )}
          <button className="login_btn" type="submit">
            Login
          </button>
        </form>

        <div className="forgot_login">
          <button onClick={() => SetRegisterFlag(!registerFlag)}>
            Register
          </button>
          <button>Need Help?</button>
        </div>
      </div>
      <div className="landing_logoBox"></div>
    </div>
  );
}
