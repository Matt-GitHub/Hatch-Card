import React from 'react';
import { NavLink } from 'react-router-dom';
export const Navigation = () => {
  let links = ['The Hatch Card', 'Company', 'Resoures'];
  return (
    <div className="navigation">
      <div className="navHome">
        <span>Hatch</span>
      </div>
      <div className="navLinks">
        {links.forEach(link => {
          return <NavLink>{link}</NavLink>;
        })}
      </div>
    </div>
  );
};
