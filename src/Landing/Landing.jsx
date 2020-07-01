import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Landing.scss';
//import axios from 'axios';
export default function Landing(props) {
  let history = useHistory();
  const [email, SetEmail] = useState('');
  const [pass, SetPass] = useState('');
  const [confirmPass, SetConfirmPass] = useState('');
  const [registerFlag, SetRegisterFlag] = useState(false);
  const [name, SetName] = useState('');

  const login = (e) => {
    e.preventDefault();
    history.push('/choose');
    // axios
    //   .post('/api/v1/auth/login', {
    //     username: email,
    //     pass,
    //   })
    //   .then((data) => {
    //     if (data.data.accessToken) {
    //       history.push('/choose');
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const register = (e) => {
    e.preventDefault();
    history.push('/choose');
    // axios
    //   .post('/api/v1/auth/register', {
    //     commonname: name,
    //     username: email,
    //     pass: pass,
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     SetEmail('');
    //     SetPass('');
    //     SetRegisterFlag(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div className="landing_container">
      <div className="landing_logoBox"></div>
      <div className="landing">
        <div className="landing_headline">
          <h1>
            {!email && !pass
              ? 'Find your ideal roommates!'
              : email && pass
              ? 'Find a roomate quickly'
              : email
              ? 'Feel safe and secure'
              : 'Find your ideal roommates!'}
          </h1>
          <h2>Have you been looking for the right roomate?</h2>
        </div>
        <div>
          <form
            className="login_form"
            onSubmit={!registerFlag ? (e) => login(e) : (e) => register(e)}
          >
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
              {registerFlag === false ? 'Login' : 'Register'}
            </button>
          </form>

          <div className="forgot_login">
            <button onClick={() => SetRegisterFlag(!registerFlag)}>
              {registerFlag === false ? 'Register' : 'Login'}
            </button>
            <button>Need Help?</button>
          </div>
        </div>
        <div className="social_box">
          <div className="social_login">
            <span className="social_span"></span>
            <i className="fab fa-google"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-facebook-f"></i>
            <span className="social_span"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
