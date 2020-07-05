import React from 'react';
import BOSMenu from '../components/BottomOfScreenMenu/BOSMenu';
import Headline from '../components/Headline/Headline';
export default function Candidates() {
  return (
    <div>
      <Headline Headline="Candidates" goToPage="/Dashboard" />
      Candidates
      <BOSMenu />
    </div>
  );
}
