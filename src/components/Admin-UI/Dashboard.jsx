import React from "react";
import AdminBackgroundCard from "./common-components/AdminBackgroundCard";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <AdminBackgroundCard>
      <div className="d-flex flex-column">
        <div className="d-flex flex-row justify-content-between">
          <div>
            <p>Dashboard</p>
          </div>
          <div className="d-flex flex-row">
            <button>Add Participants</button>
            <div className="dropdown mx-2">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                This Month
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row col-12 pt-2">
          <div className="col-3  ms-2 d-flex flex-row records-card">
            <div>
              <h3>Total Records</h3>
              <h4>765</h4>
            </div>
            <div>
              <h5>Total Participants</h5>
              <h4>765</h4>
            </div>
          </div>
          <div className="col-3 records-card ms-2"></div>
          <div className="col-3 records-card ms-2"></div>
        </div>
      </div>
    </AdminBackgroundCard>
  );
};

export default Dashboard;
