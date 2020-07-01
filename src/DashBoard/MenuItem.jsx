import React from 'react';
import { useHistory } from 'react-router-dom';
export default function MenuItem(props) {
  let history = useHistory();

  const move = (link) => {
    history.push(link);
  };
  return (
    <div>
      <h1>{props.headline}</h1>
      <h3>{props.description}</h3>
      <i
        style={{ color: '#2f00a7' }}
        onClick={() => move(props.goToPage)}
        className="fas fa-chevron-circle-right"
      ></i>
    </div>
  );
}
