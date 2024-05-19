import React, { useEffect, useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isInitiallyVisible, setIsInitiallyVisible] = useState(false);

  // Execute setTimeout only once when the component mounts
  setTimeout(() => {
    setIsInitiallyVisible(true);
  }, 2500);

  const handleMouseLeave = () => {
    setIsChecked(false);
  };
  return (
    <div className={`menu-container ${isInitiallyVisible ? "show" : "hidden"}`}>
      <input
        type="checkbox"
        id="toggle3"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <label className="" id="switch3" htmlFor="toggle3">
        <div id="circle3">
          <div className="lines"></div>
          <div className="lines"></div>
        </div>
        <p className='md:text-[35px] text-[20px] font-bold text-[white] relative md:-top-[55px] -top-[30px] left-[1.5rem] md:left-[2.5rem]' id='menu-1'>Menu</p>
      </label>
      <div id="menu" className='menu' onMouseLeave={handleMouseLeave}>
        <p>Contact</p>
        <p>Blog</p>
        <p>About</p>
        <p>Expertise</p>
        <p>Our Work</p>
        <p>Home</p>
      </div>
    </div>
  );
};

export default Menu;
