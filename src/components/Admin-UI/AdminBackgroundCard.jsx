import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import "./AdminBackgroundCard.css";

const AdminBackgroundCard = () => {
  // let btn = document.querySelector("#btn");
  // let AdminBackgroundCard = document.querySelector(".AdminBackgroundCard");
  // let searchBtn = document.querySelector(".bx-search");

  // btn.onClick = function () {
  //   AdminBackgroundCard.classList.toggle("active");
  // };
  // const btnOnClickHandler = () => AdminBackgroundCard.classList.toggle("active");
  // const bxSearchOnClickHandler = () => AdminBackgroundCard.classList.toggle("active");

  // searchBtn.onClick = function () {
  //   AdminBackgroundCard.classList.toggle("active");
  // };
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
              <i className="bx bx-search" onClick={bxSearchOnClickHandler}></i>
              <input type="text" placeholder="Search..." />
              <span className="tooltip">Search</span>
            </li>
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
                <i className="bx bx-user"></i>
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
                <i className="bx bx-pie-chart-alt-2"></i>
                <span className="links_name">Account Management</span>
              </a>
              <span className="tooltip">Account</span>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-folder"></i>
                <span className="links_name">Settings</span>
              </a>
              <span className="tooltip">Settings</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="home_content">
        <AdminNavBar onClick={btnOnClickHandler} />
        <div className="p-3">
          <div className="text">Dashboard</div>
          <p>
            Nullam vulputate ultrices tellus et bibendum. Integer iaculis
            pharetra ligula, eget condimentum nunc malesuada nec. Nullam eu
            lorem sed tellus condimentum aliquam in in eros. Maecenas sagittis,
            justo quis blandit aliquet, sem felis interdum elit, ac dictum purus
            mauris nec mauris. In hac habitasse platea dictumst. Morbi placerat
            nec lorem in feugiat. In tristique laoreet diam, vel vulputate mi
            placerat id. Vivamus at quam rutrum, finibus tortor laoreet,
            venenatis sem. Nam vitae libero ultrices, tristique ligula non,
            sagittis elit. Vestibulum sed turpis nec eros convallis viverra.
            Maecenas nunc arcu, pharetra bibendum feugiat ut, consequat quis
            massa. Vivamus aliquet eros a efficitur fringilla. Aenean auctor ut
            mi ut vestibulum. Suspendisse a turpis id nisi faucibus efficitur.
            Sed ipsum urna, ultricies eget justo vitae, hendrerit malesuada
            mauris. Donec a turpis malesuada, euismod massa id, ultrices ex.
          </p>
          <p>
            Nullam vulputate ultrices tellus et bibendum. Integer iaculis
            pharetra ligula, eget condimentum nunc malesuada nec. Nullam eu
            lorem sed tellus condimentum aliquam in in eros. Maecenas sagittis,
            justo quis blandit aliquet, sem felis interdum elit, ac dictum purus
            mauris nec mauris. In hac habitasse platea dictumst. Morbi placerat
            nec lorem in feugiat. In tristique laoreet diam, vel vulputate mi
            placerat id. Vivamus at quam rutrum, finibus tortor laoreet,
            venenatis sem. Nam vitae libero ultrices, tristique ligula non,
            sagittis elit. Vestibulum sed turpis nec eros convallis viverra.
            Maecenas nunc arcu, pharetra bibendum feugiat ut, consequat quis
            massa. Vivamus aliquet eros a efficitur fringilla. Aenean auctor ut
            mi ut vestibulum. Suspendisse a turpis id nisi faucibus efficitur.
            Sed ipsum urna, ultricies eget justo vitae, hendrerit malesuada
            mauris. Donec a turpis malesuada, euismod massa id, ultrices ex.
          </p>
          <p>
            Nullam vulputate ultrices tellus et bibendum. Integer iaculis
            pharetra ligula, eget condimentum nunc malesuada nec. Nullam eu
            lorem sed tellus condimentum aliquam in in eros. Maecenas sagittis,
            justo quis blandit aliquet, sem felis interdum elit, ac dictum purus
            mauris nec mauris. In hac habitasse platea dictumst. Morbi placerat
            nec lorem in feugiat. In tristique laoreet diam, vel vulputate mi
            placerat id. Vivamus at quam rutrum, finibus tortor laoreet,
            venenatis sem. Nam vitae libero ultrices, tristique ligula non,
            sagittis elit. Vestibulum sed turpis nec eros convallis viverra.
            Maecenas nunc arcu, pharetra bibendum feugiat ut, consequat quis
            massa. Vivamus aliquet eros a efficitur fringilla. Aenean auctor ut
            mi ut vestibulum. Suspendisse a turpis id nisi faucibus efficitur.
            Sed ipsum urna, ultricies eget justo vitae, hendrerit malesuada
            mauris. Donec a turpis malesuada, euismod massa id, ultrices ex.
          </p>
          <p>
            Nullam vulputate ultrices tellus et bibendum. Integer iaculis
            pharetra ligula, eget condimentum nunc malesuada nec. Nullam eu
            lorem sed tellus condimentum aliquam in in eros. Maecenas sagittis,
            justo quis blandit aliquet, sem felis interdum elit, ac dictum purus
            mauris nec mauris. In hac habitasse platea dictumst. Morbi placerat
            nec lorem in feugiat. In tristique laoreet diam, vel vulputate mi
            placerat id. Vivamus at quam rutrum, finibus tortor laoreet,
            venenatis sem. Nam vitae libero ultrices, tristique ligula non,
            sagittis elit. Vestibulum sed turpis nec eros convallis viverra.
            Maecenas nunc arcu, pharetra bibendum feugiat ut, consequat quis
            massa. Vivamus aliquet eros a efficitur fringilla. Aenean auctor ut
            mi ut vestibulum. Suspendisse a turpis id nisi faucibus efficitur.
            Sed ipsum urna, ultricies eget justo vitae, hendrerit malesuada
            mauris. Donec a turpis malesuada, euismod massa id, ultrices ex.
          </p>
        </div>
      </div>
    </>
  );
};

export default AdminBackgroundCard;
