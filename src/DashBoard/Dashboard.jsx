import React from 'react';
import { useHistory } from 'react-router-dom';
import MenuItem from './MenuItem';
import './Dashboard.scss';
export default function Dashboard() {
  let history = useHistory();
  const toLogin = () => {
    history.push('/choose');
  };
  return (
    <div className="dashboard_container">
      <div className="dash-header">
        <i onClick={() => toLogin()} className="fas fa-chevron-left fa-lg"></i>
        <h1>DASHBOARD</h1>
        <i className="fas fa-ellipsis-v fa-lg"></i>
      </div>
      <div className="dashboard_inner_container">
        <div className="dash_welcome">
          <div className="dash_user_welcome">
            Hello,<span>User!</span>
          </div>
          <div className="default_pic"></div>
        </div>
        <div className="dash-menu ">
          <MenuItem
            className="item-1"
            headline={'Messages'}
            description={'View your messages'}
          />
          <MenuItem
            className="item-2"
            headline={'Candidates'}
            description={'View your potential new roommates'}
          />
          <MenuItem
            headline={'My Listings'}
            description={'View and message your listing'}
          />
          <MenuItem
            headline={'My Profile'}
            description={'View and edit your profile'}
          />
        </div>
      </div>
      <section className="sub-menu">
        <div className="sub-menu-item ">
          <i className="sub-icons  fas fa-home"></i>
          <h5>My Listing</h5>
        </div>
        <div className="sub-menu-item">
          <i className="sub-icons fas fa-user-friends"></i>
          <h5>Candidates</h5>
        </div>
        <div className="sub-menu-item">
          <i className="sub-icons fas fa-th"></i>
          <h5>Main</h5>
        </div>
        <div className="sub-menu-item">
          <i className="sub-icons far fa-comment"></i>
          <h5>Messages</h5>
        </div>
        <div className="sub-menu-item">
          <div className="small_default_pic"></div>
          <h5>Dashboard</h5>
        </div>
      </section>
    </div>
  );
}
