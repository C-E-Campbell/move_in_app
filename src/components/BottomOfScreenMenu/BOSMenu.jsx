import React from 'react';
import { useHistory } from 'react-router-dom';
import './BOSMenu.scss';
export default function BOSMenu() {
  let history = useHistory();
  return (
    <section className="sub-menu">
      <div
        className="sub-menu-item "
        onClick={() => history.push('./Listings')}
      >
        <i className="sub-icons  fas fa-home"></i>
        <h5>My Listing</h5>
      </div>
      <div
        className="sub-menu-item"
        onClick={() => history.push('./Candidates')}
      >
        <i className="sub-icons fas fa-user-friends"></i>
        <h5>Candidates</h5>
      </div>
      <div className="sub-menu-item" onClick={() => history.push('./Choose')}>
        <i className="sub-icons fas fa-th"></i>
        <h5>Main</h5>
      </div>
      <div className="sub-menu-item" onClick={() => history.push('./Messages')}>
        <i className="sub-icons far fa-comment"></i>
        <h5>Messages</h5>
      </div>
      <div
        className="sub-menu-item"
        onClick={() => history.push('./Dashboard')}
      >
        <div className="small_default_pic"></div>
        <h5>Dashboard</h5>
      </div>
    </section>
  );
}
