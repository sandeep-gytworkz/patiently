import React from "react";
import DataGrid from "react-data-grid";
import "./DataGrid.css";

const DataGridComp = ({ columns, rows, title }) => {
  return (
    <div>
      {title && <div className="dataGridTitle">{title}</div>}
      <DataGrid columns={columns} rows={rows} className="data-grid-comp" />
    </div>
  );
};

export default DataGridComp;
