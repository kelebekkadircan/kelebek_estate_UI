import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const user = true;

  return (
    <nav className="navbar">
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>KelebekEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
            />
            <span>Kadircan </span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign In</a>
            <a href="/" className="register">
              Sign Up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpenMenu((prev) => !prev)}
          />
        </div>
        <div className={openMenu ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign In</a>
        </div>
      </div>
    </nav>
  );
};
