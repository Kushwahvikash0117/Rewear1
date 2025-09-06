// components/Navbar.jsx
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getBtnClass = (targetPath) =>
    `px-4 py-2 rounded-full transition-colors duration-200 ${
      currentPath === targetPath
        ? "bg-[#D94F4F] text-white"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`;

  return (
    <nav className="p-4 flex justify-center gap-4 bg-white shadow sticky top-0 z-10">
      
      <NavLink to="/" className={getBtnClass("/")}>
        Home
      </NavLink>
      <NavLink to="/my-listings" className={getBtnClass("/my-listings")}>
        My Listings
      </NavLink>
      <NavLink to="/swap-requests" className={getBtnClass("/swap-requests")}>
        Swap Requests
      </NavLink>
      <NavLink to="/admin-panel" className={getBtnClass("/admin-panel")}>
        Admin Panel
      </NavLink>
      <NavLink to="/product-design" className={getBtnClass("/product-design")}>
        Product Design
      </NavLink>
    </nav>
  );
};

export default Navbar;
