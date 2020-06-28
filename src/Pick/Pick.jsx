import React from 'react';
import { useHistory } from 'react-router-dom';
import './Pick.scss';
export default function Pick() {
  let history = useHistory();

  const toLogin = () => {
    history.push('/');
  };

  return (
    <div className="pick_container">
      <div className="pick_header">
        <i onClick={() => toLogin()} className="fas fa-chevron-left"></i>
        <h1>WELCOME</h1>
        <i className="fas fa-ellipsis-v"></i>
      </div>
      <div className="pick_inner_container">
        <div className="pick_user_welcome">
          Welcome,<span>User!</span>
        </div>
        <button className="pick_btn">
          <span>Mover</span>I need to find a room
        </button>
        <button className="pick_btn">
          <span>Lister</span>I have a room to list
        </button>
      </div>
    </div>
  );
}
