import * as React from "react";
import { Link } from "gatsby";
import coffeeCupImage from '../images/coffee-cup-3d-404.webp'; // Update the path to where your image is stored

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="text-center">
        <img src={coffeeCupImage} alt="Coffee Cup" className="mx-auto" />
        <h1 className="mt-6 text-3xl font-semibold font-righteous">SEEMS LIKE YOU GOT LOST :(</h1>
        <p className="mt-2 text-lg font-inter">404 Error. The page you're looking for does not exist.</p>
        <Link to="/" className="mt-4 inline-block px-6 py-2 text-white bg-secondary rounded-full hover:bg-gray-900">
          HEAD BACK HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
