import React from "react";
import AdminBackgroundCard from "./common-components/AdminBackgroundCard";
import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";
import "../../styles/common/global.css";
import { GrView, GrCopy } from "react-icons/gr";
import { VscFilePdf } from "react-icons/vsc";
import { TbFileImport } from "react-icons/tb";
import { HiDotsHorizontal } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./ParticipantProfile.css";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

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
  { key: "receivedDateTime", name: "Received date and Time" },
  { key: "studyType", name: "Study Type" },
  { key: "status", name: "Status" },
  { key: "questions", name: "Questions", formatter: QuestionsComponent },
  { key: "attachment", name: "Attachment", formatter: AttachmentsComponent },
];

const rows = [
  {
    receivedDateTime: "11/25/2022 9:00 AM",
    studyType: "mRNA Flu Vaccine Study",
    status: "Not Reviewed",
    questions: "questions",
    attachment: "attachment",
  },
  {
    receivedDateTime: "11/25/2022 9:00 AM",
    studyType: "mRNA Flu Vaccine Study",
    status: "Closed",
    questions: "questions",
    attachment: "attachment",
  },
];

const ParticipantProfile = () => {
  return (
    <AdminBackgroundCard>
      <div className="d-flex flex-column ">
        <div>
          <p className="fs-18 mb-0 ">Participant Profile</p>
          <p className="mb-0 fs-14">
            <span>
              <Link to="/dashboard">Home</Link>
            </span>
            {">"}
            <span>
              <Link to="/records">Records</Link>
            </span>
            {">"}
            <span>
              <a href="#">Participant Profile</a>
            </span>
          </p>
        </div>
        <div className="col-12 d-flex flex-row participant-profile-div p-3 justify-content-between mt-2">
          <div>
            <p>Sara Jones</p>
            <p>Self</p>
          </div>

          <div>
            <p>Participant ID</p>
            <p>77999XXX</p>
          </div>
          <div>
            <p>Phone Number</p>
            <p>(XXX) 8XX-0000</p>
          </div>
          <div>
            <p>Email</p>
            <p>Mail@email.com</p>
          </div>
          <div>
            <p>Date Registered</p>
            <p>01/12/2022</p>
          </div>
          <div className="d-flex flex-row align-items-center">
            <BiEditAlt className="mx-2" />
            <RiDeleteBin6Line className="mx-2" />
          </div>
        </div>

        <div className="mt-3">
          <DataGrid columns={columns} rows={rows} className="data-grid-comp" />
        </div>
      </div>
    </AdminBackgroundCard>
  );
};

export default ParticipantProfile;
