import React from 'react';
import './Listing.scss';
import BOSMenu from '../components/BottomOfScreenMenu/BOSMenu';
import Headline from '../components/Headline/Headline';
import SingleListing from '../components/SingleListingPreview/SingleListingPreview';
export default function Listings() {
  return (
    <div className="listingPageContainer">
      <Headline Headline="MY LISTING" goToPage="/Dashboard" />
      <div className="listingDisplay">
        <SingleListing />
      </div>

      <BOSMenu className="toBottom" />
    </div>
  );
}
