import React from 'react';

import './ImageWithText.scss';

export default function ImageWithText({img, heading, text}) {
  return (
    <div className="image-with-text-box">
      <div className="img">
        <img src={img} alt="" className="img-fluid" />
      </div>
      <div>
        <div className="heading">{heading}</div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
}
