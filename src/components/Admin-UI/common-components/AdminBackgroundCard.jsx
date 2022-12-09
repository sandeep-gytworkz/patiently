import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import "./AdminBackgroundCard.css";
import { AiOutlineFileSearch } from "react-icons/ai";
import { GrUserSettings } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const AdminBackgroundCard = (props) => {
  const [appState, setAppState] = useState(true);
  const btnOnClickHandler = () => setAppState(!appState);
  const bxSearchOnClickHandler = () => setAppState(!appState);

  return (
    <>
      <div className={appState ? "sidebar" : "sidebar active"}>
        <div>
          <div className="logo_content ">
            <div className="logo">
              <div className="logo_name">Patiently</div>
            </div>

            <i className="bx bx-menu" id="btn" onClick={btnOnClickHandler}></i>
          </div>
        </div>
        <div className="ul-class-list">
          <ul className="nav_list">
            <li>
              <Link to="/dashboard">
                <i className="bx bx-grid-alt"></i>
                <span className="links_name">Dashboard</span>
              </Link>
              <span className="tooltip">Dashboard</span>
            </li>
            <li>
              <Link to="/records">
                <i>
                  <AiOutlineFileSearch />
                </i>
                <span className="links_name">Records</span>
              </Link>
              <span className="tooltip">Records</span>
            </li>
            <li>
              <Link to="/participants">
                <i className="bx bx-chat"></i>
                <span className="links_name">Participants</span>
              </Link>
              <span className="tooltip">Participants</span>
            </li>
            <li>
              <Link to="/account-management">
                <i>
                  <GrUserSettings />
                </i>
                <span className="links_name">Account Management</span>
              </Link>
              <span className="tooltip">Account</span>
            </li>
            <li>
              <a href="#">
                <i>
                  <IoSettingsOutline />
                </i>
                <span className="links_name">Settings</span>
              </a>
              <span className="tooltip">Settings</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="home_content">
        <AdminNavBar onClick={btnOnClickHandler} />
        <div className="p-3">{props.children}</div>
      </div>
    </>
  );
};

export default AdminBackgroundCard;
