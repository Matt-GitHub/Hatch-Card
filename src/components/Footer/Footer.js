import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Buttons/Button';
// Styling
import './footer.css';

const Footer = () => {
  let productsLinks = ['The Hatch Card'];
  let companyLinks = [
    'About',
    'Careers',
    'Terms of Service',
    'Privacy Policy',
    'Cardholder Agreement'
  ];
  let resourcesLinks = [
    'Blog',
    'FAQ',
    'Become a Partner',
    "Borrower's Bill of Rights",
    'Contact Us'
  ];
  return (
    <section>
      <img
        src="https://assets.website-files.com/5d89b3f25fc1b72994e90766/5ea835d882c1f7743eadbc97_CTA%20Wave%40svg.svg"
        alt=""
        className="wave top cta-wave"
      ></img>
      {/* Customer Card Component */}
      <div className="footerTop">
        <div className="footerCtn">
          <h2>It's Time to Connect!</h2>
          <p>
            There's no catch with Matthew. Get fast and easy access to a
            Front-End Developer to grow your business.
          </p>
          <a
            href="https://www.linkedin.com/in/matthew-bedard-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button type="button" text="Connect Now!" id="Connect" />
          </a>
        </div>
      </div>
      <div className="footerNav">
        <div className="logoSocial">
          <div>
            <img
              src="https://assets.website-files.com/5d89b3f25fc1b72994e90766/5d89bf75b4e4f7240afa23e9_Hatch%20Logo%20Colour%40svg.svg"
              height="32"
              alt=""
            />
          </div>
          <div className="socialMediaBar">
            <a
              href="https://www.facebook.com/hatchcard/?eid=ARBDDxIyJ2iJKKA8togoawF3zUJXW838ewGK5MUBYybdaDdd_nMmgebg27WtpJpWg5ibcCwkwKEBwHkB"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-block w-inline-block"
            >
              <img
                src="https://assets.website-files.com/5d89b3f25fc1b72994e90766/5d89ea15b4e4f7c1d4fca92e_Facebook%40svg.svg"
                alt=""
              />
            </a>
            <a
              href="https://www.instagram.com/onhatch/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-block w-inline-block"
            >
              <img
                src="https://assets.website-files.com/5d89b3f25fc1b72994e90766/5db8a40a93ed4d5ae6ea5967_Instagram.svg"
                width="16"
                alt=""
              />
            </a>
            <a
              href="https://twitter.com/hatchcard"
              target="_blank"
              className="social-link-block w-inline-block"
              rel="noopener noreferrer"
            >
              <img
                src="https://assets.website-files.com/5d89b3f25fc1b72994e90766/5d89ea165fc1b72264ec70bf_Twitter%40svg.svg"
                alt=""
              />
            </a>
            <a
              href="https://www.linkedin.com/company/hatchcredit"
              target="_blank"
              className="social-link-block w-inline-block"
              rel="noopener noreferrer"
            >
              <img
                src="https://assets.website-files.com/5d89b3f25fc1b72994e90766/5d89ea15115d0223ee3a595e_Linkedin%40svg.svg"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="footerSubNav">
          <h3>Products</h3>
          <ul>
            {productsLinks.map((link, id) => {
              return (
                <li key={id}>
                  <NavLink to={`/${link.replace(/\s+/g, '')}`}>{link}</NavLink>
                </li>
              );
            })}
          </ul>
          <p>More coming soon...</p>
        </div>
        <div className="footerSubNav">
          <h3>Company</h3>
          <ul>
            {companyLinks.map((link, id) => {
              return (
                <li key={id}>
                  <NavLink to={`/${link.replace(/\s+/g, '')}`}>{link}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footerSubNav">
          <h3>Resources</h3>
          <ul>
            {resourcesLinks.map((link, id) => {
              return (
                <li key={id}>
                  <NavLink to={`/${link.replace(/\s+/g, '')}`}>{link}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="footerBotBar">
        <div className="copyright">
          <p>
            © Hatch 2020. One Embarcadero Center #26742, San Francisco, CA
            94126. <br />
            The Hatch Visa Commercial Card is issued by Sutton Bank, Member
            FDIC.
          </p>
        </div>
        <div className="subscribe">
          <a
            href="https://matthewbedard.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button type="button" text="Portfolio" id="portfolio" />
          </a>
          <p>
            There’s no catch with Hatch! Get to know us by subscribing to our
            blog. We will never share your information for marketing purposes
            without your permission.{' '}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Footer;
