import React, { useEffect, useReducer } from "react";
import AdminBackgroundCard from "../AdminBackground/AdminBackgroundCard";
import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";
import "../../../styles/common/global.css";
import { TbFileImport } from "react-icons/tb";
import { HiDotsHorizontal } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import AdminAPI from "../../../api/patients";
import { dashboardReducer } from "../../../Redux/Reducers";
import { dashboardState } from "../../../Redux/States";

const adminAPI = new AdminAPI();

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
  { key: "participantName", name: "Participants Name" },
  { key: "studyType", name: "Study Type" },
  { key: "registrationDate", name: "Registered Date" },
  { key: "email", name: "Email" },
  { key: "contact", name: "Contact" },
  {
    key: "actions",
    name: "Actions",
    formatter: ActionsComponent,
    getRowMetaData: (row) => row,
  },
];


const Participants = () => {

  
  const [state, dispatch] = useReducer(dashboardReducer, dashboardState);
  
  const rows = state.participants;

  useEffect(() => {
    async function getAllParticipants() {
      try {
        const result = await adminAPI.getParticipants();
        console.log(result.data.participantsList);
        await dispatch({ type: "getParticipants", payload: result.data.participantsList });
      } catch (e) {
        console.log(e);
      }
    }
  
    getAllParticipants();
  }, []);

  console.log(state.participants);

  return (
    <AdminBackgroundCard>
      <div className="d-flex flex-column ">
        <div className="d-flex flex-row">
          <div className="col-5 d-flex flex-row justify-content-between">
            <div>
              <p className="fs-18 mb-0 ">Participants</p>
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
                  <Link to="/participants" className="a-tag-common">
                    Participants
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

        <div className="mt-3">
          <DataGrid columns={columns} rows={rows} className="data-grid-comp" />
        </div>
      </div>
    </AdminBackgroundCard>
  );
};

export default Participants;
