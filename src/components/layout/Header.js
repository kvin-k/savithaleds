import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import {Link} from 'gatsby';


const Header = () => (
  // sticky
  <header className="top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <Link to="/"><div className="flex items-center text-2xl text-black">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        Ambika Industries
      </div>
      </Link>
      <div className="flex mt-1 sm:mt-0">
        <AnchorLink offset='70' className="px-4" href="#products">
          Products
        </AnchorLink>
        <AnchorLink offset='100' className="px-4" href="#about">
          About
        </AnchorLink>
        <AnchorLink offset='120' className="px-4" href="#contact">
          Contact
        </AnchorLink>
        {/* <AnchorLink className="px-4" href="#testimonials">
          Testimonials
        </AnchorLink> */}
      </div>
      {/* <div className="hidden md:block">
        <Button className="text-sm">Start Free Trial</Button>
      </div> */}
    </div>
  </header>
);

export default Header;
