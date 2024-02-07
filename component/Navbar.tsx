import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbarLink">
        <Link className="navlink"  to="/">
          All
        </Link>
        <Link className="navlink" to="/?todos=Active">
          Actice
        </Link>
        <Link className="navlink" to="/?todos=completed">
          completed
        </Link>

      </div>
    </>
  );
};

export default Navbar;
