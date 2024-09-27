import React from 'react';

import Header from './header';
import Navbar from './Navbar';
import Featured from './featured';
import './layout.css';
import { StaticImage } from 'gatsby-plugin-image';
import Newsletter from './Newsletter';
import Footer from './footer';
import LatestBlog from './latestblog';
import SEO from './seo';
const Layout = ({ children }) => {

  
 

  return (
    <>
    <SEO />

      <Header />
      <Navbar/>
      <Featured/>
 {/* coffee beans section  */}
 <div className="container mx-auto my-8 mt-8 flex flex-col items-center">
 <div className="w-full lg:w-1/3 mb-4 transition-transform duration-500 ease-in-out transform hover:scale-105">
   <StaticImage
     src="../images/coffee-beans.png"
     loading="eager"
     quality={100}
     formats={["auto", "webp", "avif"]}
     alt="Coffee Beans"
     className="w-full h-auto"
   />
 </div>

 <h2 className="text-3xl lg:text-5xl font-medium mb-4 mt-8 text-black font-righteous text-center transition-transform duration-700 ease-in-out transform translate-y-4 opacity-100 hover:translate-y-0">
   Coffee Sapiens
 </h2>

 <p className="text-xl lg:text-2xl mt-4 font-roboto text-center transition-opacity duration-700 ease-in-out opacity-100 hover:opacity-80">
   Dive into our aromatic haven where we celebrate coffee—its origins, brewing techniques, and the way it weaves itself into our daily lives. Sip, learn, and discover the rich influence of this beloved beverage.
 </p>
</div>









      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        
      </div>

<LatestBlog />
{/* newsletter*/}

<Newsletter/>

      <Footer/>
    </>
  );
};

export default Layout;
