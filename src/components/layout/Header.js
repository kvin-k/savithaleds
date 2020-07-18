import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import {Link} from 'gatsby';


const Header = () => (
  // sticky
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-2 px-2">
      <Link to="/">
        <div className="flex justify-center w-56 sm:w-40">
          <LogoIcon />
        </div>
      </Link>
      <div className="flex mt-1 sm:mt-0">
        <AnchorLink offset='0' className="px-4" href="#products">
          Products
        </AnchorLink>
        <AnchorLink offset='100' className="px-4" href="#about">
          About
        </AnchorLink>
        <AnchorLink offset='120' className="px-4" href="#contact">
          Contact
        </AnchorLink>
      </div>
    </div>
  </header>
);

export default Header;
