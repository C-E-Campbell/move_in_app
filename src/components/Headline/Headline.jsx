import React from 'react';
import './Headline.scss';
import { useHistory } from 'react-router-dom';

export default function Headline(props) {
  let history = useHistory();
  const goTo = () => {
    history.push(props.goToPage);
  };
  return (
    <div className="dash-header">
      <i onClick={() => goTo()} className="fas fa-chevron-left fa-lg"></i>
      <h1>{props.Headline}</h1>
      <i className="fas fa-ellipsis-v fa-lg"></i>
    </div>
  );
}
