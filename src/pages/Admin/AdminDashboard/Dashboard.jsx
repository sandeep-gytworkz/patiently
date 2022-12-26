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
import "../../../styles/common/global.css";
import { VscFilePdf } from "react-icons/vsc";
import { TbFileImport } from "react-icons/tb";
import { HiDotsHorizontal } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";

// Components Imports
import AdminBackgroundCard from "../AdminBackground/AdminBackgroundCard";
import Table from "../../../components/Table";

// Methods, Classes, Utilities Import
import AdminAPI from "../../../api/patients";
import { dashboardState } from "../../../Redux/States";
import { dashboardReducer } from "../../../Redux/Reducers";
import Card from "../../../components/Card";
import Modal from "../../../components/Modal";
import LargeModal from "../../../components/Modal/LargeModal";

export const DashboardContext = createContext();

const adminAPI = new AdminAPI();

const Dashboard = () => {

  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [show, setShow] = useState(false);
  const [questionsOpen, setQuestionsOpen] = useState(false);

  const handleModalClick = (e) =>{
    e.preventDefault();
    setTop(e.clientY);
    setLeft(e.clientX);
    setShow(true);
  }

  const handleClose = () => {
    setShow(false);
  }

  const tableColumns = [
    { accessor: "participantsName", Header: "Participants Name", isSorted: true },
    { accessor: "recievedDateTime", Header: "Recieved Date Time" },
    { accessor: "researchName", Header: "Research Name", disableSortBy: true, },
    {
      accessor: "questions",
      Header: "Questions",
      disableSortBy: true,
      Cell: () => <div style={{color: 'blue', cursor: 'pointer', display: 'flex', alignItems: 'center', fontWeight: 'normal'}}><AiOutlineEye onClick={()=>{setQuestionsOpen(true)}} size='20px' /> <div onClick={()=>{setQuestionsOpen(true)}} style={{marginLeft: '6px'}}>View</div>
      {/* <LargeModal questionsOpen={questionsOpen} setQuestionsOpen={setQuestionsOpen} /> */}
      </div>
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
      Cell: (props) => <div><HiDotsHorizontal onClick={(e) => handleModalClick(e)} />
      {/* <Modal children={props} handleClose={handleClose} show={show} top={top} left={left} /> */}
      </div>,
    },
  ];

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
          <Card title={`Total Records`} value={`765`} subTitle={`Total Participants`} subValue={`667`} iconColor={`#304C9F`} iconBackground={`#f0f4ff`} />
          <Card title={`Pending for Review`} value={`34`} iconColor={`#E24803`} iconBackground={`#fef1ea`} />
          <Card title={`Closed`} value={`731`} iconColor={`#E2A603`} iconBackground={`#FDF6E5`} />
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
