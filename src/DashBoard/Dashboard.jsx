import React from 'react';
import { useHistory } from 'react-router-dom';
import MenuItem from './MenuItem';
import BOSMenu from '../components/BottomOfScreenMenu/BOSMenu';
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
            goToPage={'/Messages'}
            className="item-1"
            headline={'Messages'}
            description={'View your messages'}
          />
          <MenuItem
            goToPage={'/Candidates'}
            className="item-2"
            headline={'Candidates'}
            description={'View your potential new roommates'}
          />
          <MenuItem
            goToPage={'/Listings'}
            headline={'My Listings'}
            description={'View and message your listing'}
          />
          <MenuItem
            goToPage={'/Profile'}
            headline={'My Profile'}
            description={'View and edit your profile'}
          />
        </div>
      </div>
      <BOSMenu />
    </div>
  );
}
