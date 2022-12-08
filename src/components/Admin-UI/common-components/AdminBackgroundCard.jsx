import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import "./AdminBackgroundCard.css";
import { AiOutlineFileSearch } from "react-icons/ai";
import { GrUserSettings } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";

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
              <a href="#">
                <i
                  className="bx bx-grid-alt"
                  onClick={bxSearchOnClickHandler}
                ></i>
                <span className="links_name">Dashboard</span>
              </a>
              <span className="tooltip">Dashboard</span>
            </li>
            <li>
              <a href="#">
                <i>
                  <AiOutlineFileSearch />
                </i>
                <span className="links_name">Records</span>
              </a>
              <span className="tooltip">Records</span>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-chat"></i>
                <span className="links_name">Participants</span>
              </a>
              <span className="tooltip">Participants</span>
            </li>
            <li>
              <a href="#">
                <i>
                  <GrUserSettings />
                </i>
                <span className="links_name">Account Management</span>
              </a>
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
