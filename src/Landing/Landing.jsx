import React from 'react';
import './Landing.scss';
export default function Landing() {
  return (
    <div className="landing">
      <h1>Find your ideal roomates!</h1>
      <h2>Have you been looking for the right roomate?</h2>
      <form>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <a href="#">Forgot Login Details</a>
    </div>
  );
}
