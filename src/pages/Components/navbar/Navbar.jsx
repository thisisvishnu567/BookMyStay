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