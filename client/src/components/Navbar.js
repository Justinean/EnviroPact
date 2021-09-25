import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="">
      <div className="">
        {/* Use Link component to create a link that returns to the homepage on click */}
        <Link className=" " to="/">
          <h1 className=" ">
            Home
          </h1>
        </Link>
        <Link className=" " to="/dashboard">
          <h1 className=" ">
            Dashboard
          </h1>
        </Link>
        <Link className=" " to="/contributors">
          <h1 className=" ">
            Contributors
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;