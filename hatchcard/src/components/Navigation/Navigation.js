import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Buttons/Button';
import './Navigation.css';
export const Navigation = () => {
  let links = ['The Hatch Card', 'Company', 'Resources'];
  return (
    <nav className="navigation">
      <div className="navHome">
        <img
          className="navLogo"
          src="https://assets.website-files.com/5d89b3f25fc1b72994e90766/5d89bf75b4e4f7240afa23e9_Hatch%20Logo%20Colour%40svg.svg"
          height="21"
          alt="Hatch Card Company Logo"
        />
      </div>
      <div className="navigationLinks">
        <ul className="navLinks">
          {links.map((link, id) => {
            return (
              <li key={id} className="navItem">
                <NavLink
                  activeClassName="navLinkActive"
                  className="navLink"
                  to={`/${link.replace(/\s+/g, '')}`}
                >
                  {link}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <NavLink className="navLink" to="">
          Login
        </NavLink>
        <Button type="button" text="Sign Up" id="signup" />
      </div>
    </nav>
  );
};

export default Navigation;
