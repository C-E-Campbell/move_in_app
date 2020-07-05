import React from 'react';
import './SingleListingPreview.scss';
export default function SingleListingPreview() {
  return (
    <div className="listingContainer">
      <div className="imgBG"></div>
      <div className="listingTextContainer">
        <div>
          <div className="textHeadline">
            <h2>My Listing</h2>
            <div>
              <h3>ACTIVE</h3>
            </div>
          </div>

          <h4>Move In date: 7/24/2020</h4>
        </div>
        <div className="listingButtonContainer">
          <button>View Candidates</button>
          <button>View this Listing</button>
        </div>
      </div>
    </div>
  );
}
