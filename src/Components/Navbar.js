// Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn, currentRoute }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here
    localStorage.removeItem('token');
    navigate('/login'); // Redirect to the login page after logout
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              {isLoggedIn && currentRoute === '/home' && (
                // If user is logged in and on the home page, show the logout button
                <button className="btn btn-primary mx-2" onClick={handleLogout}>
                  Logout
                </button>
              )}
              {!isLoggedIn && currentRoute !== '/login' && (
                // If user is not logged in and not on the login page, show the login button
                <Link className="btn btn-primary mx-2" to="/login" role="button">
                  Login
                </Link>
              )}
              {!isLoggedIn && currentRoute !== '/signup' && (
                // If user is not logged in and not on the signup page, show the signup button
                <Link className="btn btn-primary mx-2" to="/signup" role="button">
                  Signup
                </Link>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
