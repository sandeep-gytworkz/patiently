import React from "react";
import AdminBackgroundCard from "./common-components/AdminBackgroundCard";
import "react-data-grid/lib/styles.css";
import "../../styles/common/global.css";
import { TbFileImport } from "react-icons/tb";
import { HiDotsHorizontal } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import DataGridComp from "./common-components/DataGrid/DataGridComp";
import "./AccountManagement.css";

const ActionsComponent = (props) => {
  return (
    <div
      onClick={() => console.log(props)}
      className="col-3 text-center text-black-50 fs-32"
    >
      <HiDotsHorizontal size={"28px"} />
    </div>
  );
};

const columns = [
  { key: "userName", name: "User Name" },
  { key: "roleType", name: "Role Type" },
  { key: "createdBy", name: "Created By" },
  { key: "email", name: "Email" },
  { key: "contact", name: "Contact" },
  {
    key: "actions",
    name: "Actions",
    formatter: ActionsComponent,
    getRowMetaData: (row) => row,
  },
];

const rows = [
  {
    userName: "Sara Jones",
    roleType: "mAdmin",
    createdBy: "1Sara Jones",
    email: "dev@mail.com",
    contact: "887-897-8978",
    actions: "actions",
  },
  {
    userName: "Sara Jones",
    roleType: "mAdmin",
    createdBy: "1Sara Jones",
    email: "dev@mail.com",
    contact: "887-897-8978",
    actions: "actions",
  },
  {
    userName: "Sara Jones",
    roleType: "mAdmin",
    createdBy: "1Sara Jones",
    email: "dev@mail.com",
    contact: "887-897-8978",
    actions: "actions",
  },
  {
    userName: "Sara Jones",
    roleType: "mAdmin",
    createdBy: "1Sara Jones",
    email: "dev@mail.com",
    contact: "887-897-8978",
    actions: "actions",
  },
  {
    userName: "Sara Jones",
    roleType: "mAdmin",
    createdBy: "1Sara Jones",
    email: "dev@mail.com",
    contact: "887-897-8978",
    actions: "actions",
  },
];

const Participants = () => {
  return (
    <AdminBackgroundCard>
      <div className="d-flex flex-column ">
        <div className="d-flex flex-row">
          <div className="col-5 d-flex flex-row justify-content-between">
            <div>
              <p className="fs-18 mb-0 ">Account Management</p>
              <p className="mb-0 fs-14">
                <span>
                  <Link to="/dashboard" className="a-tag-common">
                    Home
                  </Link>
                  &nbsp;
                </span>
                {">"}
                <span>
                  &nbsp;
                  <Link to="/account-management" className="a-tag-common">
                    Account Management
                  </Link>
                </span>
              </p>
            </div>
            <form className="col-6">
              <div className="form-control me-2 search-bar d-flex ">
                <input
                  type="search"
                  placeholder="Search Here"
                  aria-label="Search"
                />
                <button type="submit">
                  <BiSearch />
                </button>
              </div>
            </form>
          </div>
          <div className="col-7 d-flex  justify-content-end">
            <button className="button-layout participants-btn px-2">
              <TbFileImport className="mx-2" />
              Add Participants
            </button>
          </div>
        </div>

        <div className="mt-3 bg-white">
          <ul
            className="nav nav-pills my-3 account-mgmt-tab"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-account-users"
                data-bs-toggle="pill"
                data-bs-target="#pills-account-users"
                type="button"
                role="tab"
                aria-controls="pills-account-users"
                aria-selected="true"
              >
                Account Users
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-roles-permissions"
                data-bs-toggle="pill"
                data-bs-target="#pills-roles-permissions"
                type="button"
                role="tab"
                aria-controls="pills-roles-permissions"
                aria-selected="false"
              >
                Roles and Permissions
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade  "
              id="pills-account-users"
              role="tabpanel"
              aria-labelledby="pills-account-users-tab"
            >
              <DataGridComp columns={columns} rows={rows} />
            </div>
            <div
              className="tab-pane fade show active "
              id="pills-roles-permissions"
              role="tabpanel"
              aria-labelledby="pills-roles-permissions-tab"
            >
              <div className="d-flex flex-column bg-white">
                <div className="d-flex flex-row justify-content-between mb-2 px-3 ">
                  <div>
                    <p className="mb-0">Select Role</p>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Administrator</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="d-flex flex-row py-2">
                    <button className="mx-2 account-mgmnt-btn px-2">
                      Delete
                    </button>
                    <button className="mx-2 account-mgmnt-btn px-2">
                      Duplicate
                    </button>
                    <button className="mx-2 account-mgmnt-btn px-2">
                      Add New Role
                    </button>
                  </div>
                </div>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Admin
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body d-flex flex-row">
                        <div className="mx-5">
                          <p>Create staff</p>
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexSwitchCheckDefault"
                            >
                              Yes
                            </label>
                          </div>
                        </div>
                        <div className="mx-5">
                          <p>Add staff</p>
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexSwitchCheckDefault"
                            >
                              Yes
                            </label>
                          </div>
                        </div>
                        <div className="mx-5">
                          <p>Update staff</p>
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexSwitchCheckDefault"
                            >
                              Yes
                            </label>
                          </div>
                        </div>
                        <div className="mx-5">
                          <p>Edit staff</p>
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexSwitchCheckDefault"
                            >
                              Yes
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Review Reports
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>
                          This is the second item's accordion body.
                        </strong>{" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Users Management
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>
                          This is the third item's accordion body.
                        </strong>{" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminBackgroundCard>
  );
};

export default Participants;
