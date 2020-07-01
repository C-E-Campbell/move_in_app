import React from 'react';
import { useHistory } from 'react-router-dom';
import './Dashboard.scss';
export default function Dashboard() {
  let history = useHistory();
  const toLogin = () => {
    history.push('/choose');
  };
  return (
    <div className="dashboard_container">
      <div className="pick_header">
        <i onClick={() => toLogin()} className="fas fa-chevron-left"></i>
        <h1>DASHBOARD</h1>
        <i className="fas fa-ellipsis-v"></i>
      </div>
      <div className="dashboard_inner_container">
        <div className="dash_welcome">
          <div className="dash_user_welcome">
            Welcome,<span>User!</span>
          </div>
          <div className="default_pic"></div>
        </div>
      </div>
    </div>
  );
}
