import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Singcast from "../Assets/Singcast.jpeg"

const Header = () => {
  var currentDate = new Date();
  var date = currentDate.getDate() + "/"
      + (currentDate.getMonth() + 1) + "/"
      + currentDate.getFullYear();
  return (
    <div
      className={`w-full h-min fixed top-0 left-0 z-30 bg-white text-black flex items-center justify-between mb-3`}
    >
      <div className={`flex items-center text-lg font-["Roboto"] px-10 z-0`}>
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
          to="/MLPage"
          className={`p-8 + ${window.location.pathname === "/MLPage" || window.location.pathname === "/MLPage" ? 'underline' : ''}`}>
          FORECAST RETRIEVAL
        </Link>
      </div>
      <img src={Singcast} alt="Logo" class="h-16 w-24" />
      <span class="relative right-12 justify-self-end bg-red-100 text-red-500 rounded-full px-3">{date}</span>
    </div>
  );
};

export default Header;
