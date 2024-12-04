import React from "react";
import {
  BiHome,
  BiBookAlt,
  BiMessage,
  BiSolidReport,
  BiStats,
  BiTask,
  BiHelpCircle,
} from "react-icons/bi";
import "../styles/Sidebar.css";

function Sidebar() {
  // Hooks

  // Evenements

  // Rendu
  return (
    <div className="menu">
      {/* Section logo */}
      <div className="logo">
        <BiBookAlt />
        <h2>EduFlex</h2>
      </div>

      {/* Liste des éléments du menu */}
      <div className="menu--list">
        <a href="#" className="item">
          <BiHome className="icon" />
          Dashboard
        </a>
        <a href="#" className="item">
          <BiMessage className="icon" />
          Messages
        </a>
        <a href="#" className="item">
          <BiSolidReport className="icon" />
          Reports
        </a>
        <a href="#" className="item">
          <BiStats className="icon" />
          Statistics
        </a>
        <a href="#" className="item">
          <BiTask className="icon" />
          Tasks
        </a>
        <a href="#" className="item">
          <BiHelpCircle className="icon" />
          Help
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
