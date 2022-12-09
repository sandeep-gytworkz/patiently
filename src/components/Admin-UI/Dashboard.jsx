import React from "react";
import AdminBackgroundCard from "./common-components/AdminBackgroundCard";
import "./Dashboard.css";
import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";
import "../../styles/common/global.css";
import { GrView, GrCopy } from "react-icons/gr";
import { VscFilePdf } from "react-icons/vsc";
import { TbFileImport } from "react-icons/tb";
import {HiDotsHorizontal} from "react-icons/hi"

const ActionsComponent = (props) => {
  return <div onClick={() => console.log(props)} className="col-3 text-center text-black-50 fs-32"><HiDotsHorizontal size={"28px"}/></div>;
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
          <div className="col-3 pe-2">
            <div className="d-flex flex-row records-card p-4">
              <div className="col-7">
                <h3 className="fs-18 dashboard-primary-color">Total Records</h3>
                <h4 className="py-2 fs-32 dashboard-primary-color"><span className="bg-primary rounded-1 p-2 me-2 text-dark bg-opacity-10"><GrCopy size={'22px'}/></span>765</h4>
              </div>
              <div className="col-5">
                <h5 className="fs-16 dashboard-primary-color">Total Participants</h5>
                <h4 className="dashboard-primary-color">667</h4>
              </div>
            </div>
          </div>
          <div className="col-3 pe-2">
            <div className="records-card p-4">
              <h3 className="fs-18 dashboard-primary-color">Pending for Review</h3>
              <h4 className="py-2 fs-32 dashboard-primary-color"><span className="bg-danger rounded-1 p-2 me-2 text-warning bg-opacity-10"><GrCopy size={'22px'}/></span>34</h4>
            </div>
          </div>
          <div className="col-3 pe-2">
            <div className="records-card p-4">
              <h3 className="fs-18 dashboard-primary-color">Closed</h3>
              <h4 className="py-2 fs-32 dashboard-primary-color"><span className="bg-warning rounded-1 p-2 me-2 text-dark bg-opacity-10"><GrCopy size={'22px'}/></span>731</h4>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <DataGrid columns={columns} rows={rows} className="data-grid-comp"/>
        </div>
      </div>
    </AdminBackgroundCard>
  );
};

export default Dashboard;
