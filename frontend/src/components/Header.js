import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div
      className={`w-full h-min fixed top-0 left-0 z-30 text-black flex items-center justify-between mb-3`}
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
          to="/Datalogger"
          className={`p-8 + ${window.location.pathname === "/Datalogger" || window.location.pathname === "/Datalogger" ? 'underline' : ''}`}>
          DATALOGGER
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
