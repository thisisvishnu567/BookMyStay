<<<<<<< HEAD
import React from 'react';
import "./navbar.css";
import { Link } from "react-router-dom";
import { useUser } from '../UserProvider';

const Navbar = () => {
  const { user, logout } = useUser();

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">BookMyStay</span>
        <div className="navItems">
          {user ? (
           <div>
            {user.email}
             <button className="button-81" onClick={logout}>Logout</button>
           </div>
          ) : (
            <>
              <Link to="/login">
                <button className="button-81">Login</button>
              </Link>
              <Link to="/profile">
                <button className="button-81">Profile</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
=======
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">BookMyStay</span>
        <div className="navItems">
          <button className="navButton no-underline" ><Link to = "/register">Register</Link></button>
          <button className="navButton" ><Link to = "/login">Login</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
>>>>>>> 107386e2c56d5dde13920e4917298ac6fabd25ad
