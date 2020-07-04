import React from 'react';
import { useHistory } from 'react-router-dom';
import './Pick.scss';
export default function Pick() {
  let history = useHistory();

  const toLogin = () => {
    history.push('/');
  };

  const toDashboard = () => {
    history.push('/Dashboard');
  };

  return (
    <div className="pick_container">
      <div className="pick_header">
        <i onClick={() => toLogin()} className="fas fa-chevron-left fa-lg"></i>
        <h1>WELCOME</h1>
        <i className="fas fa-ellipsis-v fa-lg"></i>
      </div>
      <div className="pick_inner_container">
        <div className="pick_user_welcome">
          Welcome,<span>User!</span>
        </div>
        <button onClick={() => toDashboard()} className="pick_btn">
          <span>Mover</span>I need to find a room
        </button>
        <button onClick={() => toDashboard()} className="pick_btn">
          <span>Lister</span>I have a room to list
        </button>
      </div>
    </div>
  );
}
