import React from "react";
import AdminBackgroundCard from "./common-components/AdminBackgroundCard";
import "./Dashboard.css";
import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";
import "../../styles/common/global.css";
import { GrView } from "react-icons/gr";
import { VscFilePdf } from "react-icons/vsc";
import { TbFileImport } from "react-icons/tb";

const ActionsComponent = (props) => {
  return <button onClick={() => console.log(props)}>Test</button>;
};

const QuestionsComponent = () => {
  return (
    <a href="#">
      <GrView />
      View
    </a>
  );
};

const AttachmentsComponent = () => {
  return (
    <p>
      <VscFilePdf />
      mRNA flu report.pdf
    </p>
  );
};

const columns = [
  { key: "participantsName", name: "Participants Name" },
  { key: "recievedDateTime", name: "Recieved Date Time" },
  { key: "researchName", name: "Research Name" },
  {
    key: "questions",
    name: "Questions",
    formatter: QuestionsComponent,
  },
  { key: "attachment", name: "Attachment", formatter: AttachmentsComponent },
  {
    key: "actions",
    name: "Actions",
    formatter: ActionsComponent,
    getRowMetaData: (row) => row,
  },
];

const rows = [
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
  return (
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
          <div className="col-3  ms-2 d-flex flex-row records-card">
            <div className="p-3">
              <h3>Total Records</h3>
              <h4>765</h4>
            </div>
            <div className="p-3">
              <h5>Total Participants</h5>
              <h4>765</h4>
            </div>
          </div>
          <div className="col-3 records-card ms-2">
            <div className="py-4 fs-22 fw-b px-5">
              <p>Pending for Review</p>
              <p>34</p>
            </div>
          </div>
          <div className="col-3 records-card ms-2">
            <div className="py-4 fs-22 fw-b px-5">
              <p>Closed</p>
              <p>731</p>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <DataGrid columns={columns} rows={rows} />
        </div>
      </div>
    </AdminBackgroundCard>
  );
};

export default Dashboard;
