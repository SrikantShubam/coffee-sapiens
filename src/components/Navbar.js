import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { StaticImage } from 'gatsby-plugin-image';
import {  Link } from 'gatsby';
import { faXTwitter, faFacebookF, faInstagram,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <nav >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
        <Link to='/'>
        <div className="flex items-center">
        <StaticImage
        src="../images/logo.jpg"
        alt="Coffee Sapiens Logo"
        className="rounded-full mr-2"
        style={{ width: "10vw", height: "10vw", maxWidth: "40px", maxHeight: "40px" }}
      />
          <span className="text-xl  text-black font-righteous ">Coffee Sapiens</span>
        </div>
        </Link>
       

          {/* Center section - hidden on mobile */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="font-roboto text-xl text-black hover:text-secondary no-underline">Home</a>
            
            <Link to="/blogpage" className="font-roboto text-xl text-black hover:text-secondary no-underline">Blog</Link>
            <a href="#" className="font-roboto text-xl font-regular text-black hover:text-secondary no-underline">About</a>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
           

            {/* User and News icons */}
          <div className="hidden md:flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-secondary custom-socials transition-all">

           <FontAwesomeIcon icon={faXTwitter} className="w-4 h-4 stroke-2 " />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-secondary custom-socials transition-all">
            <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4 stroke-2" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary custom-socials transition-all">
              <FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4 stroke-2" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary custom-socials transition-all">
            <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 stroke-2" />
          </a>
          </div>

            {/* Toggler button - visible only on mobile */}
            <button
              onClick={() => setIsSideNavOpen(true)}
              className="md:hidden text-brown-700 hover:text-brown-900 focus:outline-none"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </div>

      {/* Side Nav - visible only on mobile */}
      <div className={`md:hidden fixed inset-y-0 left-0 w-64 bg-secondary shadow-lg transform ${isSideNavOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-20`}>
        <div className="p-6">
          <button
            onClick={() => setIsSideNavOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-brown-900 focus:outline-none"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          
          
          <ul className="space-y-4">
          <h3 className="text-xl  text-white mb-12 mt-6 ">Quick Links - </h3>
            <li>
              
                
              <a href="#" className="font-roboto text-xl text-white hover:text-secondary no-underline">Home</a>
             
            
            </li>
            <li>
            <a href="#" className="font-roboto text-xl text-white hover:text-secondary no-underline">About</a>
          
            </li>
            <li>
            <a href="#" className="font-roboto text-xl text-white hover:text-secondary no-underline">Blog</a>

            </li>
            <li>
            <h3 className="text-xl  text-white mb-12 mt-12">Follow Us: </h3>
            <div className="space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white  transition-all">
        
           <FontAwesomeIcon icon={faXTwitter} className="w-4 h-4 stroke-2 " />
        
            
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white transition-all">
            <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4 stroke-2" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white transition-all">
              <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 stroke-2" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white transition-all">
            <FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4 stroke-2" />
          </a>
          </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay - visible only on mobile */}
      {isSideNavOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsSideNavOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;