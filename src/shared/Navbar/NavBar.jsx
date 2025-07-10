import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Left: Logo and nav links */}
      <div className="navbar-left">
        <div className="navbar-logo">
          <span className="navbar-logo-accent">Pump</span>Master
        </div>
        <div className="navbar-links">
          <button disabled className="navbar-btn">
            Dashboard
          </button>
          <button disabled className="navbar-btn">
            Pumps
          </button>
          <button disabled className="navbar-btn">
            Reports
          </button>
          <button disabled className="navbar-btn">
            Alerts
          </button>
        </div>
      </div>
      {/* Right: Search, notification, user */}
      <div className="navbar-right">
        <input
          type="text"
          placeholder="Search..."
          className="navbar-search"
        />
        <span className="navbar-icon" title="Notifications">
          {/* Simple bell icon SVG */}
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
            <path
              d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6V11c0-3.07-1.63-5.64-5-6.32V4a1 1 0 1 0-2 0v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29A1 1 0 0 0 6 19h12a1 1 0 0 0 .71-1.71L18 16z"
              fill="#fff"
            />
          </svg>
        </span>
        <span className="navbar-icon" title="User">
          {/* Simple user icon SVG */}
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="4" fill="#fff" />
            <path
              d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;