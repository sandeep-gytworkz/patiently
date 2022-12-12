import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useMemo,
} from "react";
import AdminBackgroundCard from "./common-components/AdminBackgroundCard";
import "./Dashboard.css";
import "react-data-grid/lib/styles.css";

import "../../styles/common/global.css";
import { GrView, GrCopy } from "react-icons/gr";
import { VscFilePdf } from "react-icons/vsc";
import { TbFileImport } from "react-icons/tb";
import { HiDotsHorizontal } from "react-icons/hi";
import DataGridComp from "./common-components/DataGrid/DataGridComp";
import { dashboardReducer } from "../../Redux/Reducers";
import { dashboardState } from "../../Redux/States";
import AdminAPI from "../../api/patients";
import { useTable } from "react-table";
import "./ReactTable.css";

export const DashboardContext = createContext();

const adminAPI = new AdminAPI();

const tableColumns = [
  { accessor: "participantsName", Header: "Participants Name" },
  { accessor: "recievedDateTime", Header: "Recieved Date Time" },
  { accessor: "researchName", Header: "Research Name" },
  {
    accessor: "questions",
    Header: "Questions",
  },
  {
    accessor: "attachment",
    Header: "Attachment",
  },
  {
    accessor: "actions",
    Header: "Actions",
    Cell: ({ row }) => <HiDotsHorizontal onClick={() => alert("clicked")} />,
  },
];

const tableRows = [
  {
    participantsName: "riyaz",
    recievedDateTime: "15nov2022",
    researchName: "disease data",
    questions: "questions",
    attachment: "attachment",
    actions: "actions",
  },
  {
    participantsName: "riyaz",
    recievedDateTime: "15nov2022",
    researchName: "disease data",
    questions: "questions",
    attachment: "attachment",
    actions: "actions",
  },
  {
    participantsName: "riyaz",
    recievedDateTime: "15nov2022",
    researchName: "disease data",
    questions: "questions",
    attachment: "attachment",
    actions: "actions",
  },
  {
    participantsName: "riyaz",
    recievedDateTime: "15nov2022",
    researchName: "disease data",
    questions: "questions",
    attachment: "attachment",
    actions: "actions",
  },
  {
    participantsName: "riyaz",
    recievedDateTime: "15nov2022",
    researchName: "disease data",
    questions: "questions",
    attachment: "attachment",
    actions: "actions",
  },
  {
    participantsName: "riyaz",
    recievedDateTime: "15nov2022",
    researchName: "disease data",
    questions: "questions",
    attachment: "attachment",
    actions: "actions",
  },
  {
    participantsName: "riyaz",
    recievedDateTime: "15nov2022",
    researchName: "disease data",
    questions: "questions",
    attachment: "attachment",
    actions: "actions",
  },
  {
    participantsName: "riyaz",
    recievedDateTime: "15nov2022",
    researchName: "disease data",
    questions: "questions",
    attachment: "attachment",
    actions: "actions",
  },
  {
    participantsName: "riyaz",
    recievedDateTime: "15nov2022",
    researchName: "disease data",
    questions: "questions",
    attachment: "attachment",
    actions: "actions",
  },
];

const Dashboard = () => {
  const columns = useMemo(() => tableColumns, []);
  const data = useMemo(() => tableRows, []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const [state, dispatch] = useReducer(dashboardReducer, dashboardState);

  const dashboardContext = useContext(DashboardContext);

  useEffect(() => {
    async function getAllPosts() {
      try {
        const result = await adminAPI.getPosts();
        console.log(result.data);
        await dispatch({ type: "getPatients", payload: result.data });
      } catch (e) {
        console.log(e);
      }
    }

    getAllPosts();
  }, []);

  console.log(state.patients);

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
                  <span className="bg-primary rounded-1 p-2 me-2 text-dark bg-opacity-10">
                    <GrCopy size={"22px"} />
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
                <span className="bg-danger rounded-1 p-2 me-2 text-warning bg-opacity-10">
                  <GrCopy size={"22px"} />
                </span>
                34
              </h4>
            </div>
          </div>
          <div className="col-3 pe-2">
            <div className="records-card p-4">
              <h3 className="fs-18 dashboard-primary-color">Closed</h3>
              <h4 className="py-2 fs-32 dashboard-primary-color">
                <span className="bg-warning rounded-1 p-2 me-2 text-dark bg-opacity-10">
                  <GrCopy size={"22px"} />
                </span>
                731
              </h4>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, index) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </AdminBackgroundCard>
    // </DashboardContext>
  );
};

export default Dashboard;
