import React from 'react';
import profile from '../assets/Shyam.jpg';
function Image() {
  return (
    <div className="   sm:w-76 sm:h-full relative">
      <img src={profile} alt="Profile" className="   w-full  object-cover" />
    </div>
  );
}

export default Image;
