import React from 'react';
import MenuItem from './MenuItem';
import BOSMenu from '../components/BottomOfScreenMenu/BOSMenu';
import Headline from '../components/Headline/Headline';
import './Dashboard.scss';
export default function Dashboard() {
  return (
    <div className="dashboard_container">
      <Headline Headline="DASHBOARD" goToPage="/Choose" />
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
            description={'View and manage your listing'}
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
