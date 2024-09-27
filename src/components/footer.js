import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookSquare, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { StaticImage } from 'gatsby-plugin-image';
import {  Link } from 'gatsby';
const Footer = () => {
  return (
    <footer className="bg-secondary text-white p-8 mt-6">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">
        {/* Part 1 - Logo and Tagline */}
        <div className="flex flex-col items-start">
        <div className="flex items-center justify-start space-x-2">
  <StaticImage
    src="../images/logo.jpg"
    alt="Coffee Sapiens Logo"
    className="rounded-full"
    style={{ width: "40px", height: "40px" }} // Set fixed size for consistency
  />
  <h1 className="text-2xl leading-none pl-5 font-large font-righteous m-0">Coffee Sapiens</h1>
</div>
<p className="text-base font-roboto mt-8">Sip, learn, and discover the rich influence of this beloved beverage</p>

       
      </div>


        {/* Part 2 - Quick Links */}
        <div className="flex flex-col items-start font-roboto">
          <h2 className="font-bold text-xl">Quick Links</h2>
          <Link to="/" className="text-white hover:text-black"><h3 className='mt-2 pt-1 text-base  ' >Home</h3></Link>
          <Link to="/" className="text-white hover:text-black"><h3 className='mt-2 pt-1 text-base  ' >About</h3></Link>
          <Link to="/" className="text-white hover:text-black"><h3 className='mt-2 pt-1 text-base  ' >Blog</h3></Link>
        
        </div>

        {/* Part 3 - Social Media Links */}
        <div className="flex flex-col items-start ">
          <p className="font-bold text-xl  font-roboto">Follow on:</p>
          <div className="flex space-x-4 text-2xl">
          <Link to="#" target='_blank' className='text-white hover:text-black'>    <FontAwesomeIcon icon={faInstagram} /></Link>
          <Link to="#" target='_blank' className='text-white hover:text-black'>      <FontAwesomeIcon icon={faFacebookSquare} /></Link>
          <Link to="#" target='_blank' className='text-white hover:text-black'>    <FontAwesomeIcon icon={faLinkedin} /></Link>
          <Link to="#" target='_blank' className='text-white hover:text-black'>    <FontAwesomeIcon icon={faXTwitter} className="" /></Link>
          
           
            
          </div>
        </div>
      </div>
<div className="container mx-auto" >
<div className="flex flex-col lg:flex-row justify-between items-center mt-8 lg:mx-0 px-4 lg:px-0">
<p className="text-sm text-gray">&copy; 2024 Coffee Sapiens. All rights reserved.</p>
<StaticImage
  src="../images/footer-coffee-sack.png"
  alt="Decorative coffee sack"
  className="" loading='lazy'
/>
</div>
</div>
    
    
    </footer>
  );
};

export default Footer;
