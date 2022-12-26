import React from "react";
import AdminBackgroundCard from "../AdminBackground/AdminBackgroundCard";
import "./Dashboard.css";
import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";
import "../../../styles/common/global.css";
import { GrView, GrCopy } from "react-icons/gr";
import { VscFilePdf } from "react-icons/vsc";
import { TbFileImport } from "react-icons/tb";
import { HiDotsHorizontal } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

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
  { key: "studyType", name: "Study Type" },
  { key: "receivedDateTime", name: "Received date and Time" },
  { key: "email", name: "Email" },
  { key: "contact", name: "Contact" },
  { key: "questions", name: "Questions", formatter: QuestionsComponent },
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
    participantsName: "Sara Jones",
    studyType: "mRNA Flu Vaccine Study",
    receivedDateTime: "11/25/2022 9:00 AM",
    email: "dev@mail.com",
    contact: "887-897-8978",
    questions: "questions",
    attachment: "attachment",
    actions: "actions",
  },
  {
    participantsName: "Sara Jones",
    studyType: "mRNA Flu Vaccine Study",
    receivedDateTime: "11/25/2022 9:00 AM",
    email: "dev@mail.com",
    contact: "887-897-8978",
    questions: "questions",
    attachment: "attachment",
    actions: "actions",
  },
  {
    participantsName: "Sara Jones",
    studyType: "mRNA Flu Vaccine Study",
    receivedDateTime: "11/25/2022 9:00 AM",
    email: "dev@mail.com",
    contact: "887-897-8978",
    questions: "questions",
    attachment: "attachment",
    actions: "actions",
  },
  {
    participantsName: "Sara Jones",
    studyType: "mRNA Flu Vaccine Study",
    receivedDateTime: "11/25/2022 9:00 AM",
    email: "dev@mail.com",
    contact: "887-897-8978",
    questions: "questions",
    attachment: "attachment",
    actions: "actions",
  },
  {
    participantsName: "Sara Jones",
    studyType: "mRNA Flu Vaccine Study",
    receivedDateTime: "11/25/2022 9:00 AM",
    email: "dev@mail.com",
    contact: "887-897-8978",
    questions: "questions",
    attachment: "attachment",
    actions: "actions",
  },
  {
    participantsName: "Sara Jones",
    studyType: "mRNA Flu Vaccine Study",
    receivedDateTime: "11/25/2022 9:00 AM",
    email: "dev@mail.com",
    contact: "887-897-8978",
    questions: "questions",
    attachment: "attachment",
    actions: "actions",
  },
  {
    participantsName: "Sara Jones",
    studyType: "mRNA Flu Vaccine Study",
    receivedDateTime: "11/25/2022 9:00 AM",
    email: "dev@mail.com",
    contact: "887-897-8978",
    questions: "questions",
    attachment: "attachment",
    actions: "actions",
  },
  {
    participantsName: "Sara Jones",
    studyType: "mRNA Flu Vaccine Study",
    receivedDateTime: "11/25/2022 9:00 AM",
    email: "dev@mail.com",
    contact: "887-897-8978",
    questions: "questions",
    attachment: "attachment",
    actions: "actions",
  },
  {
    participantsName: "Sara Jones",
    studyType: "mRNA Flu Vaccine Study",
    receivedDateTime: "11/25/2022 9:00 AM",
    email: "dev@mail.com",
    contact: "887-897-8978",
    questions: "questions",
    attachment: "attachment",
    actions: "actions",
  },
];

const Records = () => {
  return (
    <AdminBackgroundCard>
      <div className="d-flex flex-column ">
        <div className="d-flex flex-row">
          <div className="col-5 d-flex flex-row justify-content-between">
            <div>
              <p className="fs-18 mb-0 ">Records</p>
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
                  <Link to="/records" className="a-tag-common">
                    Records
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

export default Records;
