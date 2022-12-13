import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

// Designs, Icons, Styles Imports
import "./Dashboard.css";
import "react-data-grid/lib/styles.css";
import "../../styles/common/global.css";
import { FaRegCopy } from "react-icons/fa";
import { VscFilePdf } from "react-icons/vsc";
import { TbFileImport } from "react-icons/tb";
import { HiDotsHorizontal } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";

// Components Imports
import AdminBackgroundCard from "./common-components/AdminBackgroundCard";
import Table from "../reusable/Table";

// Methods, Classes, Utilities Import
import AdminAPI from "../../api/patients";
import { dashboardState } from "../../Redux/States";
import { dashboardReducer } from "../../Redux/Reducers";

export const DashboardContext = createContext();

const adminAPI = new AdminAPI();

const tableColumns = [
  { accessor: "participantsName", Header: "Participants Name", isSorted: true },
  { accessor: "recievedDateTime", Header: "Recieved Date Time" },
  { accessor: "researchName", Header: "Research Name", disableSortBy: true, },
  {
    accessor: "questions",
    Header: "Questions",
    disableSortBy: true,
    Cell: () => <div style={{color: 'blue', cursor: 'pointer', display: 'flex', alignItems: 'center', fontWeight: 'normal'}}><AiOutlineEye size='20px' /> <div style={{marginLeft: '6px'}}>View</div></div>
  },
  {
    accessor: "attachment",
    Header: "Attachment",
    disableSortBy: true,
    Cell: ({value}) => <div style={{color: 'blue', cursor: 'pointer', display: 'flex', alignItems: 'center', fontWeight: 'normal'}}><VscFilePdf size='20px' /><div style={{marginLeft: '6px'}}>{value}</div></div>
  },
  {
    accessor: "actions",
    Header: "Actions",
    disableSortBy: true,
    Cell: (props) => <HiDotsHorizontal onClick={() => console.log(props)} />,
  },
];


const Dashboard = () => {
  const [state, dispatch] = useReducer(dashboardReducer, dashboardState);
  const [filteredDashboard, setFilteredDashboard] = useState([]);

  const dashboardContext = useContext(DashboardContext);
  

  useEffect(() => {
    async function getDashboard() {
      try {
        const result = await adminAPI.getDashboard();
        await dispatch({ type: "getDashboard", payload: result.data.dashboardList });
        setFilteredDashboard(result.data.dashboardList)
      } catch (e) {
        console.log(e);
      }
    }

    getDashboard();
  }, []);

  return (
    //
    <AdminBackgroundCard>
      <div className="d-flex flex-column ">
        <div className="d-flex flex-row justify-content-between">
          <div>
            <p>Dashboard</p>
          </div>
          <div className="d-flex flex-row">
            <button className="button-layout participants-btn px-2">
              <TbFileImport className="mx-2" />
              Add Participants
            </button>
            <div className="mx-2">
              <select
                className="form-select selection-menu"
                aria-label="Default select example"
              >
                <option selected value="January">
                  January
                </option>

                <option value=" February">February</option>
                <option value=" March">March</option>

                <option value=" April">April</option>
              </select>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row col-12 pt-2">
          <div className="col-3 pe-2">
            <div className="d-flex flex-row records-card p-4">
              <div className="col-7">
                <h3 className="fs-18 dashboard-primary-color">Total Records</h3>
                <h4 className="py-2 fs-32 dashboard-primary-color">
                  <span className="rounded-1 p-2 me-2 text-dark bg-opacity-10" style={{backgroundColor: '#f0f4ff'}}>
                    <FaRegCopy color='#304C9F' size={"22px"} />
                  </span>
                  765
                </h4>
              </div>
              <div className="col-5">
                <h5 className="fs-16 dashboard-primary-color">
                  Total Participants
                </h5>
                <h4 className="dashboard-primary-color">667</h4>
              </div>
            </div>
          </div>
          <div className="col-3 pe-2">
            <div className="records-card p-4">
              <h3 className="fs-18 dashboard-primary-color">
                Pending for Review
              </h3>
              <h4 className="py-2 fs-32 dashboard-primary-color">
                <span className="rounded-1 p-2 me-2 text-warning bg-opacity-10" style={{backgroundColor: '#fef1ea'}}>
                  <FaRegCopy color="#E24803" size={"22px"} />
                </span>
                34
              </h4>
            </div>
          </div>
          <div className="col-3 pe-2">
            <div className="records-card p-4">
              <h3 className="fs-18 dashboard-primary-color">Closed</h3>
              <h4 className="py-2 fs-32 dashboard-primary-color">
                <span className="rounded-1 p-2 me-2 text-dark bg-opacity-10" style={{backgroundColor: '#FDF6E5'}}>
                  <FaRegCopy color="#E2A603" size={"22px"} />
                </span>
                731
              </h4>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <Table columns={tableColumns} data={filteredDashboard} title={`Hello`}/>
        </div>
      </div>
    </AdminBackgroundCard>
    // </DashboardContext>
  );
};

export default Dashboard;
