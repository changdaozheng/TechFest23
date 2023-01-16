import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div
      className={`w-full h-min relative text-black flex items-center justify-between mb-3`}
    >
      <div className={`flex items-center text-lg font-["Rubik"] px-10 z-0`}>
        <Link
          to="/"
          className={`p-8 + ${window.location.pathname === "/" ? 'underline' : ''}`}>
          DASHBOARD
        </Link>
        <Link
          to="/Campaigns"
          className={`p-8 + ${window.location.pathname === "/Campaigns" || window.location.pathname === "/Campaigns" ? 'underline' : ''}`}>
          CAMPAIGNS
        </Link>
        <Link
          to="/"
          className={`p-8 + ${window.location.pathname === "/Healthcare" || window.location.pathname === "/HealthcareDetails" ? 'underline' : ''}`}>
          nil
        </Link>
        <Link
          to="/"
          className={`p-8 + ${window.location.pathname === "/AboutUs" ? 'underline' : ''}`}>
          nil
        </Link>
      </div>
    </div>
  );
};

export default Header;
