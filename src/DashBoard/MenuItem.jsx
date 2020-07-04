import React from 'react';
import { useHistory } from 'react-router-dom';
import './Menuitem.scss';
export default function MenuItem(props) {
  let history = useHistory();

  const move = (link) => {
    history.push(link);
  };
  return (
    <div className="menuItem_Container">
      <div>
        <h1>{props.headline}</h1>
        <h3>{props.description}</h3>
      </div>

      <i
        style={{ color: '#2f00a7' }}
        onClick={() => move(props.goToPage)}
        className="fas fa-chevron-circle-right fa-lg"
      ></i>
    </div>
  );
}
